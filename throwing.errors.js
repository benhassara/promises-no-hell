var ourResult = true;

var promise = new Promise(function(resolve, reject) {
    if (ourResult) { resolve(10); }
    else { reject(':('); }
});

function successFn(message) {
    console.log('Success: ', message);
    return message;
}

function successMultiply(value) {
    var product = value * 10;
    console.log('Multiplied by 10: ', product);
    return product;
}

function errorFn(message) { console.log('Error: ', message); }

promise.then(successFn)
       .then(successMultiply)
       .then(function(result) {
           var product = result * 10;
           console.log('Multiplied by 10: ', product);
           throw new Error("Shit's broken.");
       })
       .then(successMultiply)
       .then(successMultiply)
       .catch(function(error) {
           console.log('Error: ', error.message);
       });
