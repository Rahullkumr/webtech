// Lexical Scope/Scope Chain
// 1.	 The ability of js engine to search for a variable in the outer scope when variable is not available in local scope is known as
// lexical scope or scope chain.
// 2.	 It is ability of child to access variable from outside if its not present in local scope
// 3.	 Lexical scope : A function and global object.

// let a = 10;
// function test() {
//     a++;
//     console.log( a );
// }
// test();

// Output : 11

// When test function is executed js engine looks for ' a ' in local scope. Since it will not available it will look for a in outer scope that is global window object .
// 4.	 Lexical scope : The child function and parent function with a help of closure.

// function outer() {
//   let a = 10;
//       function inner() {
//           console.log(a);
//       }
//   return inner;
// }

// let res = outer();
// res();

// Output : 10

// When the function inner is executed and console.log a is encountered, js engine looks for a in the local scope of function inner.
// Since, a is not present and function inner is child of function outer js engine will search for a in the parent function outer scope with the help of closure.



// #Closure
// 1. A closure is created when a function is defined within another function and inner function need to access variables in the outer function's scope.
// 2. Closure helps to achieve lexical scope from child function to parent function.
// 3. Closure preserves the state of parent function even after the execution of parent function is completed.
// 4. A child function will have reference to the closure.
// 5. Every time a parent function is called the new closure is created.
// 6. Disadvantage : High memory consumption.