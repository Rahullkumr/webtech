// Object

// 1. An Object is a block of memory which has state(variable) , behaviour(methods) and where we can store heterogenous data.
// 2. An object is a collection of key-value pairs that can contain various data types, such as numbers, strings, arrays, functions, and other objects.
// 3. In one object we can have multiple key value pair and it should be separated by ',' comma.
// 4. We can access value of object using (.) Operator or square bracket [] , object reference and key_name.
// #Object Key (Property)
// 1. Object key (property) will be automatically converted into string by js engine.
// 2. If keys name are in Number , js engine will convert them into string and arrange them in ascending order.
// 3. To write space separated key names , we have to enclose key name with double quotes.
// 4. If we want to give computed or user defined property then we have to use square brackets and variable name.
// 5. 
// If key-name is same as variable name which hold the value , instead of writing two times we can write varaiable name only once.

// let phone = 8800425635;
// let obj = {
//   phone,
//   // phone:phone
// };
// #Ways To Create Object

// 1. 
// By using curly braces { } and literals.

// let obj = {}
// // empty object

// let obj = { name:"chombi",age:16}
// // object with literals

// 2. 
// By using new keyword and Constructor.

// let obj = new Object();
// // {} empty object

// let obj=new Object({ name:"chombi"});
// // { name:"chombi"} object with literals

// 3. By using new keyword and Constructor function
// 4. By using class
// #Access Object Value

// 1. 
// By using dot operator ( . ) and key name.

// let obj = { name:"chombi",age:16}

// console.log(obj.name)// chombi
// console.log(obj.age)// 16

// 2. 
// By using square brackets ( [] ) and key name.

// let obj = { name:"chombi",age:16}

// console.log(obj["name"])// chombi
// console.log(obj["age"])// 16

// 3. If we try to access property which is not available in object we will get undefined.
// #Object Methods
// 1. In JavaScript, object methods are functions that are attached to the object, and can be called on that object reference.
// 2. To call a function , we use square brackets instead dot operator.
// 3. 
// Here, speak is a variable which holds the function reference.

// let obj1 = { name: "chombi",
// age: 16,
// speak: function () {
// console.log('i can speak');
// } }
// console.log(obj1["speak"]());
// //i can speak

// 4. 
// Access object property inside function - function declared with function keyword.

// let obj1 = { name: "chombi",
// age: 16,
// speak: function () {
// console.log('My name is' + this.name+',age' + this.age+' and i can speak');
// } }
// console.log(obj1["speak"]());
// //My name is chombi , age 16 and i can speak

// Here, we can access object property, by using 'this' keyword.
// 5. 
// Access object property inside function - Arrow function.

// let obj1 = {
//   name: "chombi",
//   age: 16,
//   speak: () => {
//     console.log(
//       "My name is" + obj1.name + " , age " + obj1.age + " and i can speak"
//     );
//   },
// };
// console.log(obj1["speak"]());
// //My name is chombi , age 16 and i can speak
// // Here, we can access object property, by using object reference.

// Here , we can can access object property , by using object reference because arrow function is not having 'this' property.
// #Add Key Value In Object

// 1. To add key-value pair we can using dot operator and square brackets
// 2. 
// By using dot operator ( . ) and key name

// let obj = { name:"chombi",age:16}

// obj.country = "india";
// //new key-value added in object
// // {
// name:"chombi",
// age:16,
// country:"india",
// }

// NOTE : If property is already available with same name it will updated with new value.
// Example:
// let obj = { name:"chombi",age:16 }
// obj.age = 18;
// //age property value is updated
// // {
// name:"chombi",
// age:18,
// }

// #Check Property Is Available In Object Or Not

// 1. 
// We can check using "in" operator.
// Syntax : "property name" in object_name

// let obj = { name:"chombi",age:16}

// obj.country = "india";
// //new key-value added in object
// // {
// name:"chombi",
// age:16,
// country:"india",
// }



// We can check using "in" operator.

// let obj = { name:"chombi",age:16}

// console.log("name" in obj )// true
// console.log("age" in obj )// true
// console.log("city" in obj )// false