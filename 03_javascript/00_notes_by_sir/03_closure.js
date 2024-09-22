// Closure
// A closure is a feature in JavaScript where a function remembers and can access variables from outside its own scope, even after the outer function has finished executing.

// Example of a Closure
// function outerFunction() {
//   let outerVariable = 'I am outside!';
  
//   function innerFunction() {
//     console.log(outerVariable); // This is a closure
//   }
  
//   return innerFunction;
// }

// const closureFunction = outerFunction();
// closureFunction(); // Logs: 'I am outside!'


// Here, `innerFunction` remembers `outerVariable` from `outerFunction` even after `outerFunction` has finished running. This is a closure.

// Key Points

// 1. Function Inside a Function :
//    - A closure is created when a function is defined inside another function, and the inner function accesses variables from the outer function.

// 2. Remembering Variables:
//    - The inner function "remembers" the variables from the outer function's scope even after the outer function has finished running.

// 3. Practical Use :
//    - Closures are useful for creating private variables and functions.

// Simple Example


// function createCounter() {
//   let count = 0;
  
//   return function() {
//     count += 1;
//     console.log(count);
//   };
// }

// const counter = createCounter();
// counter(); // Logs: 1
// counter(); // Logs: 2
// counter(); // Logs: 3


// In this example, the inner function increments and logs the count variable each time it is called. The count variable is remembered between calls because of the closure.

// Summary
// - Closure : A function that remembers and can use variables from outside its own scope.
// - How : Defined inside another function, accessing the outer function's variables.
// - Use : Useful for maintaining state or creating private variables and functions.