// let arr = [10,2,3,10,5,10];
// console.log(arr.splice(1,4));
// console.log(arr);
// console.log(arr.slice(1,4));

// arr[0] = 10;
// arr[1] = 11;
// arr[2] = 12;
// arr.splice(0,2,10,11,12);

// shift remove starting
// arr.shift();

// arr.unshift(10); // add  starting

// last add push
// last remove pop
// console.log(arr.indexOf(10));
// console.log(arr.lastIndexOf(10));




// rotation  _________________________________
// left

// let arr = [1,2,3,4,5,6,7,8,9];
// let k = 4;
// let n = arr.length;
// k = k % n;
// for(let i = 0; i<k; i++){
//     arr.push(arr.shift());
// }
// console.log(arr);

// right
// let arr = [1,2,3,4,5,6,7,8,9];
// let k = 4;
// let n = arr.length;
// k = k % n;
// for(let i = 0; i<k; i++){
//     arr.unshift(arr.pop());
// }
// console.log(arr);


// __________________________________________________
// concat
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// let arr = arr1.concat(arr2);
// console.log(arr);


// __________________________________________________
// flat
// let arr = [1,2,[3,4,5],[6,7]];
// console.log(arr.flat());


// __________________________________________________
// flatMap
// let arr = [1,2,3];
// let result = arr.flatMap(a => [a, a * 2]);
// console.log(result);


// __________________________________________________
// let arr = [1,2,3,4,5,6,7,8,9];

// // find
// console.log(arr.find(n => n > 7));

// // findLast
// console.log(arr.findLast(n => n > 7));

// // findIndex
// console.log(arr.findIndex(n => n > 7));

// // findLastIndex
// console.log(arr.findLastIndex(n => n > 7));




// __________________________________________________
// foreach
// let arr = [1,2,3,4,5,6,7,8,9];

// let result = arr.forEach((ele,idx)=>{
//     console.log(idx, ele);
//     // return ele*2; // ❌
// })
// console.log(result);


// __________________________________________________
// map
// let arr = [1,2,3,4,5,6,7,8,9];

// let result = arr.map((ele,idx)=>{
    //     console.log(idx, ele);
    //     return ele;
    // })
    // console.log(result);
    

// __________________________________________________
    // let ans = result.filter((ele) => ele % 2 == 0)
    
    // console.log(ans);


// __________________________________________________

// let sum = ans.reduce((acc, curr) => {
    //     return acc + curr;
    // }, 1);
    // console.log(sum);
    
    
    
    // __________________________________________________
// chain System (map, filter, reduce)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let sum = arr.map((ele) => {
//     return ele + 2;
// }).filter((ele) => {
//     return ele % 2 == 0;
// }).reduce((acc, curr) => {
//     return acc + curr;
// }, 0);

// console.log(sum);


