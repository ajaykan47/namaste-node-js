//const calSum = require("./sum"); 

const obj = require ("./sum.js");
//const {calSum} = require ("./sum.js") // destrcturing 

var name ="Node JS"
var a = 10;
var b =20;

obj.calSum(a,b); // eferenceError: calSum is not defined if we not use to moudles export. 

console.log('Display Name: ', name);
console.log('Display the sum of A+B:', a+b);

//Global is node js thing not a window
console.log('Global', global); // Global object is global over here
console.log(this) // Empty object (It is not equal to Global object which was in case of browser)

//window
//this
//self
//frames
    
//globalThis : this will refer to same global object.
console.log(globalThis === global);



