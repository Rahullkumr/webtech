// 23 - sept - 2024

// merge multiple objects into main object

let merge_into_me = {
    rollNo : 100,
}

let merge_me1 = {
    name: 'Rahul'
}
let merge_me2 = {
    yop: 2024
}
let merge_me3 = {
    email: 'Rahul@g.com'
}

// merging
// this will merge all into merge_into_me variable
let final_merge = Object.assign(merge_into_me, merge_me1,merge_me2,merge_me3)
console.log(merge_into_me);


// but what if I want the merged data to be stored in final_merge1 variable
let final_merge1 = Object.assign({}, merge_me1,merge_me2,merge_me3)
console.log(final_merge);






// shallow copy

let person

// deep copy: the changes in new object should not affect main object

// js object vs json object
    // in json keys must be in string

// api consists of array of objects, objects are in json format


// ==================================================
// normal js object (keys not in string)
let obj = {
    name : 'Tinku',
    age : 23,
    mno : 9798295265
}

// convert normal js object into JSON 
let jsonObj = JSON.stringify(obj);
console.log("I am json object: ",jsonObj);


// convert JSON into normal js object 
let normalJSObj = JSON.parse(jsonObj)
console.log(normalJSObj);


console.log('=======================');

normalJSObj.address = 'Pune'    // DEEP COPY
console.log(jsonObj);
console.log(normalJSObj);






