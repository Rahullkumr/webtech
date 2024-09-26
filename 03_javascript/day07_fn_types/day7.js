// 03 - Sept - 2024

// METHOD1: function as an expression

console.log('way1: fn as expression\n\n');

let add = function (a, b) {
  console.log(`Addition of ${a} and ${b} = ${a + b}`);
};
let sub = function (a, b) {
  console.log(`Subtraction of ${a} and ${b} = ${a - b}`);
};
let mul = function (a, b) {
  console.log(`Multiplication of ${a} and ${b} = ${a * b}`);
};
let div = function (a, b) {
  console.log(`Division of ${a} and ${b} = ${a / b}`);
};
add(5, 6);
sub(1, 2);
mul(12, 4);
div(0, 5);



// METHOD2: declaring function
// function without expression (LHS RHS nahi hai so expression nahi bol sakte)
console.log('\nway2: fn without expression\n\n');
function add1(a,b){
    console.log(`addition of ${a} and ${b} = ${a+b}`);
}
function sub1(a,b){
    console.log(`Subtraction of ${a} and ${b} = ${a-b}`);
}
function mul1(a,b){
    console.log(`Multiplication of ${a} and ${b} = ${a*b}`);
}
function div1(a,b){
    console.log(`Division of ${a} and ${b} = ${a/b}`);
}
add1(678,234)
sub1(678,234)
mul1(678,234)
div1(678,234)



// METHOD3: ARROW FUNCTION (used >95% of times)

let arrfn = ()=>{
    console.log('called arrfn and executed');
}
arrfn()

console.log('\nway3: ARROW FUNCTION\n\n');
// add using ARROW FUNCTION
let addtn = (x,y)=>{
    console.log(x+y);
}
// sub using ARROW FUNCTION
let subtn = (x,y)=>{
    console.log(x-y);
}
// mul using ARROW FUNCTION
let multi = (x,y)=>{
    console.log(x*y);
}
// div using ARROW FUNCTION
let divsn = (x,y)=>{
    console.log(x/y);
}
addtn(5,6)
subtn(5,6)
multi(5,6)
divsn(12,3)


// Task1
// "functin without expression"
function intro1(name,city,age){
    console.log(`My name is ${name}, I am from ${city} and my age is ${age}`);
}
// "functin with expression"
let intro2 = function(name,city,age){
    console.log(`My name is ${name}, I am from ${city} and my age is ${age}`);
}
// "ARROW FUNCTION"
let intro3 = (name,city,age) => {
    console.log(`My name is ${name}, I am from ${city} and my age is ${age}`);
}
intro1('Rahul', 'Pune', 24)
intro2('Bablu', 'Pimpri', 14)
intro3('Ganesh', 'Raipur', 90)



// Task2
let order = (name,size,addon,price)=>{
    console.log(`Here is your order Mr. ${name} of ${size} size with ${addon} and your bill amount is ₹ ${price}`)
    
}
order("Mahesh", "large", "coke", 300)



// TASK3
// fnname: animalsound(name, sound)
let animalsound = (name, sound)=>{
    console.log(`Animal: ${name}\nSound: ${sound}`);
}
animalsound('cat','mew')
animalsound('dog','bhawbhaw')
animalsound('cow','moooo')
animalsound('lion','roar')


// hw
// SWITCH CASE
let mood = prompt("How is your mood today") 

switch (mood) {
    case "happy":
        console.log("I am happy today😀");    
        break;

    case "sad":
        console.log("Don't worry everything will be fine😔");    
        break;
    
    case "angry":
        console.log("Control majnu control😡");    
        break;
    
    case "confused":
        console.log("I am confused what to do now😕");    
        break;  

    default:
        console.log("tell your mood in proper format");
        break;
}