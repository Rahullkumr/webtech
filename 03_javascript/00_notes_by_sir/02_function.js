// #Functions
// 1. Function is object.
// 2. Function is a block of instruction which is used to perform a specific task.
// 3. A function get executed only when it is called.
// 4. The main advantage of function is we can achieve code reusability.
// 5. To call a function we need its reference and ().
// 6. Name of function is variable which holds the reference of function object.
// 7. Creating a function using function keyword supports function hoisting.
// 8. Therefore we can also call a function before function declaration.
// 9. When we try to log function name the entire function defination is printed.
// 10. The scope within function block is known as local scope.
// 11. Any member with local scope cannot be used outside the function block.
// 12. A parameter of function will have local scope.
// 13. Variable written inside function even using var have local scope.
// 14. Inside a function we can use the members of global scope.
// 15. In javascript 'this' is a property of every function.(every function will have 'this' Keyword except arrow function)
// #Parameter
// 1. The variables declared in the function defination is known as parameters.
// 2. The parameters have local scope (can be used only inside function body).
// 3. Parameters are used to hold the values passed by caller (or calling statement).
// #Arguments
// 1. The values passed in the method call statement is known as arguments.
// 2. Note : An argument can be a literal, variable or an expression which gives a results.
// #Return Keyword
// 1. It is a keyword used as control transfer statement in a function.
// 2. Return will stop the execution of the function and transfer control along with data to the caller.
// #Ways To Create Functions
// 1. Function declaration statement : Create using function keyword
// 1. 
// Syntax :

// function func_variable(parameters) {    
//   //statements
// }
// func_variable()  
// 2. 
// Example : Create a function 'greet' which should print a message "Good Morning" when it is called.

// function func_variable(parameters) {    
//   //statements
// }
// func_variable()  
// 3. 
// Function can be Hoisted.

// //Here, we are accessing function before it's declaration statement.

// greet();
// function greet() {
//   console.log("Good Morning");
// }

// output : Good Morning
// 4. Function does not belongs to temporal dead zone.
// 2. Function as expression / expression function
// 1. Function which is passed to an variable as a value is called as first class function.
// 2. Function can not be Hoisted because it is object is created in execution phase.
// 3. Function does not belongs to temporal dead zone
// #Functional Programming
// 1. Functional Programming is a programming technique where we pass a function along with a value to another function.
// 2. In this approach, we generate Generic Function. Here function task is not predefined. It perform multiple task not only single task
// 3. The Function which accept another function as a parameter or return a function is known as 'Higher Order Function'.
// 4. The Function which is passed to another function or the function which is returned by another function is known as 'Callback Function'.
// #Types Of Functions
// 1. Function decalaration statement : Using function keyword
// 2. Function as expression / expression function
// 3. Immediate Invoke Function (IIF)
// 1. when a function is called as soon as it's object is created is known as Immediate Invoke Function.
// 2. We have to write the function inside the paranthesis to group it. [using Group operator -> (function code) ].
// 3. The function is not visible(available) outside the scope.
// 4. After grouping it, we have to use paranthesis to call this function.
// 5. Immediate Invoke Function execute only once.
// 4. Arrow Function
// 1. The main function of arrow function is to reduce the function syntax.
// 2. Arrow Function is introduced in ES6.
// 3. If we have only single parameter, it is not necessary to use paranthesis for paramenter.
// 4. If function have single statement, then block (curly braces) is optional.
// 5. It does not have its own 'this' property.
// 6. Implicit return :- If there is only one statement and If block is not created then JS Engine will return that statement automatically.
// 7. Explicit return :- If block is created and function is not returning any value, JS Engine will return undefined. To return a value Explicitly from block, we have to use return keyword.If block is created then we have to use return keyword to return value otherwise JS Engine will return undefined.
// 5. Higher Order Function
// 1. The Function which accept another function as a parameter or return a function is known as 'Higher Order Function'.
// 6. Callback Function
// 1. The Function which is passed to another function or the function which is returned by another function is known as 'Callback Function'.
// #Nested Function
// 1. The function inside another function is called as nested function.
// 2. 
// Example :

// function outer(){
//       function inner(){
//       }
//       return inner
// }
// 3. The outer function is known as parent and the inner function is known as child.
// 4. The inner function is local to outer function, it cannot be accessed from outside.
// 5. 
// To use inner function outside, the outer function must return the reference of inner function.

// function outer(){
//       function inner(){
//       }
//       return inner
// }

// We can now call inner function from outside as follows:

// 1st Way:


// let fun=outer();
// fun();   // -----> inner() is called

// 2nd Way:

// outer()();   // -----> inner() is called