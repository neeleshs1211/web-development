// const student = {
//     "name": "Rahul",
//     age: 22,
//     course: "JavaScript",
//     isPlaced: false
// };
// // add
// student.email = "rahul@gmail.com";

// // find / get
// console.log(student.name);
// console.log(student["name"]);
// console.log(student["age"]);


// ======================
// # (5) Nested Objects
// ======================
// * An object inside another object is called a nested object.
// const student = {
//     name: "Rahul",
//     age: 22,

//     address: {
//         city: "Indore",
//         state: "Madhya Pradesh",
//         pincode: 452001
//     }
// };

// console.log(student.address.city);
// console.log(student.address.state);



// =============================
// # (6) Objects Inside Arrays
// =============================
// * We can store multiple objects inside an array.
// const students = [
//     {
//         id: 1,
//         name: "Rahul",
//         marks: 85
//     },
//     {
//         id: 2,
//         name: "Aman",
//         marks: 92
//     },
//     {
//         id: 3,
//         name: "Priya",
//         marks: 78
//     }
// ];

// console.log(students[0].name);
// console.log(students[1].marks);
// print
// console.log(student);
// console.log(typeof student);




// # (7) Object Methods

// const user = {
//     name: "Rahul",

//     greet: function () {
//         console.log("Hello Rahul");
//     }
// };

// user.greet();
// console.log(user.greet());

// const user = {
//     name: "Rahul",

//     greet() {
//         console.log("Hello", this.name);
//     }
// };

// user.greet();

// ========================
// # (8) The this Keyword
// ========================
// * The this keyword refers to the object associated with the current method call.
// const student = {
//     name: "Rahul",
//     age: 22,

//     display() {
//         console.log(this.name);
//         console.log(this.age);
//     }
// };

// student.display();


// ====================================
// # (9) Symbol as an Object Property
// ====================================
// * A Symbol is a unique primitive value that can be used as an object property key.

// const mySymbol = Symbol("key1");
// const user = {
//     name: "Rahul",
//     [mySymbol]: "Secret Value"
// };

// console.log(user.name);
// console.log(user[mySymbol]);
// console.log(typeof mySymbol);





// ==================================
// # (10) Combining Multiple Objects
// ==================================
// * We can combine multiple objects using Object.assign() or the spread operator.



// Object.assign()

// Syntax:
// Object.assign(target, source1, source2);

// const obj1 = {
//     a: 1,
//     b: 2
// };

// const obj2 = {
//     c: 3,
//     d: 4
// };
// const obj3 = {
//     e: 5,
//     f: 6
// };

// const result = Object.assign({},obj1, obj2, obj3);

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// console.log(result);



// Spread Operator

// const obj1 = {
//     name: "Rahul",
//     age: 22
// };

// const obj2 = {
//     city: "Indore",
//     course: "JavaScript"
// };

// const result = {
//     ...obj1,
//     ...obj2
// };

// console.log(result);