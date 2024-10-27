// ====================================================================================
//                              1. Basic Concepts 
// ====================================================================================


// What is JavaScript? 
    // - Javascript is scripting and programming language.
    // - Features:
        // - purely obj based (means that variables, functions, and even primitive data types like numbers and strings are object)
        // - dynamically typed language
        // - Loosely typed
        // - oopl
        // - interepreted lang
        // - It is synchronous language , it has single threaded architecture



// How is JavaScript different from Java? 
    // Purpose 
        // - Primarily used for web development, adding interactivity to web pages.	
        // - Used for building standalone applications, mobile apps, and large-scale enterprise systems.
    // Execution
        // - Interpreted language, runs directly in the web browser.	
        // - Compiled into bytecode, executed by the Java Virtual Machine (JVM).
    // Typing
        // - Loosely typed / dynamically typed
        // - Strictly typed



// What are the Primitive data types in JavaScript? 
        // - Number, boolean, string, 
        // - null, undefined, bigint, 
        // - NaN, symbol


// What are the different ways to declare a variable in JavaScript? 
    //  three main ways to declare a variable: var, let and const



// What is the difference between var, let, and const? 
    // see(and run) day5 html file



// What are template literals in JavaScript? 
    // are a way to create strings that allow for easier string interpolation, multi-line strings, and embedded expressions. They use backticks (`) instead of quotes (" or ').



// Explain the concept of null vs undefined
    // null: null is assigned to a variable intentionally to occupy the memory block and keep it empty; 
    // undefined: if we declare a variable and try to access it without initialization



// How can you convert a string to a number in JavaScript? 
    // 1. Using Number()
        // let str = "123";
        // let num = Number(str); // 123
    // 2. Using parseInt()
        // let str = "123.45";
        // let num = parseInt(str); // 123    
    // 3. Using the Unary + Operator
        // let str = "123";
        // let num = +str; // 123    




// How can you check if a value is NaN? 
    // console.log('10years' - 10);    // NaN
    // console.log('hi' - 'hi');       // NaN
    // console.log(false/0);           // NaN
    // console.log(undefined - 10);    // NaN
    // console.log(Number(undefined)); // NaN
    // console.log(Number('10a'));     // NaN



// What is the use of typeof operator in JavaScript? 
    // used to get the data type of a given variable or expression. It returns in string format.

        // let unknown;
        // console.log(typeof unknown); // Output: "undefined"

        // let empty = null;
        // console.log(typeof empty); // Output: "object" (special case in JavaScript)

        // console.log(typeof fn); // Output: "function"
        // console.log(typeof obj); // Output: "object"
        // console.log(typeof arr); // Output: "object"



// ====================================================================================
//                              2. Functions and Scope 
// ====================================================================================


// What is a function in JavaScript? 
    // fn is a block of code which is used to do some specific task and it gets executed when we call it.
    // main purpose of fn is code reusability
    // to call fn we need name of the fn and ()
    // fn created using function keyword supports hoisting that's why we can call a it before declaration.
    // local global scope
    // return keyword
    // var will also create local scoped variables within a fn
    // every fn has 'this' keyword except arrow fn 
    // Function does not belong to temporal dead zone
    // Function which is passed to an variable as a value is called as first class function
    // Function Expressions and Arrow Functions: Only the variable declaration is hoisted, not the function body, so calling them before the assignment results in an error.



// What is the difference between a function declaration and a function expression? 
    // Definition	
            // Uses function keyword and a name.	
            // Function assigned to a variable, may be named or anonymous.
    // Hoisting
            // fully Hoisted name + body	
            // Variable is hoisted, but the function is not initialized.
    // IIFE Support	
            // can't wrap within iife
            // Can be used as IIFE



// What are arrow functions? 
    // Arrow functions are a shortcut way to write functions in JavaScript, introduced in ES6 (ECMAScript 2015). They use a new => syntax. 
    // If we have only single parameter, it is not necessary to use paranthesis for paramenter
    // If function have single statement, then block (curly braces) is optional
    // It does not have its own 'this' property
    // Implicit return :- If there is only one statement and If block is not created then JS Engine will return that statement automatically.



// Explain default parameters in functions. 
    // when we assign some default values to the variables in parameter list, it's called default parameters
    // this default parameters will be used as values if we don't pass a value during fn call



// What is the difference between regular functions and arrow functions in terms of this? 
    // In regular fn, this keyword always points to window object (global obj)
    // in arrow fn, this keyword points to window obj (global obj) but when it is used inside nested fn in an object it points to current obj



// What is a callback function? 
    // The fn which can be passed as an argument to another fn or a fn which is returned by another fn is called cbf.



// What is a higher-order function? 
    // A fn that can accept another fn as a parameter or return a fn is called HOF.



// What is function hoisting? 
    // the process of moving fn to the top of the execution context before its execution is called fn hoisting
    // as a result, we can call it before it's declaration
    // fn with declaration is automatically hoisted (name+body) [can call before its declaration]
    // fn expression is not hoisted, only its name is hoisted [when its called before its declaration, it returns undefined]



// What are anonymous functions? 
    // A fn without a name is called Anonymous function and it can't be called directly
    // they are assigned to a variable and then we call the fn using that variable.
    // eg: iife, function(){}, arrow fn ()=>{}, etc.



// Explain the concept of IIFE (Immediately Invoked Function Expression).
    // a function that is defined and executed immediately after it's created
    // iife can be called only once because there is no name to call it later
    // it gets called automatically 
    // where to use: to achieve automatic tasks like accept cookies
    // syntax: (()=>{})();  // ; is must



// ====================================================================================
//                               3. Objects and Arrays 
// ====================================================================================


// What are objects in JavaScript? 
// How do you create an object in JavaScript? 
// What is the difference between dot notation and bracket notation for accessing object 
// properties? 
// How do you merge two objects in JavaScript? 
// How do you clone an object? 
// What is object destructuring? 
// What are arrays in JavaScript? 
// What is array destructuring? 
// How can you find the length of an array in JavaScript? 
// How do you add/remove elements from the start/end of an array? 



// 4. Prototypes and Inheritance 
// ====================================================================================


// What is a prototype in JavaScript? 
// How is inheritance achieved in JavaScript? 
// What is the Object.create() method? 
// What is a constructor function in JavaScript? 
// What is the hasOwnProperty() method? 
// What is the difference between __proto__ and prototype? 



// 5. Closures 
// ====================================================================================


// What is a closure in JavaScript? 
// How does a closure work? 
// Give an example of a closure. 
// What are the practical uses of closures? 



// 6. Event Handling 
// ====================================================================================


// What are events in JavaScript? 
// How do you add an event listener to an element in JavaScript? 
// What is the  event.preventDefault()? 
// How do you remove an event listener in JavaScript? 
// Explain what this refers to in an event handler. 



// 7. Asynchronous JavaScript 
// ====================================================================================


// What is synchronous and asynchronous code? 
// What are callbacks? 
// What is a promise in JavaScript? 
// How do you create a promise in JavaScript? 
// What is the purpose of the then() and catch() methods in promises? 
// What is async and await? 
// What is the difference between async and defer attributes in script tags? 
// Explain the concept of JavaScript event loop. 
// What are microtasks and macrotasks in JavaScript? 
// What is the purpose of setTimeout and setInterval? 



// 8. Error Handling
// ====================================================================================


// What is the difference between a runtime error and a syntax error? 
// How do you handle exceptions in JavaScript? 
// What is a try-catch-finally block in JavaScript? 
// How do you create a custom error in JavaScript? 
// What is the throw keyword used for? 



// 9. DOM Manipulation 
// ====================================================================================


// What is the DOM? 
// How can you select an HTML element using JavaScript? 
// What is the difference between getElementById, getElementsByClassName, and 
// querySelector? 
// How do you create an element dynamically in JavaScript? 
// How can you change the text content of an HTML element? 
// How do you change the style of an HTML element using JavaScript? 
// How do you add or remove a class from an element in JavaScript? 



// 10. ES6 Features 
// ====================================================================================


// What is the let keyword and how is it different from var? 
// What is the const keyword? 
// Explain block scoping in JavaScript. 
// What is the spread operator (...) and how is it used? 
// What is the rest operator (...)? 
// What are template literals in JavaScript? 
// Explain destructuring assignment.
// What are symbols in JavaScript? 



// 11. JavaScript and the Browser 
// ====================================================================================


// How do you handle browser storage in JavaScript (localStorage, sessionStorage, and 
// cookies)? 
// What is the difference between localStorage and sessionStorage? 
// How can you store and retrieve data from localStorage? 



// 12. Hoisting, Scope, and this 
// ====================================================================================


// What is hoisting in JavaScript? 
// Explain the difference between global and local scope. 
// What is lexical scoping? 
// What does this refer to in JavaScript? 
// How is the value of this determined? 
// What are call, apply, and bind methods in JavaScript? 
// What is strict mode in JavaScript and how do you enable it? 



// 13. Other Topics 
// ====================================================================================


// Explain the concept of currying. 
// What is the difference between deep copy and shallow copy?