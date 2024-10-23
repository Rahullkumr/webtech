// 22 - oct - 2024


// 'use strict';




// here 'this' will point to current element
let btn = document.querySelector('button')
btn.addEventListener('click', function(){
    this.style.backgroundColor = 'red';
});




// for 'of' loop with array
let arr = [10,20,30,40]
for(val of arr){
    console.log(val);
}




// for 'in' loop with array(in ====> index returns)
let arr1 = [10,20,30,40]
for(val in arr1){
    console.log(val);
}




// for 'in' loop with object
let obj = {
    name: 'Tinku',
    age: 23,
    add: 'Pune'
}
for(val in obj){
    console.log(obj[val]);
}




// for 'of' loop with object (ERROR)
let obj1 = {
    name: 'Tinku',
    age: 23,
    add: 'Pune'
}
for(val of obj1){
    console.log(obj1[val]);      // obj is not iterable
}




// flatten the nested array elements

let a = [[10,[20,30]],[3,90],99]

console.log(a.flat());      // [ 10, [ 20, 30 ], 3, 90, 99 ]
console.log(a.flat(1));     // [ 10, [ 20, 30 ], 3, 90, 99 ]
console.log(a.flat(2));     // [ 10, 20, 30, 3, 90, 99 ]
console.log(a.flat(3));     // [ 10, 20, 30, 3, 90, 99 ]
console.log(a.flat(4));     // [ 10, 20, 30, 3, 90, 99 ]





// whenever create a form, always use 'preventDefault()'

let userForm = document.querySelector('form')
userForm.addEventListener('submit', (e)=>{
    console.log('form submitted');
    e.preventDefault();    
});

