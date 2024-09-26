// 26 - sept - 2024

// 6. object creation using constructor function with the help of this keyword
function CreateObj(name, add, contact){
    this.name = name,
    this.add = add,
    this.contact = contact
}

let obj1 = new CreateObj('Putin', "Russia", 9876543654)
let obj2 = new CreateObj('Netanyahu', "Israel", 9870003654)
console.log(obj1);
console.log(obj2);





// Manual binding
// treating other object as the current obj

let superHeroe = {
    name : 'Spiderman',
    gf : 'Merry',
    auntName: 'May',
    uncleName: 'Ben',
};
function myFunc(){
    console.log(superHero.name);
}
myFunc()




// what if I want to treat the superHeroe object as the current object for myFunc()
// and instead of superHeroe.name, I want to use this.name inside myFunc fn
// so, we will use 3 ways:
    // 1. by using .call()
    // 2. by using .apply()
    // 3. by using .bind()


let superHero = {
    name : 'Spiderman',
    gf : 'Merry',
    auntName: 'May',
    uncleName: 'Ben',
};
function myFunc(){
    console.log(this);
    console.log(this.name);
}
// allow our fn to treat other obj as its own object
myFunc.call(superHero)  // .call is making obj as current object for myFunc function
console.log(superHero);





let superHero0 = {
    name : 'Spiderman',
    gf : 'Merry',
    auntName: 'May',
    uncleName: 'Ben',
};
function myFunc(realname){
    console.log(this);
    console.log(this.name);
    this.realname = realname; // this line is making myFunc as a constructor fn
    console.log(this.realname);
}
// allow our fn to treat other obj as its own object
myFunc.call(superHero0, "Peter Parker")  // .call is making obj as current object for myFunc function
console.log(superHero0);






// using .apply()
let superHero1 = {
    name : 'Spiderman',
    gf : 'Merry',
    auntName: 'May',
    uncleName: 'Ben',
};
function myFunc(realname, add){
    console.log(realname, add);
}
myFunc.apply(superHero1, ["Peter Parker", 'New York'])  // arguments must be in array
// .apply is making obj as current object for myFunc function





// using .bind()
let superHero2 = {
    name : 'Spiderman',
    gf : 'Merry',
    auntName: 'May',
    uncleName: 'Ben',
};
function myFunc(realname, add){
    console.log(realname, add);
}
let binded_fn_returned = myFunc.bind(superHero2, "Peter Parker", 'New York') // automatically call nahi karta fn ka reference return hota hai
console.log(binded_fn_returned());
