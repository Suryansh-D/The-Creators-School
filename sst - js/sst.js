// //write a fn which take two parameters
// // 1. first parameter is a function
// // 2. second parameter is a number
// // the first paracmeter i.e  a fn has a return value
// // you have to return the multiplication of return valye and the number
// var n = 5;

// function fn(n) {
//     return n;
// }

// function multiply(func, num) {
//     //console.log(func(n) * num);
// }

// multiply(fn, 2);

// function pythagorean(sideA, sideB) {
//     return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
// }

// //console.log(pythagorean(4, 3));

// //deepcloning of privitive values

// let a = 5;
// let b = a;
// b = 6;
// //console.log(a);

// var arr = [1, 2, 3, 4, 5];
// var arr2 = arr;
// //console.log(arr2);

// //deep cloning of objects
// let obj = {
//     a: 5,
//     b: 6
// };
// let obj2 = obj;
// obj2.a = 10;
// //console.log(obj);

// //deepest cloning of objects
// let obj3 = {
//     a: 5,
//     b: 6
// };
// let obj4 = JSON.parse(JSON.stringify(obj3));
// obj4.a = 10;
// console.log(obj3);
// console.log(obj4);


var counter = 0;
var myfun = function() {
        var counter = 0;
    var lvl2fun = function() {
        counter++;
        console.log(counter);
    }
   
    lvl2fun();
};

myfun();
console.log(counter);



