var request = require('request');
var cheerio = require('cheerio');

var query = 'javascript';
var hackerNews = {
    url: 'http://news.ycombinator.com',
    name: 'Hacker News',
    selector: 'tr.athing td.title a'
};
var reddit = {
    url: 'https://www.reddit.com/r/Web_Development/',
    name: 'Reddit /r/Web_Development',
    selector: 'p.title a.title'
};

function requestPromise(site, query, queryBool) {
    return new Promise(function(resolve, reject) {
        request(site.url, function(error, response, body) {
            if (error) { reject('The internet is on fire!'); }
            if (response && response.statusCode === 200) {
                var $ = cheerio.load(body);
                var target = $(site.selector);
                var title = target.length ? target.first().text() : target.text();

                console.log('Searching ' + site.name + ' for \'' + query + '\'...');

                var log = '';
                if (title.match(query)) {
                    log = 'Success!\n Found \'' + query + '\' in title: \'' + title + '\'\n';
                    console.log(log);
                    resolve(true);
                }
                else {
                    log = 'Match failed!\n \'' + query + '\' not found in title: \'' + title + '\'\n';
                    console.log(log);
                    resolve(false);
                }
            }
        });
    });
}

function hackerNewsReq(queryBool) { return requestPromise(hackerNews, query, queryBool); }
function redditReq(queryBool) { return requestPromise(reddit, query, queryBool); }

hackerNewsReq()
.then(function(result) {
    redditReq(result);
});
