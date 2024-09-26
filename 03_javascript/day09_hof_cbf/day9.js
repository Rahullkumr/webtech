// 05 - Sept - 2024

console.log('holla\n\n');

let operation = (cbFunc,x,y)=>{
    cbFunc(x,y)
}
let add = (a,b)=>{
    console.log(`Addition of ${a} and ${b}`);
    console.log(a+b);
}
let sub = (a,b)=>{
    console.log(`Subtraction of ${a} and ${b}`);    
    console.log(a-b);
}
let mul = (a,b)=>{
    console.log(`Multiplication of ${a} and ${b}`);    
    console.log(a*b);
}
let div = (a,b)=>{
    console.log(`Division of ${a} and ${b}`);    
    console.log(a/b);
}
operation(add,10,20)
operation(sub,20,2)
operation(mul,85,25)
operation(div,10,20)
// ======================================================

// internal working of JS
