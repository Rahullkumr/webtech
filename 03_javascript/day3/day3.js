// 29 - Aug - 2024

console.log('i am external file')
console.log('external file has most priority')

// variable declaration
var int = 10
var char = 'c'
var str = "string"
var float = 5.6
var bool = true
var long = 876543218765432
console.log(int)
console.log(char)
console.log(str)
console.log(float)
console.log(bool)
console.log(long)

// Tokens

// keywords                => if else
// identifier              => allowed identifiers ($(template literal), _)
// literals                => ⬇️
// operators               => ==, ===(strictly comparison i.e datatype+value), typeof, Number(int, float, double, long)
// punctuators/separators  => [] {} () `(backticks) '' " :: : ; , 

// literals
    // 1. primitive 
        // - Number, boolean, string, null, undefined, bigint, NaN, symbol
        // eg of bigint: 99999999999999n

    // 2. non primitive
        // - array, objects, functions

// console.log(Boolean(0))          // false
// console.log(Boolean(1))          // true
// console.log(Boolean(34))         // true
// console.log(Boolean(null))       // false
// console.log(Boolean(undefined))  // false
// console.log(Boolean(''))         // false
// console.log(Boolean(' '))        // true; kuch to hai, hawa hai

// DECLARING STRINGS 

    var str1 = 'using single quote'
    var str2 = "using double quote"
    var str3 =  `using backticks`
    console.log(str1, str2, str3)
    console.log(`'inside single quote' and "inside double quote" done using template literal(backticks)`)
    console.log(typeof str3)

// magic of backtics(`` template literal) (string interpolation)
    a = 500
    console.log(`This is like formating string in python, value of a = ${a}`)