// initial example

var ourResult = true;

var promise = new Promise(function(resolve, reject) {
    if (ourResult) {resolve('It worked!');}
    else {reject(':()');}
});

promise.then(function(result) {
    console.log('Result: ', result);
});
