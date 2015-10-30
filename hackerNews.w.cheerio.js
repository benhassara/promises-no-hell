var request = require('request');
var cheerio = require('cheerio');

var hackerNewsCheerio = new Promise(function(resolve, reject) {
    request('http://news.ycombinator.com', function(error, response, body) {
        if (error) { reject('The internet is in flames!'); }
        if (response && response.statusCode === 200) {
            var $ = cheerio.load(body);
            var firstTitle = $('tr.athing td.title a').html();
            var query = 'javascript';

            if (firstTitle.match(query)) {
                resolve({
                    foundMatch: true,
                    message: "found '" + query + "' in title - " + firstTitle
                });
            }
            else {
                reject("failed to find '" + query + "' in title - " + firstTitle);
            }
        }
    });
});

hackerNewsCheerio.then(function(result) {
    console.log('Success! ', result.message);
})
.catch(function(error) {
    console.log('Error: ', error);
});
