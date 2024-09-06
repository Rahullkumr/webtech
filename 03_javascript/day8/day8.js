// 04 - Sept - 2024


// iife = imediate invoke function expression (mujhe rok k dikhao)
    // every js file is iife
    // iife can be called only once because there is no name to call it later
    // it gets called automatically 
    // where to use: to achieve automatic tasks like accept cookies
    // syntax: (()=>{})();  // ; is must

(()=>{
    console.log('\niife executed');    
})();



// addition using iife
((a,b)=>{
    console.log(`Sum of ${a} and ${b} = ${a+b}`);
})(5,6);



// print user input using iife
(()=>{
    // let name = prompt("enter your name")
    console.log(`Your entered string is ${name}`);
})();



// how to get mem address in js? ============> not possible

console.log("==========================");








// higher order fn (hof) and call back fn (cbf)
    // hof: the fn which is accepting another fn as a parameter
    // cbf: the fn which is being passed as an argument to another fn
// hof and cbf are interdependent

let func1 = (func2Parameter)=>{
    console.log('hof executed');
    func2Parameter()
}

let func2 = ()=>{
    console.log('cbf executed');
}
func1(func2); // func1 ==> hof and func2 ==> cbf because it is being passed as argument







// check
let kuchtohai = ()=>{
    return 99
}

console.log(kuchtohai);
console.log(kuchtohai());
