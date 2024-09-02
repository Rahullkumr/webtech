// 02 - Sept - 2024

console.log('holla');

a = 100000
console.log(a); // what is its default keyword

// scope == boundary
// 1. Global scope      (accessible for entire js file)
// 2. Local/block scope (accessible for the block only)
//      1. 
//      2. 


// const b = 30
// if(true){
//     console.log(b);
//     const b = 99;
//     console.log(b);
// }
// console.log(b);
// check the above for var as well as let

var x = 10
if (true){
    var x = 20
    console.log(x);     // 20
}
console.log(x)  //20

// variables declared with let and const are not accessible outside the block 
// but variables declared with var are accessible