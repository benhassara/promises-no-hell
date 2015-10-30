var ourResult = true;

var promise = new Promise(function(resolve, reject) {
    if (ourResult) { resolve(10); }
    else { reject(':('); }
});

function successFn(message) {
    console.log('Success: ', message);
    return message;
}

function errorFn(message) { console.log('Error: ', message); }

promise.then(successFn, errorFn)
       .then(function (result) {
           var product = result * 10;
           console.log('Multiplied by 10: ', product);
           return product;
       });
