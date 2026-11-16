// syntax

// function name() {
//      code
// }




// ex
// function greet() {
//     console.log("hello javascript");
// }



// function calling
// function invocation
// greet();
// greet();
// greet();
// greet();





// function parameters
// function name(params1, params2, params3, .....) {
    //     function body
//}





// function Arguments
// name(arguments1, arguments2, arguments3, ....)


// sum of 2 number (1)
// function sum(a, b) {
//     console.log(a + b);
// }
// sum(2,4)

// sum of 2 number (2)
// function sum(a, b) {
//     console.log(a + b);
// }
// sum(2) // NaN

// sum of 2 number (3)
// function sum(a = 0, b = 0) {
//     console.log(a + b);
// }
// sum(2)


// sum of 2 number (4)
// function sum(a = 0, b = 0) {
//     return a + b;
// }
// let sum1 =  sum(2, 8);
// console.log(sum1);




// function Expression
// let variablename = function name(params) {
    
// }

// let result = function sum(a , b) {
//     return a + b;
// }
// console.log(result(12, 14));






// function Anonymous
// let variablename = function(params) {
    
// }

// let result = function(a , b) {
//     return a + b;
// }
// console.log(result(12, 14));







// IIFE 
// (function() {
//     // code to execite
// })();

//ex (1)
// (function () {
//     console.log("hello");
    
// })();

 // ex(2)
// (function(a, b){
//     console.log(a + b);
// })(2,3);


// IIFE  with return
// let result = (function(a, b){
//     console.log(a + b);
//     return a + b;
// })(2,3);
// console.log(result);


// Arrow function
// let result = (a , b) => {
//     return a + b;
// }
// console.log(result(1,2));

// let result = (a , b) =>  a + b;
// console.log(result(1,2));


// TEMPLATE STRINGS - EcmaScript 2015
// let sum = (a, b) => console.log("The sum of" + a + " and " + b + " is " + (a + b));
// let sum = (a, b) => `The sum of ${a} and ${b} is ${a + b}`;
// sum(5, 5);