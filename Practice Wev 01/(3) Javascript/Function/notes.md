===============================
# Function in JavaScript
===============================
* Function =>  
    In JavaScript, a function is a block of reusable code that performs a specific task or set of tasks. Functions are used to organize code into modular and manageable pieces, promote code reuse, and make programs more readable.


===============================
# Function Declaration:
===============================

* Declare a function using the function keyword, followed by the function name, parameters (if any), and the function body.
This step defines the function and specifies what code should be executed when the function is called.

function greet() {
   // console.log("Hello Guys, Welcome to TheCodingCrafer JS Course ");
}

=================================================
# Function Invocation (Calling a Function):
=================================================

* After declaring a function, you can invoke or call it by using its name followed by parentheses.

* If the function has parameters, provide values (arguments) for those parameters inside the parentheses.

* How to call a function
 =>  greet();


==============================
# Function Parameter:
==============================

* A function parameter is a variable that is listed as a part of a function declaration. It acts as a placeholder for a value that will be provided when the function is called. Parameters allow you to pass information into a function, making it more versatile and reusable.

* Syntax: function functionName(parameter1, parameter2, ...params) {
    // Function body
    // Code to be executed when the function is called
}

==============================
# Function Argument:
==============================

* A function argument is a value that you provide when you call a function. Arguments are passed into a function to fill the parameters defined in the function declaration.

* syntax: =>  functionName(argument1, argument2, ...);


==============================
# Function expressions
==============================
* A function expression is a way to define a function as part of an expression. It can be either named or anonymous. If it's named, it becomes a named function expression.

let result = function sum(a, b){
    return a + b;
}

* ❌ call => sum(2, 3); ❌ 
* call => resule(2, 3); ✅


==============================
# Anonymous Function
==============================
* An anonymous function is a function without a name. It can be created using either a function expression or a function declaration without a specified name.

let result = function (a, b){
    return a + b;
}

* call => resule(2, 3); ✅


==============================
# Return Keyword
==============================
* Return Keyword: In JavaScript, the return statement is used within a function to specify the value that the function should produce or provide back to the code that called it. The return statement stops the execution of a function and sends a value back to the caller

* Syntax. =>  return expression;

=========================================================
# IIFE - immediately invoked function expression
=========================================================
* An IIFE, or Immediately Invoked Function Expression, is a JavaScript function that is defined and executed immediately after its creation. It is a way to create a self-contained block of code that doesn't interfere with the surrounding code and executes immediately

* Syntax
(function () {
   // code to be executed
 })();

* ex.
let result = (function (a, b){
    consol.log(a + b);
    return a + b;
})(5, 6);
consol.log(result);


==========================================
# FAT ARROW FUNCTION
==========================================

* In ECMAScript 6 (ES6), arrow functions, also known as fat arrow functions, were introduced as a concise way to write anonymous functions.

* How to convert the same in fat arrow function
Syntax
const functionName = (param1, param2, ...) => {
     // Function body
     return result; // Optional
};

// todo NOTES

1.  If the function body consists of a single expression, the braces {} and the return keyword can be omitted.

// const sum = (a, b) => `The sum of ${a} and ${b} is ${a + b}`;
// console.log(sum(5, 5));


2. If there is only one parameter, the parentheses () around the parameter list can be omitted.

// const square = (a) => `The square of ${a} is  ${a * a}`;
// const square = a => `The square of ${a} is  ${a * a}`;
// console.log(square(5));


3. If there are no parameters, use an empty set of parentheses ().

// const greet = () => console.log("Plz LIKE SHARE & SUBSCRIBE!");
// greet();



==========================================
# TEMPLATE STRINGS - EcmaScript 2015
==========================================

* In ECMAScript 6 (ES6), template strings, also known as template literals, provide a convenient and flexible way to create strings in JavaScript. Template strings are enclosed in backticks (``) rather than single or double quotes.

let firstName = "Neelesh";
let lastName = "Sharma";

// Using template string for string interpolation

* String Interpolation:  Template strings support string interpolation, allowing you to embed expressions directly within the string. Interpolated expressions are enclosed in ${}

let age = 25;

// String interpolation with variable
* Expression Evaluation: Template expressions can include any valid JavaScript expression.
* Example
// let num = 5;
// console.log("5 * " + num + " = " + 5 * num);
// console.log(`5 * ${num} = ${5 * num}`);

* Advantages:
1. Readability: Template strings make the code more readable, especially for complex string constructions.

2. Conciseness: They eliminate the need for explicit string concatenation and reduce the use of escape characters.

3. Expression Flexibility: Any JavaScript expression can be embedded within ${}.

4.  Multi-line Support: Creating multi-line strings is more straightforward.