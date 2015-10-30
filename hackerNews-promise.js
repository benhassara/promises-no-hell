var request = require('request');

var hackerNewsPromise = new Promise(function(resolve, reject) {
    request('http://news.ycombinator.com', function(error, response, body) {
        if (error) { reject('Everything is on fire!'); }
        if (response && response.statusCode === 200) {
            resolve("It's alive!");
        }
        else { reject('Something bad happened...'); }
    });
});

hackerNewsPromise.then(function (success) {
    console.log('Success: ', success);
})
.catch(function (error) {
    console.log('Error: ', error);
});
