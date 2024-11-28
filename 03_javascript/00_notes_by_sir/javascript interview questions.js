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
        // - It is synchronous language, it has single threaded architecture



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
    // see(and run) day5.html file



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

// types of fns:
// 1. fn declaration
// 2. fn as an expression
// 3. iife 
// 4. arrow fn
// 5. anonymous fn 
// 6. hof 
// 7. cbf 

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
            // Uses `function` keyword and a name.	
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
    // An Object is a block of memory which has state(variable) and behaviour(methods) where we can store heterogenous data.
    // An object is a collection of key-value pairs that can contain various data types, such as numbers, strings, arrays, functions, and other objects.
    // In one object we can have multiple key-value pairs and is separated by ',' comma.
    // We can access value of object using (.) Operator or square bracket [] , object reference and key_name
    
    // All object keys (except Symbol) are automatically converted into string by js engine.
        `
            const obj = { 2: "two", 1: "one" };
            console.log(obj); // { "1": "one", "2": "two" }
        `
    // If keys are in Number, js engine will convert them into string and arrange them in ascending order.
        `
            const obj = { 2: "two", 1: "one" };
            console.log(obj); // { "1": "one", "2": "two" }
        `
    // To write space separated keys , we have to enclose keys with double quotes.
    // If we want to use computed property (where key is determined at runtime) or user defined property as key, then we have to use square brackets and variable name or expression like [userId_${input_value}].
        `
            const prefix = "user";
            const id = 101;
            const obj = {['${prefix}_${id}']: "John Doe"}  // evaluates to 'user_101'};
            console.log(obj); // { "user_101": "John Doe" }            
        `
    
    // If key is same as variable name which hold the value , instead of writing key:value we can write key.
        `
            let phone = 8800425635;
            let obj = {
                phone,
                // phone:phone
            }
        `



// How do you create an object in JavaScript? 
    // 1. using curly braces { } and literals
        `
            let obj = { key: 'value' }
            let emptyObj = {}
        `
    // 2. using new keyword and Object() Constructor
        `
            let obj = new Object();     // empty object
            obj.name = "Mangru";
        `
    // 3. using new keyword and Constructor function
        `
            function Person(name, age) {
                this.name = name;
                this.age = age;
            }
            const person1 = new Person("John", 30);
        `
    // 4. using new keyword and Class
        `
            class MyClass{
                constructor(value){
                    this.key = value       
                }
            }
            let obj = new MyClass(value)
        `
    // 5. using factory function
        // factory function is a function that returns an object each time its called
        `
            let Student = (name, add) => {
                return { name, add };
            }
            let Student1 = Student('Lalit', 'Pune')
            let Student2 = Student('Nikku', 'Nagpur')
        `



// What is the difference between dot notation and bracket notation for accessing object properties? 
    `
        // dot . notation:
            let obj = { name: "Mohit", age: 24}
            console.log(obj.name)           // Mohit

        // bracket [] notation:
            let obj = { 'first name': "Mohit", age: 24}
            console.log(obj['first name'])  // Mohit
    ` 
    // USAGE: 
        // use . notation when key is a one word
        // use [] notation when key has special characters or when key is having dynamic values



// How do you merge two objects in JavaScript? 
    // 1. Using Object.assign() for shallow merge
        `
            const obj1 = { name: "Palaki", age: 30 };
            const obj2 = { age: 35, add: {city: "Panaji", state: "Goa"}};
            const mergedObj = Object.assign({}, obj1, obj2);
        `
    // 2. Using the Spread Operator (...) for shallow merge
        `
            const obj1 = { name: "Palaki", age: 30 };
            const obj2 = { age: 35, add: {city: "Panaji", state: "Goa"}};
            const mergedObj = {...obj1, ...obj2};
        `
    // 3.  Using JSON.parse(JSON.stringify()) for Deep Copy merge
        `
            const obj1 = { name: "Palaki", age: 30 };
            const obj2 = { age: 35, add: {city: "Panaji", state: "Goa"}};
            const mergedObj = JSON.parse(JSON.stringify({...obj1, ...obj2}));
        `



// How do you clone an object? (same as above)
    // 1. Using Object.assign() for shallow clone
        `
            const obj = { name: "Palaki", age: 35, add: {city: "Panaji", state: "Goa"}};
            const clonedObj = Object.assign({}, obj);
        `
    // 2. Using the Spread Operator (...) for shallow clone
        `
            const obj = { name: "Palaki", age: 35, add: {city: "Panaji", state: "Goa"}};
            const clonedObj = {...obj};
        `
    // 3.  Using JSON.parse(JSON.stringify()) for Deep clone
        `
            const obj = { name: "Palaki", age: 35, add: {city: "Panaji", state: "Goa"}};
            const deepClonedObj = JSON.parse(JSON.stringify(obj));
        `



// What is object destructuring? 
    // The process of extracting values from an object into variables.
    `
        let obj = { name:"chombi", age:16 }
        let {name,age,country} = obj;       // OBJECT DESTRUCTURING
        console.log(name);      // chombi
        console.log(age);       // 16
        console.log(country );  // undefined
    `
    // All the key names present on LHS are consider as variables
    // The variable names should be same as key names
    // Js engine will search for the key inside the object.
        // If the key is present , the value is extracted and stored into variable.
        // else, undefined is store into variable
    // After destructuring , we can directly access variable names, without using object reference

// Some important methods related to objects:
// 1. Object.keys(obj)          ➡️ Returns an array of the object's keys
// 2. Object.values(obj)        ➡️ Returns an array of the object's values
// 3. Object.entries(obj)       ➡️ Returns an array of the object's property in [key, value] pairs format
// 4. Object.seal(obj)          ➡️ Seals an object, meaning you cannot add or remove properties, but existing properties can still be modified
// 5. Object.freeze(obj)        ➡️ Freezes an object, making it immutable (cannot be modified
// 6. Object.assign(target, ...sources)    ➡️ Copies properties from one or more source objects into target object and returns the modified target.



// What are arrays in JavaScript? 
// What is array destructuring? 
// How can you find the length of an array in JavaScript? 
// How do you add/remove elements from the start/end of an array? 



// ====================================================================================
//                              4. Prototypes and Inheritance 
// ====================================================================================


// What is a prototype in JavaScript? 
// How is inheritance achieved in JavaScript? 
// What is the Object.create() method? 
// What is a constructor function in JavaScript? 
// What is the hasOwnProperty() method? 
// What is the difference between __proto__ and prototype? 



// ====================================================================================
//                      5. Closures 
// ====================================================================================


// What is a closure in JavaScript? 
// How does a closure work? 
// Give an example of a closure. 
// What are the practical uses of closures? 



// ====================================================================================
//                      6. Event Handling 
// ====================================================================================


// What are events in JavaScript? 
// How do you add an event listener to an element in JavaScript? 
// What is the  event.preventDefault()? 
// How do you remove an event listener in JavaScript? 
// Explain what this refers to in an event handler. 



// ====================================================================================
//                      7. Asynchronous JavaScript 
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



// ====================================================================================
//                         8. Error Handling ✅
// ====================================================================================


// What is the difference between a runtime error and a syntax error? 
// How do you handle exceptions in JavaScript? 
// What is a try-catch-finally block in JavaScript? 
// How do you create a custom error in JavaScript? 
    // create a custom error by extending the built-in Error class.
    // eg:
        // class CustomError extends Error {
        //     constructor(message) {
        //       super(message);
        //       this.name = 'CustomError';
        //     }
        //   }        
        //   throw new CustomError('Something went wrong!');
      
// What is the throw keyword used for? 
    // used to manually raise an error  
    // When an error is thrown, the program stops executing, and the nearest catch block (if any) will handle the error.
    // eg:
        // throw new Error('This is an error message.');



// ====================================================================================
//                          9. DOM Manipulation 
// ====================================================================================


// What is the DOM? 
// How can you select an HTML element using JavaScript? 
// What is the difference between getElementById, getElementsByClassName, and 
// querySelector? 
// How do you create an element dynamically in JavaScript? 
// How can you change the text content of an HTML element? 
// How do you change the style of an HTML element using JavaScript? 
// How do you add or remove a class from an element in JavaScript? 


// ====================================================================================
//                          10. ES6 Features ✅
// ====================================================================================


// What is the let keyword and how is it different from var? 
// What is the const keyword? 
// Explain block scoping in JavaScript. 
// What is the spread operator (...) and how is it used? 
// What is the rest operator (...)? 
// What are template literals in JavaScript? 
// Explain destructuring assignment.
// What are symbols in JavaScript? 



// ====================================================================================
//                          11. JavaScript and the Browser ✅
// ====================================================================================


// How do you handle browser storage in JavaScript (localStorage, sessionStorage, and 
// cookies)? 
// What is the difference between localStorage and sessionStorage? 
// How can you store and retrieve data from localStorage? 



// ====================================================================================
//                          12. Hoisting, Scope, and this ✅
// ====================================================================================


// What is hoisting in JavaScript? 
// Explain the difference between global and local scope. 
// What is lexical scoping? 
// What does this refer to in JavaScript? 
// How is the value of this determined? 
// What are call, apply, and bind methods in JavaScript? 
// What is strict mode in JavaScript and how do you enable it? 



// ====================================================================================
//                              13. Other Topics ✅
// ====================================================================================


// Explain the concept of currying. 
    // currying is a functional programming concept in JS where a fn with multiple parameters is converted into a chain/series of fns, each one having only one parameter
    // named after American Mathematician Haskell Curry
    // useful for: code readability and to prevent repetation
    // eg:
        // Regular function:
            // function simpleFunction(param1, param2, param3) {
            //     return param1 + param2 + param3;
            // }

        // Curried function:
            // function curriedFunction(param1) {
            //     return function(param2) {
            //         return function(param3) {
            //             return param1 + param2 + param3;
            //         };
            //     };
            // }

            

// What is the difference between deep copy and shallow copy?
    // deep copy and shallow copy are two different ways of copying an object or array in JS.
    // SHALLOW COPY:
        // ANY CHANGES TO THE COPIED NESTED ARRAY/OBJ IS REFLECTED TO THE ORIGINAL ARRAY/OBJ
        // A shallow copy of an array/obj creates a new object but doesn't creates copies of nested arrays/objects; instead, it copies the references to the original nested objects
        // As a result, changes to nested objects in the copied version will affect the original object, because both the original and the copy share references to the same nested objects.
        // eg (SHALLOW COPY):

            // 1. Using Object.assign() for Objects:
                // const original = { a: 1, b: { c: 2 } };
                // const shallowCopy = Object.assign({}, original);                
                // shallowCopy.b.c = 42;
                // console.log(original.b.c); // Output: 42 (original is affected)    
            
            // 2. Using Spread Operator for Arrays:
                // const originalArray = [1, 2, [3, 4]];
                // const shallowCopyArray = [...originalArray];
                
                // shallowCopyArray[2][0] = 99;
                // console.log(originalArray[2][0]); // Output: 99 (original array is affected)

    // DEEP COPY:
        // ANY CHANGES TO THE COPIED NESTED ARRAY/OBJ IS NOT REFLECTED TO THE ORIGINAL ARRAY/OBJ
        // it creates a new copy of nested object/array also.
        // eg (DEEP COPY):

            // 1. Using JSON.parse(JSON.stringify()) ======> works for arrays, objects and strings also:
                // const original = { a: 1, b: { c: 2 } };
                // const deepCopy = JSON.parse(JSON.stringify(original));
                // deepCopy.b.c = 42;
                // console.log(original.b.c); // Output: 2 (original is not affected)
