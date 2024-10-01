// 06 - Sept - 2024

// different ways to show message on console

console.log('hello')
console.error('hello')
console.warn('hello')

window.console.log('again hello')
window.console.error('again hello')
window.console.warn('again hello')
window.console.log('again hello')



// writing into HTML file through JS file;
window.document.write('from js file')

console.log(window)
alert('alert box')



// trace the following code
// following code gets executed twice:
    // 1. for checking declarations (like let x; var obj; a; etc)
    // 2. for checking executions   (like x = 10; func(); etc)

let a = 10
let myFunc = ()=>{
    console.log('function called');
    console.log(a);
    console.log('function executed');
}
myFunc()
console.log(a)