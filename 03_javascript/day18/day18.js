// 19 - Sept - 2024 (OBJECTS IN JS)

console.log('============ Ways of declaring an object in js ===============\n\n');



console.log('============ 1. object literal way ===============');

// syntax
// let obj = { key: 'value' }

// example
let car = {
    color: 'white',
    price: '20l',
    company: 'TATA',
    name: 'Safari',
    isPetrol: true,
    owner: {
        ownerName: 'Tinku',
        city: {
            cname: 'Pune',
            locality: "Deccan"
        }

    }
}
console.log(car.owner)



console.log("============ 2. using new keyword and object class ===============");

// syntax
// let obj = new Object({key: value})

// example
let obj = new Object()
console.log(obj);
obj.name = 'Tinku'
console.log(obj.name);



console.log("============ 3. using classes ===============");

// syntax
// class ClassName{
//     constructor(value){
//         this.key = value       
//     }
// }
// let objectName = new ClassName(value)

// Example
class CreateObj{
    constructor(name){
        console.log(name);
        this.name = name;        
    }
}
let obj1 = new CreateObj('Tinku')
let obj2 = new CreateObj('Rinku')
console.log(obj1);
console.log(obj1,obj2);



console.log("============ 4. using factory function ===============");

// factory function is a function that returns an object which we be stored in a variable

// syntax
// let obj = (value) => {
//     return {
//         key: value
//     }
// }

// example:
let Student = (name, add) => {
    let obj = {
        name: name,
        add: add
    }
    return obj
}
let Student1 = Student('Lalit', 'Pune')
let Student2 = Student('Mohit', 'Mumbai')
let Student3 = Student('Nikku', 'Nagpur')

console.log(Student1,Student2,Student3);



console.log("============ CRUD operations in objects ===============");

// create
let crud_obj = {
    name: 'Tinki'
}
// reading
console.log(crud_obj);

// updating (adding new properties)
crud_obj.add = 'Pune';       // adding key:value pair
console.log(crud_obj);
// updating (modifying old properties)
crud_obj.name = 'Tinku';     // overriding value
console.log(crud_obj);

// deleting an object's property
delete crud_obj.add
console.log(crud_obj);





console.log("\n\n\n============ Arrays in JS ===============");

// Arrays are collection of elements of any datatype
// Arrays are dynamically typed i.e we can add items at runtime
// Arrays are objects in js


let arr = ['mobile', 'charger', 'laptop', 'headphone']
console.log(arr);



let arr1 = ['mobile', 100, null, 'headphone', ()=>{console.log('func');}, {name: 'Tinku'}, [2,3,4]]

console.log(arr1);
console.log("Length: " + arr1.length);
console.log("last element: " + arr1[arr1.length-1]);



console.log('============Array Methods===============');

let a = [10,20,30,40]
console.log(a);

// add an element at last of an array
a.push(50)
console.log('push(50): '+ a);

// remove last element
a.pop()
console.log('pop(): ' + a);

// add element at the first index
a.unshift(100)
console.log('unshift(100): ' + a);
 
// remove the first element 
a.shift()
console.log('shift(): ' + a);

// find index of given element
console.log('index of 10: ' + a.indexOf(10));

// find element of given index
console.log('elment at index 3: ' + a.at(3))
