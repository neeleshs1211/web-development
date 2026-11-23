======================================
# ARRAYS IN JAVASCRIPT
======================================

* Arrays can store different data types.
* Arrays are zero-indexed.
* Arrays are dynamic in size.
* Arrays can contain other arrays (multidimensional arrays).
* Arrays are mutable, which means we can modify their elements.

* Iterable - object where you can use the for-of loop
        const numbers = [10, 20, 30];

        for (const num of numbers) {
            console.log(num);
        }

* Array-like object - Any object with length property and use indexes to access items
        const obj = {
            0: "Java",
            1: "JavaScript",
            2: "Python",
            length: 3
        };

        console.log(obj[0]);
        console.log(obj[1]);
        console.log(obj.length);

* Arrays as Objects:  Arrays in JavaScript are a specific type of object that has numeric keys (indices) and a length property. The indices are automatically maintained, and the length property is automatically updated when you add or remove elements from the array.
        const fruits = ["Apple", "Banana", "Mango"];

        console.log(fruits[0]);
        console.log(typeof fruits);
        console.log(fruits.length);

* typeof Operator: The typeof operator in JavaScript returns "object" for both arrays and regular objects.
        const numbers = [10, 20, 30];

        console.log(typeof numbers);
        console.log(Array.isArray(numbers));

* JavaScript Array is a data structure that allows you to store and organize multiple values within a single variable. It is a versatile and dynamic object. It can hold various data types, including numbers, strings, objects, and even other arrays. Arrays in JavaScript are zero-indexed i.e. the first element is accessed with an index 0, the second element with an index of 1, and so forth.


======================================
# Creating Arrays:
======================================

* Arrays in JavaScript can be created using the Array constructor or with array literals (square brackets []).

* Using Array constructor
        const numbers = new Array(10, 20, 30, 40);
        console.log(numbers);

* Using array literal

        const fruits = ["Apple", "Banana", "Mango"];
        console.log(fruits);

* we can also create an empty array

        const arr1 = [];
        const arr2 = new Array();

        console.log(arr1);
        console.log(arr2);

======================================
# Accessing Elements:
======================================

👉 Accessing Elements:  Array elements are accessed using zero-based indices.
        const fruits = ["Apple", "Banana", "Mango", "Orange"];

        console.log(fruits[0]);
        console.log(fruits[1]);
        console.log(fruits[2]);
        console.log(fruits[3]);

======================================
# Modifying Elements:
======================================

👉  Modifying Elements: You can modify array elements by assigning new values to specific indices.
        const fruits = ["Apple", "Banana", "Mango"];
        fruits[1] = "Orange";
        console.log(fruits);


=============================================
# Array Traversal / Iterating Over Arrays
=============================================

👉 Array Traversal / Iterating Over Arrays
1. for of loop , also known as iterable
* for...of Loop: The for...of loop is used to iterate over the values of an iterable object, such as arrays, strings, or other iterable objects.
        for (const element of array) {
            // Code
        }


2. for in loop
* for...in Loop: The for...in loop is used to iterate over the properties (including indices) of an object.
        const fruits = ["Apple", "Banana", "Mango"];
        for (const index in fruits) {
            console.log(index);
        }


3. forEach Method
* The arr.forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array.
        array.forEach(function(element, index, array) {
            // Code
        });
        Parameters:
            element: Current element.
            index: Current element index.
            array: Original array.

4. map function
* map() creates a new array from calling a function for every array element. map() does not change the original array.
        const newArray = array.map((element, index) => {
            return element;
        });

        const numbers = [1, 2, 3, 4, 5];

        const result = numbers.map((num) => {
            return num * 2;
        });

        console.log(result);




==========================================================================
# How to Insert, Add, Replace and Delete Elements in Array(CRUD) - p1
==========================================================================

👉 How to Insert, Add, Replace and Delete Elements in Array(CRUD)

* push(): Method that adds one or more elements to the end of an array.
* pop(): Method that removes the last element from an array.
* unshift(): Method that adds one or more elements to the beginning of an array.
* shift(): Method that removes the first element from an array.

==========================================================================
# what if, we want to add or remove anywhere in an elements - p2
==========================================================================

* The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

* syntax
        arr.splice(start, deleteCount, item1, item2, /* …, */ itemN)

        const fruits = ["Apple", "Orange", "Banana", "Mango"];
        fruits.splice(1, 0, "Grapes");
        console.log(fruits);

=========================================
# Searching in an Array
=========================================
👉  Searching and Filter in an Array

* For Search we have - indexOf, lastIndexOf & includes
        // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

1. indexOf Method: The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
* syntax
        // indexOf(searchElement);
        // indexOf(searchElement, fromIndex);

2. lastIndexOf Method: The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

3. The includes method checks whether an array includes a certain element, returning true or false.
        // Syntax
        // includes(searchElement)
        // includes(searchElement, fromIndex)

=========================================
# Filter in an Array
=========================================
* Search +  Filter
        // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

1. find Method: The find method is used to find the first element in an array that satisfies a provided testing function. It returns the first matching element or undefined if no element is found.

2. findIndex Method: The findIndex() method of TypedArray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

3.  filter Method: The filter method creates a new array with all elements that pass the test implemented by the provided function.
        // syntax:
        //? filter(callbackFn)
        //? filter(callbackFn, thisArg)

        const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
        const result = numbers.filter((num) => {
            return num % 2 === 0;
        });
        console.log(result);




=========================================
# How to Sort and Compare an Array
=========================================
* How to Sort and Compare an Array
* Sorting an Array: The sort method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.

        const fruits = ["Banana", "Apple", "Orange", "Mango"];
        fruits.sort();
        console.log(fruits);


        const numbers = [40, 100, 1, 5, 25, 10];
        numbers.sort((a, b) => {
            return a - b;
        });
        console.log(numbers);

=========================================
# Very Important Array Methods
=========================================

* Map(), Filter(), Reduce(),
* map() creates a new array from calling a function for every array element.
* map() does not execute the function for empty elements.
* map() does not change the original array.

        // Original array of numbers
        const numbers = [1, 2, 3, 4, 5];

        const result = numbers.map((num) => {
            return num * num;
        });

        console.log(result);

* Reduce method
* The reduce method in JavaScript is used to accumulate or reduce an array to a single value. It iterates over the elements of an array and applies a callback function to each element, updating an accumulator value with the result. The reduce method takes a callback function as its first argument and an optional initial value for the accumulator as the second argument.
        // syntax
        // array.reduce(function callback(accumulator, currentValue, index, array) {
        //   // Your logic here
        //   // Return the updated accumulator value
        // }, initialValue);

        // callback: A function that is called once for each element in the array.
        // accumulator: The accumulated result of the previous iterations.
        // currentValue: The current element being processed in the array.
        // index (optional): The index of the current element being processed.
        // array (optional): The array reduce was called upon.
        // initialValue (optional): An initial value for the accumulator. If not provided, the first element of the array is used as the initial accumulator value.

        <!-- Example 1: Sum of All Numbers -->
        const numbers = [1, 2, 3, 4, 5];

        const result = numbers.reduce((acc, curr) => {
            return acc + curr;
        }, 0);

        console.log(result);