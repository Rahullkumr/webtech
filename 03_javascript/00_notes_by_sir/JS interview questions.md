<h1 style="text-align: center; color: red; font-size: 50px">JavaScript Interview Questions</h1>

<h1 style="text-align: center; color: teal; font-size: 30px">I. Basic Concepts</h1>

### 1. What is JavaScript?
- JavaScript is a scripting and programming language.
- **Features:**
  - Purely object-based (variables, functions, and even primitive data types like numbers and strings are objects).
  - Dynamically typed language.
  - Loosely typed.
  - Object-oriented programming language (OOPL).
  - Interpreted language.
  - Synchronous language with a single-threaded architecture.

### 2. How is JavaScript different from Java?
- **Purpose:**
  - JavaScript: Primarily used for web development, adding interactivity to web pages.
  - Java: Used for building standalone applications, mobile apps, and large-scale enterprise systems.
- **Execution:**
  - JavaScript: Interpreted language, runs directly in the web browser.
  - Java: Compiled into bytecode, executed by the Java Virtual Machine (JVM).
- **Typing:**
  - JavaScript: Loosely typed / dynamically typed.
  - Java: Strictly typed.

### 3. What are the Primitive Data Types in JavaScript?
- Number, Boolean, String
- Null, Undefined, BigInt
- NaN, Symbol

### 4. What are the Different Ways to Declare a Variable in JavaScript?
- JavaScript has three main ways to declare a variable: `var`, `let`, and `const`.

### 5. What is the Difference Between `var`, `let`, and `const`?
- See (and run) the `day5.html` file for examples and details.

### 6. What are Template Literals in JavaScript?
- Template literal is a way to create strings that allow easier string interpolation, multi-line strings, and embedded expressions. We use backticks (`` ` ``) instead of quotes (`"` or `'`).

### 7. Explain the Concept of `null` vs `undefined`
- **null**: Assigned to a variable intentionally to occupy the memory block and keep it empty.
- **undefined**: If we declare a variable and try to access it without initialization.

### 8. How Can You Convert a String to a Number in JavaScript?
1. **Using `Number()`**
   ```javascript
   let str = "123";
   let num = Number(str); // 123
   ```
2. **Using `parseInt()`**
   ```javascript
   let str = "123.45";
   let num = parseInt(str); // 123
   ```
3. **Using the Unary `+` Operator**
   ```javascript
   let str = "123";
   let num = +str; // 123
   ```

### 9. How Can You Check if a Value is NaN?
- ```javascript
  console.log('10years' - 10);    // NaN
  console.log('hi' - 'hi');       // NaN
  console.log(false / 0);         // NaN
  console.log(undefined - 10);    // NaN
  console.log(Number(undefined)); // NaN
  console.log(Number('10a'));     // NaN
  ```

### 10. What is the Use of `typeof` Operator in JavaScript?
- The `typeof` operator is used to get the data type of a given variable or expression. It returns the data type in string format.

  ```javascript
  let unknown;
  console.log(typeof unknown); // Output: "undefined"

  let empty = null;
  console.log(typeof empty); // Output: "object" (special case in JavaScript)

  console.log(typeof fn); // Output: "function"
  console.log(typeof obj); // Output: "object"
  console.log(typeof arr); // Output: "object"
  ```
---
<h1 style="text-align: center; color: teal; font-size: 30px">II. Functions and Scope </h1>

<h1 style="text-align: center; color: teal; font-size: 30px">III. Objects and Arrays</h1>

<h1 style="text-align: center; color: teal; font-size: 30px">IV. Prototypes and Inheritance</h1>

<h1 style="text-align: center; color: teal; font-size: 30px">V. Closures</h1>

<h1 style="text-align: center; color: teal; font-size: 30px">VI. Event Handling</h1>

<h1 style="text-align: center; color: teal; font-size: 30px">VII. Asynchronous JavaScript</h1>

<h1 style="text-align: center; color: teal; font-size: 30px">VIII. Error Handling</h1>

<h1 style="text-align: center; color: teal; font-size: 30px">IX. DOM Manipulation</h1>

<h1 style="text-align: center; color: teal; font-size: 30px">X. ES6 Features</h1>

<h1 style="text-align: center; color: teal; font-size: 30px">XI. JavaScript and the Browser</h1>

<h1 style="text-align: center; color: teal; font-size: 30px">XII. Hoisting, Scope, and this</h1>

<h1 style="text-align: center; color: teal; font-size: 30px">XIII. Other Topics</h1>