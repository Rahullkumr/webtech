// #JavaScript Notes###


// #History
// 1.	JavaScript was first created by Brendan Eich in just 10 days in May 1995 while he was working at Netscape Communications Corporation.
// 2.	The initial release was called Mocha and later renamed to LiveScript, and finally JavaScript.
// 3.	 Initially, JavaScript was designed to be a lightweight scripting language for adding interactivity to web pages.
// 4.	At the time, web pages were mostly static and lacked interactivity, and the only way to add dynamic content to a web page was to use a server-side programming language like PHP or Perl.
// 5.	However, this approach had limitations and was not well-suited to creating responsive, interactive user interfaces.
// 6.	The idea behind JavaScript was to create a scripting language that could be executed on the client-side (in the user's web browser) and could be used to add interactivity to web pages.
// 7.	This allowed web developers to create more engaging and interactive websites, without having to rely on server-side programming languages.
// 8.	Its popularity grew rapidly as it was one of the few languages that could be executed directly in web browsers, without the need for additional plugins or software.
// 9.	In 1996, Microsoft released JScript as a competitor to JavaScript, which was their own implementation of the language for their Internet Explorer browser.
// 10.	 However, JScript was very similar to JavaScript, and the two languages were largely interchangeable.
// 11.	Over time, JavaScript has evolved and grown to become a full-fledged programming language, capable of creating complex applications on both the client and server-side.
// 12.	The development of JavaScript has been heavily influenced by a number of factors, including the emergence of new web technologies, changes in programming paradigms, and the rise of new development frameworks and libraries.
// 13.	Today, JavaScript is one of the most widely used programming languages in the world, powering many of the most popular websites and web applications.
// 14.	It continues to evolve and adapt to the changing needs of the web, with new features and capabilities being added on a regular basis.

	
// #Introduction
// 1. Javascript is scripting and programming language.
// 2. It is purely object based language.This means that variables, functions, and even primitive data types like numbers and strings are object,everything is object in javascript.
// 3. It is dynamically typed language , it means type of value stored in memory block is checked at runtime because of this nature we can store any type of value in variable.
// 4. It is object oriented programming language , it means we can create our own object. (It is not purely object oriented programming language)
// 5. It is interepreted language
// 6. It is synchronous language , it has single threaded architecture. Instructions get executed line by line.
// 7. It is single call stack
// 8. Mainly introduced to instruct the browser
// 9. Js helps to provide behavior and functionality to webpage and helps to develop dynamic webpage
// 10. Every browser have js engine to run js code. Therefore browser become environment to run js code.
// 11. To run Js code outside browser we just need Javascript runtime environment (Node).
// 12. Js is used to add functionality to website.


// #Javascript Runtime Environment
// 1. JavaScript Runtime Enviroment provides the enviroment where we can run our JavaScript code.
// 2. Two javascript runtime enviroments are :
    // I. Browser
    // II. Node.js
// #Browser
// 1. A browser is a software application that is used to access and view information on the World Wide Web (WWW).
// 2. It allows users to interact with web pages, view multimedia content, and surf the internet.
// 3. The Browser acts as a JavaScript runtime environment because it includes a JavaScript engine that interprets and executes JavaScript code
// #JavaScript Engine
// 1. A JavaScript engine is a computer program that executes JavaScript code.
// 2. It is a core component of web browsers, server-side JavaScript platforms, and other JavaScript-based environments.
// #Some Popular JavaScript Engines Include:
// 1. V8 (fastest Js engine): developed by Google, used in Google Chrome and Node.js
// 2. SpiderMonkey : developed by Mozilla, used in Firefox
// 3. JavaScriptCore : developed by Apple, used in Safari
// 4. Chakra : developed by Microsoft, used in Microsoft Edge and Internet Explorer (legacy)
// #Node.Js
// 1. The main reason of javascript popularity.
// 2. Node.js is a software application that executes JavaScript code. It is not a framework or a library.
// 3. It allows developers to run JavaScript code outside of a web browser, such as on a server or command-line interface.
// 4. Node.js uses the V8 JavaScript engine, which is also used in Google Chrome.
// 5. It is built on top of an event-driven, non-blocking I/O model, which allows it to handle large numbers of simultaneous connections without blocking the execution of other code.
// 6. This makes it well-suited for building scalable, high-performance applications that can handle a large amount of traffic.
// 7. Because after introduction of Nodejs, we were able to run javascript anywhere like in web servers, as command-line tools, desktop applications, and even IoT (Internet of Things) devices.


// Features of JavaScript

// 1. **Scripting Language**:
//    - **What it means**: JavaScript is used to write small programs that automate tasks in web pages.
//    - **Why we call it that**: It helps make web pages interactive. For example, it can change text when you click a button or show a pop-up message.

// 2. **High-Level Language**:
//    - **What it means**: JavaScript is easy for humans to read and write.
//    - **Why we call it that**: You don’t need to know the details of how the computer works to use JavaScript. It uses simple commands and is close to human language, making it accessible for beginners.

// 3. **Interpreted Language**:
//    - **What it means**: JavaScript code runs directly in the web browser without needing to be converted into another form first. It has interpretor which runs the code line by line.
//    - **Why we call it that**: You can see the results of your code immediately in the browser. This makes it easy to test and fix your code quickly.

// 4. **Synchronous Language**:
//    - **What it means**: JavaScript runs commands one after another, in order.
//    - **Why we call it that**: When you write JavaScript code, it does each task step by step, making it easier to understand what’s happening in your program.

// 5. **Object-Based Language**:
//    - **What it means**: JavaScript uses objects to store and organize data and functions. 
//    - **Why we call it that**: In javaScript most of the things are are internally objects. Objects help keep related code together. For example, you can have an object for a car that includes properties like color and methods like drive.

// 6. **Object-Oriented Language**:
//    - **What it means**: JavaScript supports creating complex structures using classes and objects.
//    - **Why we call it that**:We can create our own objects using classes in javascript.

// 7. **Loosely Typed Language**:
//    - **What it means**: In JavaScript, you don’t have to specify what type of data (like a number or text) a variable holds. Also we don’t need to follow the syntax very strictly eg. No need to write semicolons. 
//    - **Why we call it that**: This makes writing code faster and easier because you don’t have to worry about declaring data types and don’t need to strictly follow the syntax. You can just start using variables right away.

// 8. **Dynamically Typed Language**:
//    - **What it means**: The type of data a variable holds can change as your program runs.
//    - **Why we call it that**: You can have a variable that starts as a number and then later hold a string (text) without any extra work. This flexibility makes JavaScript powerful for writing dynamic programs.

// 9. **Single-Threaded Language**:
//    - **What it means**: JavaScript can only do one thing at a time.
//    - **Why we call it that**: This simplicity makes it easier to write and understand JavaScript code. Even though it does one task at a time, JavaScript can handle many tasks quickly by using techniques like callbacks and promises.


// #Token
// 1. It is the smallest unit of programming language.
// 2. We have 5 types (KILOP): operators,punctuators,keywords ,identifiers , literals.
// #Operators
// In JavaScript, operators are used to perform operations on variables and values. Here are the main types of operators in JavaScript, along with examples and brief descriptions:

// ### 1. *Arithmetic Operators*
// Arithmetic operators are used to perform arithmetic calculations.

// - + (Addition): Adds two values.
//   javascript
//   let sum = 5 + 3; // sum is 8
  
// - - (Subtraction): Subtracts the second value from the first.
//   javascript
//   let difference = 10 - 4; // difference is 6
  
// - * (Multiplication): Multiplies two values.
//   javascript
//   let product = 6 * 7; // product is 42
  
// - / (Division): Divides the first value by the second.
//   javascript
//   let quotient = 20 / 5; // quotient is 4
  
// - % (Modulus): Returns the remainder of a division.
//   javascript
//   let remainder = 10 % 3; // remainder is 1
  
// - ** (Exponentiation): Raises the first value to the power of the second.
//   javascript
//   let power = 2 ** 3; // power is 8
  

// ### 2. *Assignment Operators*
// Assignment operators are used to assign values to variables.

// - =: Assigns a value to a variable.
//   javascript
//   let x = 10;
  
// - +=: Adds and assigns the result.
//   javascript
//   x += 5; // x is now 15
  
// - -=: Subtracts and assigns the result.
//   javascript
//   x -= 3; // x is now 12
  
// - *=: Multiplies and assigns the result.
//   javascript
//   x *= 2; // x is now 24
  
// - /=: Divides and assigns the result.
//   javascript
//   x /= 4; // x is now 6
  
// - %=: Takes modulus and assigns the result.
//   javascript
//   x %= 5; // x is now 1
  
// - **=: Raises to power and assigns the result.
//   javascript
//   x **= 3; // x is now 1
  

// ### 3. *Comparison Operators*
// Comparison operators are used to compare two values.

// - == (Equal to): Checks if two values are equal.
//   javascript
//   5 == '5'; // true
  
// - === (Strict equal to): Checks if two values are equal and of the same type.
//   javascript
//   5 === '5'; // false
  
// - != (Not equal to): Checks if two values are not equal.
//   javascript
//   5 != '5'; // false
  
// - !== (Strict not equal to): Checks if two values are not equal and/or not of the same type.
//   javascript
//   5 !== '5'; // true
  
// - > (Greater than): Checks if the left value is greater than the right.
//   javascript
//   10 > 5; // true
  
// - < (Less than): Checks if the left value is less than the right.
//   javascript
//   10 < 5; // false
  
// - >= (Greater than or equal to): Checks if the left value is greater than or equal to the right.
//   javascript
//   10 >= 10; // true
  
// - <= (Less than or equal to): Checks if the left value is less than or equal to the right.
//   javascript
//   10 <= 5; // false
  

// ### 4. *Logical Operators*
// Logical operators are used to combine multiple boolean expressions.

// - && (Logical AND): Returns true if both operands are true.
//   javascript
//   true && false; // false
  
// - || (Logical OR): Returns true if at least one operand is true.
//   javascript
//   true || false; // true
  
// - ! (Logical NOT): Inverts the boolean value.
//   javascript
//   !true; // false
  

// ### 5. *Bitwise Operators*
// Bitwise operators are used to perform bit-level operations.

// - & (AND): Returns a 1 in each bit position for which the corresponding bits of both operands are 1.
//   javascript
//   5 & 1; // 1 (0101 & 0001)
  
// - | (OR): Returns a 1 in each bit position for which the corresponding bits of either or both operands are 1.
//   javascript
//   5 | 1; // 5 (0101 | 0001)
  
// - ^ (XOR): Returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1.
//   javascript
//   5 ^ 1; // 4 (0101 ^ 0001)
  
// - ~ (NOT): Inverts the bits of its operand.
//   javascript
//   ~5; // -6 (not 0101)
  
// - << (Left shift): Shifts bits to the left by the specified number of positions.
//   javascript
//   5 << 1; // 10 (0101 << 1)
  
// - >> (Sign-propagating right shift): Shifts bits to the right, preserving the sign.
//   javascript
//   5 >> 1; // 2 (0101 >> 1)
  
// - >>> (Zero-fill right shift): Shifts bits to the right, filling with zeros.
//   javascript
//   5 >>> 1; // 2 (0101 >>> 1)
  

// ### 6. *String Operators*
// String operators are used to manipulate strings.

// - + (Concatenation): Joins two or more strings.
//   javascript
//   let greeting = 'Hello' + ' ' + 'World'; // "Hello World"
  
// - +=: Appends the right operand to the left operand.
//   javascript
//   let text = 'Hello';
//   text += ' World'; // "Hello World"
  

// ### 7. *Conditional (Ternary) Operator*
// The ternary operator is a shorthand for an if-else statement.

// - condition ? expr1 : expr2: Returns expr1 if the condition is true, otherwise returns expr2.
//   javascript
//   let result = (5 > 3) ? 'Greater' : 'Lesser'; // "Greater"
  

// ### 8. *Type Operators*
// Type operators are used to determine the type of a variable or value.

// - typeof: Returns the type of a variable or expression.
//   javascript
//   typeof 42; // "number"
  
// - instanceof: Tests whether an object is an instance of a particular class or constructor.
//   javascript
//   let arr = [];
//   arr instanceof Array; // true
  

// These operators are essential for performing various operations in JavaScript, from simple arithmetic to complex logical expressions.



// #Punctuators
// 1. These are symbols used to group, separate, or punctuate code.
// 2. Examples include parentheses (), curly braces {}, square brackets [], commas ,, semicolons ;, and the period . (used to access object properties).
// #Keywords
// 1. These are reserved words that have a special meaning in the language.
// 2. Examples like if, else, for, while, function, and return,etc.
// #Identifiers
// 1. These are user given names to variables, functions, and other objects in the code.
// 2. Identifier name can not start with number.
// 3. Identifier name should not be a keyword
// 4. If Identifier is of multiple word, instead of using space, we have to use underscore.
// 5. identifier name should not have special character but can start with underscore(_) and dollar($).
// #Literals
// 1. These are values used in our program like number(2),string('hello world') , etc.
// #Types Of Literals / Datatypes
// 1. Primitive
// 2. Non-Primitive
// #Primitive Literals
// 1. In JavaScript, a primitive data type is a data type that represents a single value.
// 2. JavaScript treats primitive values as immutable values, means that their value cannot be changed. Instead, when you perform an operation that appears to modify a primitive value, you are actually creating a new object with new value and assigning it to a variable. Here , variable will hold the reference of latest object with new value and the previous object with it's value will garbage collected.
// 3. We have 8 primitive types of literals -number , bigint , boolean , nan , undefined , null , symbol , string..
// #Primitive Datatypes
// 1. Number
// 1. This data type represents a numeric value. It can store both integers and floating-point values.
// 2. It's range is from -253-1 to 2 53-1 .
// 2. BigInt
// 1. It is used to represent integers that are larger than the Number data type
// 2. It's range is more than -253-1 and more than 253-1 .
// 3. To represent the given integer as bigint , we have to suffix 'n' after the integer.
// Example : 10 is number type and 10n is bigint type.
// 3. Boolean
// 1. This datatype represents a logical entity and can only have two values: true or false.
// 4. Null
// 1. This datatype represents a null or empty value.
// 2. It is used to mark the memory block empty intentionally.
// 5. Undefined
// 1. This datatype represents an uninitialized value.
// 2. When memory block is unintialized , js engine implicitly initialize that memory block with 'undefined' in variable phase.
// 3. For variable declared with 'var' it will initialize it in variable phase
// 4. For variable declared with 'let' and 'const' it will not initialize it in variable phase.
// 6. NaN
// 1. It stands for 'not a number'.
// 2. It represents computational error.
// 3. When js engine is not able compute result it returns 'NaN'.
// 4. Example : "Hello" + 1 = Hello1 and "Hello" - 1 = NaN
// In first case , js engine concatnated the string with number.
// In second case , js engine is able to compute anything because we can not subtract 1 from "Hello" string therefore it returns NaN.
// 7. Symbol
// 1. It represents a unique identifier.
// 2. We have Symbol function which is used to generate unique idenitifiers in our program.
// 8. String
// 1. It represents collection of characters.
// 2. We have two types of strings :- single line and multi line string.
// 3. Single line string :
// - It is enclosed by single quotes (' ') and double quotes (" ") .
// - It doesnot allow line breaks and whitespaces.
// 4. Multi line string :
// - It is enclosed by backticks (` `).
// - It allow line breaks and whitespaces.
// - It is also called as template string.
// - Template strings allow us to insert variables and expressions directly in the string using ` ${ variable_name } ` notation.
// #Non-Primitive Literals
// 1. In JavaScript, a non primitive data type is a data type that represents multi value.
// 2. JavaScript treats non-primitive values as mutable values, means that their value can be changed. When we try to update a value , new object is not created . Here value is changed in the same memory block.
// 3. Non-primitive datatype : object ,array , etc