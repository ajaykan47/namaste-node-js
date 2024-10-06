//Modules protected their variables and function from leaking

console.log('let me check this is work or not');
var x = "hello modules"
function calSum(a, b) {
    const sum = a+b;
    console.log('sum:-',  sum);
    //return sum;
}

// module.exports = calSum;

// module.exports = {
// x: x,
// calSum: calSum
// }


//short hande code
module.exports = {
    x,
    calSum
    }

    // we can also use this method
    // module.exports.x= x;
    // module.exports.calSum = calSum;