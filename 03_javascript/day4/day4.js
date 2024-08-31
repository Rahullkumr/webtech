// 30 - Aug - 2024

console.log('holla');

// null: if we want to assign a variable a value intentionally
// undefined: if we declare a variable and try to access it without initialization

// undefined
var a;              // or var a = undefined
console.log(a);     // undefined



var x = undefined
var y = null        // the developer gives it so as to assign a value in future; also to hold the memory space
console.log("x = "+x + "\ny = "+y);



// user input

// var name = prompt('Enter your name')
// // will not work in node console because prompt is browser's feature
// console.log(typeof name);



// typecasting

// var n = Number(prompt('enter any number'))
// console.log(n);



var n = prompt('enter any number')          // 23 years
console.log(Number(n));     // NaN
console.log(parseInt(n));   // 23 (number must be at start only)


// null is displayed as output only once, when we cancel the prompt window