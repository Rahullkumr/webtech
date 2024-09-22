// 11 - Sept - 2024

// absent


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
