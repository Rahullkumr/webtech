<h1 align="center">JavaScript Interview Questions</h1>

<h1 align="center">I. Basic Concepts</h1>

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
   let v = NaN;
   console.log(isNaN(v));     // true

   //when will NaN shows up?
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

<h1 align="center">II. Functions and Scope </h1>

<h1 align="center">III. Objects and Arrays</h1>


# JavaScript Objects

## What are Objects in JavaScript?

- An Object is a block of memory which has state(variable) and behaviour(methods) where we can store heterogenous data.
- Objects are collections of key-value pairs that can contain various data types such as numbers, strings, arrays, functions, and other objects.
- Multiple key-value pairs in an object are separated by commas `,`.
- Values can be accessed using the dot (`.`) operator or square brackets `[]` with the object reference and key name.

### Key Points:
1. All object keys (except `Symbol`) are automatically converted into strings by the JavaScript engine.
   ```javascript
   const obj = { 2: "two", 1: "one" };
   console.log(obj); // { "1": "one", "2": "two" }
   ```

2. Numeric keys are converted to strings and arranged in ascending order.
   ```javascript
   const obj = { 2: "two", 1: "one" };
   console.log(obj); // { "1": "one", "2": "two" }
   ```

3. For space-separated keys, enclose them in double quotes.
4. To use computed or dynamically determined keys, use square brackets:
   ```javascript
   const prefix = "user";
   const id = 101;
   const obj = { [`${prefix}_${id}`]: "John Doe" };
   console.log(obj); // { "user_101": "John Doe" }
   ```

5. If a key name is the same as the variable holding its value, you can write just the key:
   ```javascript
   let phone = 8800425635;
   let obj = { phone }; // Equivalent to { phone: phone }
   ```

---

## How to Create an Object in JavaScript?

1. **Using curly braces `{}` and literals**:
   ```javascript
   let obj = { key: 'value' };
   let emptyObj = {};
   ```

2. **Using the `new` keyword and `Object()` constructor**:
   ```javascript
   let obj = new Object(); // Creates an empty object
   obj.name = "Mangru";
   ```

3. **Using the `new` keyword and a constructor function**:
   ```javascript
   function Person(name, age) {
       this.name = name;
       this.age = age;
   }
   const person1 = new Person("John", 30);
   ```

4. **Using the `new` keyword and a class**:
   ```javascript
   class MyClass {
       constructor(value) {
           this.key = value;
       }
   }
   let obj = new MyClass(value);
   ```

5. **Using a factory function**:
   - A factory function returns a new object each time it's called.
   ```javascript
   let Student = (name, address) => {
       return { name, address };
   };
   let student1 = Student('Lalit', 'Pune');
   let student2 = Student('Nikku', 'Nagpur');
   ```

---

## Dot Notation vs Bracket Notation

### Dot Notation:
```javascript
let obj = { name: "Mohit", age: 24 };
console.log(obj.name); // Mohit
```

### Bracket Notation:
```javascript
let obj = { 'first name': "Mohit", age: 24 };
console.log(obj['first name']); // Mohit
```

### Usage:
- Use dot notation when the key is a single word.
- Use bracket notation when the key contains special characters or is dynamically determined.

---

## How to Merge Two Objects in JavaScript?

1. **Using `Object.assign()` for a shallow merge**:
   ```javascript
   const obj1 = { name: "Palaki", age: 30 };
   const obj2 = { age: 35, add: { city: "Panaji", state: "Goa" } };
   const mergedObj = Object.assign({}, obj1, obj2);
   ```

2. **Using the Spread Operator (`...`) for a shallow merge**:
   ```javascript
   const obj1 = { name: "Palaki", age: 30 };
   const obj2 = { age: 35, add: { city: "Panaji", state: "Goa" } };
   const mergedObj = { ...obj1, ...obj2 };
   ```

3. **Using `JSON.parse(JSON.stringify())` for a deep copy merge**:
   ```javascript
   const obj1 = { name: "Palaki", age: 30 };
   const obj2 = { age: 35, add: { city: "Panaji", state: "Goa" } };
   const mergedObj = JSON.parse(JSON.stringify({ ...obj1, ...obj2 }));
   ```

---

## How to Clone an Object?

1. **Using `Object.assign()` for a shallow clone**:
   ```javascript
   const obj = { name: "Palaki", age: 35, add: { city: "Panaji", state: "Goa" } };
   const clonedObj = Object.assign({}, obj);
   ```

2. **Using the Spread Operator (`...`) for a shallow clone**:
   ```javascript
   const obj = { name: "Palaki", age: 35, add: { city: "Panaji", state: "Goa" } };
   const clonedObj = { ...obj };
   ```

3. **Using `JSON.parse(JSON.stringify())` for a deep clone**:
   ```javascript
   const obj = { name: "Palaki", age: 35, add: { city: "Panaji", state: "Goa" } };
   const deepClonedObj = JSON.parse(JSON.stringify(obj));
   ```

---

## What is Object Destructuring?

- Object destructuring is the process of extracting values from an object into variables.
   ```javascript
   let obj = { name: "Chombi", age: 16 };
   let { name, age, country } = obj; // Destructuring
   console.log(name); // Chombi
   console.log(age); // 16
   console.log(country); // undefined
   ```

### Key Points:
1. The variable names on the left-hand side (LHS) must match the keys in the object.
2. If the key is not present in the object, the variable is assigned `undefined`.
3. After destructuring, variables can be used directly without referencing the object.

---

## Important Methods Related to Objects

1. `Object.keys(obj)` ➡️ Returns an array of the object's keys.
2. `Object.values(obj)` ➡️ Returns an array of the object's values.
3. `Object.entries(obj)` ➡️ Returns an array of the object's properties in `[key, value]` pairs format.
4. `Object.seal(obj)` ➡️ Seals an object, preventing adding or removing properties (modification of existing properties is allowed).
5. `Object.freeze(obj)` ➡️ Freezes an object, making it immutable (no modifications allowed).
6. `Object.assign(target, ...sources)` ➡️ Copies properties from one or more source objects into the target object and returns the modified target.






<h1 align="center">IV. Prototypes and Inheritance</h1>

<h1 align="center">V. Closures</h1>

<h1 align="center">VI. Event Handling</h1>

<h1 align="center">VII. Asynchronous JavaScript</h1>

<h1 align="center">VIII. Error Handling</h1>

<h1 align="center">IX. DOM Manipulation</h1>

<h1 align="center">X. ES6 Features</h1>

<h1 align="center">XI. JavaScript and the Browser</h1>

<h1 align="center">XII. Hoisting, Scope, and this</h1>

<h1 align="center">XIII. Other Topics</h1>