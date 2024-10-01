// 27 - sept - 2024


// array literal way

let arr = [10,20,30,40]
console.log(arr);

// using array class and new keyword

let arr2 = new Array(50,60,70)
console.log(arr2);





// ex1
let arr3 = [10, 'hello', true, null, undefined, ()=>{console.log('hello')}, {name: 'Tinku'}, [10,20,[30,40,[50,['last']]]]];
console.log(arr3);


// ex2
console.log(arr3[5]());


// ex3
console.log(arr3[6].name);


// ex4
console.log(arr3[7]);


// ex5
console.log(arr3[7][2][2][1]);







// methods of Array

a = [10,20,30,40]

console.log(a);
// a.push('hello');
// a.pop();
// a.shift();
// a.unshift('zero_index');
// a.indexOf(40)
// a.at(3)
// a.push('hello')
// a.push('hello')
console.log(a);


// ignore the methods that modifies original array

//slice: copy elements from an array
console.log(a.slice(0,1));

console.log(a);
//splice: modifies, removes(have to pass 2nd arg),  updates(have to pass 3rd arg)
console.log(a.splice(0,4,'hello'));
console.log(a);

// ==============================