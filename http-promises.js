var request = require('request');

var promise = new Promise(function(resolve, reject) {
    request('https://www.google.com', function(error, response, body) {
        var message = '';
        if (response && response.statusCode === 200) {
            message = 'Status Code [' + response.statusCode + ']: ' + "It's Alive!";
            resolve(message);
        }
        else {
            message = "Everything's on fire.";
            reject(message);
        }
    });
});

promise.then(function(result) {
    console.log(result);
})
.catch(function(error) {
    console.log(error);
});
