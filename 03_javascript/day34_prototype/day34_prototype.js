// 08 - Oct - 2024


// prototyping 



// prototype: blueprint of any datatype
// __proto__ : keyword to access the prototype of datatype



let arr = [10,20]
console.log(arr);


let num = 10
console.log(num.__proto__);     // __proto__ ===> dir() in python

let s = 'hello'
let n = null 
let u = undefined
let o = {}
let b = true 
console.log(s.__proto__);
// console.log(n.__proto__);
// console.log(u.__proto__);
console.log(o.__proto__);
console.log(b.__proto__);





console.log('==========================');
// we have oops in JS but we don't use that anywhere



// INHERITANCE using prototyping

let obj1 = {name: 'Tinku'}
let obj2 = {surname: "Pandey"}
console.log(obj1.__proto__);

obj1.__proto__ = obj2 

console.log(obj1);
console.log(obj1.surname);

