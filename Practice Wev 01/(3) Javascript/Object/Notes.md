# JavaScript Objects – Complete Notes 

===============================
# (1) Introduction to Objects
===============================
An object in JavaScript is a collection of properties stored in key-value pairs.
- Key: Property name.
- Value: Data associated with the property.
- Properties can store strings, numbers, booleans, arrays, functions and other objects.
Example:
        const student = {
            name: "Rahul",
            age: 22,
            course: "JavaScript",
            isPlaced: false
        };

        console.log(student);
        console.log(typeof student);



=========================
# (2) Creating Objects
=========================
There are two common ways to create objects.

1. Object Literal
        const user = {
            name: "Rahul",
            age: 22
        };

        console.log(user);


2. Object Constructor
const user = new Object();

        user.name = "Rahul";
        user.age = 22;
        user.email = "rahul@gmail.com";

        console.log(user);



==================================
# (3) Accessing Object Properties
==================================
1. Dot Notation
        const student = {
            name: "Rahul",
            age: 22
        };

        console.log(student.name);
        console.log(student.age);


2. Bracket Notation
        console.log(student["name"]);
        console.log(student["age"]);


* Bracket notation is useful when property names contain spaces or are stored in variables.
        const user = {
            name: "Rahul",
            "full name": "Rahul Sharma"
        };  

        console.log(user["full name"]);



================================================
# (4) Adding, Updating and Deleting Properties
================================================
        const user = {
            name: "Rahul",
            age: 22
        };

        // Add
        user.city = "Indore";

        // Update
        user.name = "Aman";

        // Delete
        delete user.age;

        console.log(user);



======================
# (5) Nested Objects
======================
* An object inside another object is called a nested object.
        const student = {
            name: "Rahul",
            age: 22,

            address: {
                city: "Indore",
                state: "Madhya Pradesh",
                pincode: 452001
            }
        };

        console.log(student.address.city);
        console.log(student.address.state);



=============================
# (6) Objects Inside Arrays
=============================
* We can store multiple objects inside an array.
        const students = [
            {
                id: 1,
                name: "Rahul",
                marks: 85
            },
            {
                id: 2,
                name: "Aman",
                marks: 92
            },
            {
                id: 3,
                name: "Priya",
                marks: 78
            }
        ];

        console.log(students[0].name);
        console.log(students[1].marks);


* Using a loop:
        for (let student of students) {
            console.log(student.name, student.marks);
        }


========================
# (7) Object Methods
========================
* When a function is stored as an object property, it is called a method.
        const user = {
            name: "Rahul",

            greet: function() {
                console.log("Hello Rahul");
            }
        };

        user.greet();


* Modern shorthand syntax:
        const user = {
            name: "Rahul",

            greet() {
                console.log("Hello", this.name);
            }
        };

        user.greet();



========================
# (8) The this Keyword
========================
* The this keyword refers to the object associated with the current method call.
        const student = {
            name: "Rahul",
            age: 22,

            display() {
                console.log(this.name);
                console.log(this.age);
            }
        };

        student.display();


        Output:
        Rahul
        22



====================================
# (9) Symbol as an Object Property
====================================
* A Symbol is a unique primitive value that can be used as an object property key.
        const mySymbol = Symbol("key1");

        const user = {
            name: "Rahul",
            [mySymbol]: "Secret Value"
        };

        console.log(user.name);
        console.log(user[mySymbol]);
        console.log(typeof mySymbol);


* Remember: Use square brackets to create and access a Symbol-keyed property.



==================================
# (10) Combining Multiple Objects
==================================
* We can combine multiple objects using Object.assign() or the spread operator.

1. Object.assign()

        Syntax:
        Object.assign(target, source1, source2);


        Example:
        const obj1 = {
            a: 1,
            b: 2
        };

        const obj2 = {
            c: 3,
            d: 4
        };

        const result = Object.assign({}, obj1, obj2);

        console.log(result);


2. Spread Operator
        const obj1 = {
            name: "Rahul",
            age: 22
        };

        const obj2 = {
            city: "Indore",
            course: "JavaScript"
        };

        const result = {
            ...obj1,
            ...obj2
        };

        console.log(result);



==================================
# (11) Duplicate Keys in Objects
==================================
* When multiple objects have the same property, the last assigned value overwrites the previous value.
        const obj1 = {
            name: "Rahul",
            age: 22
        };

        const obj2 = {
            name: "Aman",
            city: "Bhopal"
        };

        const result = {
            ...obj1,
            ...obj2
        };

        console.log(result);


        Output:
        {
            name: "Aman",
            age: 22,
            city: "Bhopal"
        }




=================================
# (12) Important Object Methods
=================================
* Object.keys() – Returns an array of property keys.
        const student = {
            name: "Rahul",
            age: 22,
            course: "JavaScript"
        };

        console.log(Object.keys(student));

        Output:
        ["name", "age", "course"]


* Object.values() – Returns an array of property values.
        console.log(Object.values(student));

        Output:
        ["Rahul", 22, "JavaScript"]


* Object.entries() – Returns an array of key-value pairs.
        console.log(Object.entries(student));

        Output:
        [
            ["name", "Rahul"],
            ["age", 22],
            ["course", "JavaScript"]
]

===============================
# (13) Looping Through Objects
===============================
* Using for...in:
        const student = {
            name: "Rahul",
            age: 22,
            course: "JavaScript"
        };

        for (let key in student) {
            console.log(key, student[key]);
        }


* Using Object.keys():
        Object.keys(student).forEach(key => {
            console.log(key, student[key]);
        });



===============================
# (14) Object Destructuring
===============================
* Destructuring allows us to extract properties from an object and store them in variables.

Syntax:
const { propertyName } = objectName;


Example:
const student = {
    name: "Rahul",
    age: 22,
    course: "JavaScript"
};

const { name, age } = student;

console.log(name);
console.log(age);


Renaming variables:
const { name: studentName } = student;

console.log(studentName);


Default values:
const { name, city = "Indore" } = student;

console.log(name);
console.log(city);

===================================
# (15) Nested Object Destructuring
===================================
        const user = {
            name: "Rahul",

            address: {
                city: "Indore",
                state: "MP"
            }
        };

        const {
            address: { city, state }
        } = user;

        console.log(city);
        console.log(state);

================================================
# (16) Destructuring in Function Parameters
=================================================
        const user = {
            name: "Rahul",
            age: 22,
            email: "rahul@gmail.com"
        };

        function displayUser({ name, age }) {
            console.log("Name:", name);
            console.log("Age:", age);
        }

        displayUser(user);

