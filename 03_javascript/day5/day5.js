// 31 - Aug - 2024

console.log('holla');

// null: if we want to assign a varable a value intentionally
// undefined: if we declare a variable and try to access it without initialization

// NaN datatype


// js implicit typecast karta hai
console.log(10 - '10')



// print NaN using arithmetic operations

console.log('10years' - 10);    // NaN
console.log('hi' - 'hi');       // NaN
console.log(false/0);           // NaN
console.log(undefined - 10);    // NaN
console.log(Number(undefined)); // NaN
console.log(Number('10a'));     // NaN

// real world use of symbol?

a = 'hellojs'
b = 'hellojs'
console.log(a == b);        // true
console.log(a === b);       // true

// we can't get true for two different symbol()
a = Symbol('hellojs')
b = Symbol('hellojs')
console.log(a == b);        // false
console.log(a === b);       // false


// var let const

var a = 10
var a = 99
console.log('2015 se pehle allowed tha');

console.log('====================');
// var

    // declaration
        var a;
        console.log(a);
        
    
    // initialization
        var a;
        a = 10
        console.log(a);
    
    // declaration + Initialization
        var a = 10;
        console.log(a);

    // Re-declaration
        var red;
        var red;
        console.log(red);
        
    
    // Re-Initialization
        var rei = 10;
        rei = 10;
        console.log(rei);