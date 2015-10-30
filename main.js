var ourResult = true;

var promise = new Promise(function(resolve, reject) {
    if (ourResult) { resolve('It worked'); }
    else { reject(':('); }
});

// promise.then(function(result) {      // initial example
//     console.log('Result: ', result);
// }).catch(function(error) {
//     console.log('Error: ', error);
// });

// catch is more explicit, but the below means the same thing
// catch is actually an alias for this, but the syntactic sugar
// makes it more apparent what's going on semantically
//
// promise.then(function(result) {
//     console.log('Result: ', result);
// }, function(error) {
//     console.log('Error: ', error);
// });


// there's also another way to write it, with named functions

function successFn(message) {
    console.log(message);
    return message + '!!!!!!!!!!!!!';
}
function errorFn(message) { console.log('Error: ', message); }

promise.then(successFn, errorFn)    // you can chain your thens
       .then(successFn, errorFn);
