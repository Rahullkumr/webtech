// 16 - Sept - 2024


// asked in class:
    // closure
    // lexical scoping
    // first class fn or first citizen fn
// make a habit to give default parameters





// print vowels in given string

// let str = 'JavaScript is fun'
// console.log(str);

// let findVowels = (val)=>{
//     let temp = '';
//     for(let i=0; i < str.length; i++){
//         if(val[i] == 'a' ||val[i] == 'e' ||val[i] == 'i' ||val[i] == 'o' ||val[i] == 'u'){
//             temp += val[i] 
//         }
//     }
//     console.log(temp);            
// }
// findVowels(str);





// user input table

// let n = prompt('enter any number')
// let printTable = (num)=>{
//     for(let i=1; i <= 10; i++){
//         console.log(`${num} * ${i} = ${num * i}`);
//     }
// }
// printTable(n)





// count characters in string without using inbuilt fn

let s = prompt('enter a string')
let countLength = (str)=>{
    let i = 0
    while(str[i] != undefined){
        i++;
    }
    console.log('length of string is: '+i);
}
countLength(s)





// some extra works
console.log(10 / 0);            // infinity
console.log(10 / '0');          // infinity

console.log('10' + + '10');     // 1010
console.log('10' + 10);         // priority goes to concatenation, not addition in case of +


n = '10'
console.log(n);                 // string
console.log(+n);                // Number; implicit typecast
console.log('1234hello');       // NaN
