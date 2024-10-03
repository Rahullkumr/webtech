// 03 - Oct - 2024


// reduce()

// Three changes:
    // 1. accumulator is the first argument, remaining same i.e val,i,wholeArr
    // 2. doesn't return array
    // 3. can pass initial value

// Array.reduce(accumulator, value, index, wholeArray);

let arr = [10,20,30,40]
let sumOfArray = arr.reduce((acc, val)=>{
    return acc += val
}, 1000);       // like let sum = 1000 (initial value)

console.log(sumOfArray);


// find()       //vvi
// arr.find(val, ind, wholeArr)

// 1. returns only one value
// 2. breaks the loop once the condition is true

let data = [
    {"id":1,"first_name":"Jenilee","email":"jbraham0@salon.com","gender":"Bigender"},
    {"id":2,"first_name":"Martha","email":"mtibbotts1@reverbnation.com","gender":"Female"},
    {"id":3,"first_name":"Hilda","email":"hyewen2@vistaprint.com","gender":"Female"},
    {"id":4,"first_name":"Robenia","email":"rcrofts3@symantec.com","gender":"Female"},
    {"id":5,"first_name":"Fransisco","email":"fomahony4@bravesites.com","gender":"Bigender"},
    {"id":6,"first_name":"Anne-marie","email":"abraemer5@state.gov","gender":"Female"},
    {"id":7,"first_name":"Leland","email":"lroscher6@ft.com","gender":"Female"},
    {"id":8,"first_name":"Hubey","email":"hchessum7@csmonitor.com","gender":"Male"},
    {"id":9,"first_name":"Celia","email":"cglazyer8@weebly.com","gender":"Genderfluid"},
    {"id":10,"first_name":"Kendall","email":"kvasishchev9@sun.com","gender":"Male"}];

let cartItems = []
let selectedPdt = data.find((val)=>{
    return val.id == 9;
});
cartItems.push(selectedPdt)
console.log(cartItems);


