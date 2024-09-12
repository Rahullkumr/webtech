// // 11 - Sept - 2024

// // absent






// Hoisting
// Hoisting in JavaScript means that variable and function declarations are moved to the top of their scope before the code runs. This allows you to use them before they are actually declared in your code.

//  Variable Hoisting

// 1. **var**
//    - Variables declared with `var` are moved to the top of their function scope.
//    - They start as `undefined` until the line of code where they are assigned a value.

//    ```javascript
//    console.log(x); // undefined
//    var x = 5;
//    console.log(x); // 5
//    ```

// 2. **let** and **const**
//    - Variables declared with `let` and `const` are also moved to the top of their block scope.
//    - They are not initialized until the code reaches their declaration.
//    - Using them before they are declared gives a `ReferenceError`.

//    ```javascript
//    console.log(y); // ReferenceError: Cannot access 'y' before initialization
//    let y = 10;
//    console.log(y); // 10

//    console.log(z); // ReferenceError: Cannot access 'z' before initialization
//    const z = 15;
//    console.log(z); // 15
//    ```

// #### Function Hoisting

// 1. **Function Declarations**
//    - Function declarations are moved to the top of their scope.
//    - You can call these functions before they are declared in the code.

//    ```javascript
//    console.log(sum(2, 3)); // 5
//    function sum(a, b) {
//      return a + b;
//    }
//    ```

// 2. **Function Expressions**
//    - Function expressions (functions assigned to variables) are not fully hoisted.
//    - Only the variable declaration is hoisted, not the function itself.

//    ```javascript
//    console.log(multiply); // undefined
//    var multiply = function (a, b) {
//      return a * b;
//    };
//    ```

//    ```javascript
//    console.log(divide); // ReferenceError: Cannot access 'divide' before initialization
//    let divide = function (a, b) {
//      return a / b;
//    };
//    ```

// ### Key Points
// - **`var` variables**: Moved to the top of the function scope, start as `undefined`.
// - **`let` and `const` variables**: Moved to the top of the block scope, not initialized until declared.
// - **Function declarations**: Fully moved to the top, can be used before they appear in the code.
// - **Function expressions**: Only the variable part is moved, not the function assignment.







// Temporal Dead Zone
// The Temporal Dead Zone (TDZ) is the time span between variable declaration and its initialization. During this time, the variable declared with let and const cannot be used.

// #### Example of TDZ

// ```javascript
// console.log(a); // Error: Cannot access 'a' before initialization
// let a = 10;
// console.log(a); // 10
// ```

// Here, `a` cannot be used before the line `let a = 10;`.

// #### Key Points

// 1. **Variables with `let` and `const`**:
//    - These variables are in the TDZ from the start of the block until they are declared.
//    - Trying to use them before the declaration gives an error.

// 2. **Purpose of TDZ**:
//    - The TDZ helps catch mistakes by not allowing the use of variables before they are properly declared.

// #### Simple Example

// ```javascript
// function example() {
//   console.log(b); // Error: Cannot access 'b' before initialization
//   let b = 20;
//   console.log(b); // 20
// }

// example();
// ```

// In this function, `b` is in the TDZ until `let b = 20;` is executed.

// #### Comparison with `var`

// ```javascript
// function exampleVar() {
//   console.log(c); // undefined (no TDZ for `var`)
//   var c = 30;
//   console.log(c); // 30
// }

// exampleVar();
// ```

// For variables declared with `var`, there is no TDZ. They are hoisted to the top and initialized as `undefined`.

// ### Summary
// - **TDZ**: Time when `let` or `const` variables can't be used.
// - **Error**: Using these variables before they are declared gives an error.
// - **Why**: This helps find mistakes in the code.


// ### JavaScript Closures Explained Simply