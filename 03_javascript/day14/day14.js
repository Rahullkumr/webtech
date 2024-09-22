// 12 - Sept - 2024

// absent


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