// 25 - sept - 2024

// 2nd way: deep copy (when changes done in copied variable, the original doesn't get effected)
let obj = {
    name : 'Mahesh',
    age: 24
}
console.log("original obj: ", obj);

// deep copy
let copy = Object.assign({}, obj)
console.log("copy variable before adding address: \n", copy);
copy.address = 'Pune'
console.log("copy variable after adding address: \n", copy);





console.log('================================================');
// this keyword
// in global scope, this keyword will point to Window object
// 99% of the times this will point to window object if u use it in arrow fn (1% is exception, discussed at last)





// Application of this in 6 different scenarios/scopes

// 1. this in global scope 
console.log(this);      // window object





// 2. this in normal function
function fun1(){
    console.log(this);      // window object
}
fun1()





// 3. this in arrow function
let fun2 = ()=>{
    console.log(this);      // window object
}
fun2()





let obj1 = {
    // 4. this in object's normal fn
    f1: function(){
        console.log(this);  // current obj
    },
    // 5. this in object's arrow fn
    f2: ()=>{
        console.log(this);  // window obj
    } 
}
obj1.f1()
obj1.f2()





// 6. only one scenario where this keyword will point to current object even when used inside arrow fn is :
// 99% of the times this keyword will point to window object if u use it in arrow fn 
// (1% is exception, is discussed below)

            // obj > normal fn > arrow fn



// let's see example
console.log('========================================');

let newObj = {
    name: 'Putin',
    age: 50,
    normalFn: function(){
        console.log(this);          // entire current obj
        let a = 10
        console.log(a);
        let nestedFn = ()=>{
            console.log(this);      // entire current obj
            console.log(a);
        }
        nestedFn();
    }
};
newObj.normalFn()