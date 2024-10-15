// 15 - Oct - 2024


// explain promises in interview:

`
- promises are obj in js
- used to handle asynchronous tasks
- it was introduced to overcome the callback hell
- 3 states: pending, resolve and rejected

3 States: 
    Pending:    Promise will be in Pending state when it is neither resolved or rejected
    Resolve:    when your promise is fulfilled, it will be in resolve state. When the promise is resolved it will call the 'then block' and we can pass some arguments along with it.
    Reject:     when your promise is not fulfilled, it will be in reject state. When the promise is rejected it will call the 'catch block', and catch block can be used to handle the errors and exceptions

Note:
    Your promise can either be resolved or rejected at a time.

some Asynchronous tasks in JS will internally return the PROMISE, we just have to handle that promise using 'then' and 'catch' block
eg: fetch() will return the promise. We have to handle using 'then' and 'catch' block
`

// Promise is used to fetch api

// let p1 = new Promise((resolve, reject)=>{
//     let a  = 10;
//     if (a==10){
//         resolve()
//     }else{
//         reject()
//     }
// });
// p1.then(()=>{console.log("True. a = 10")})
// p1.catch(()=>{console.log("False. a != 10")})



// ==========================

// console.log('first');

// let p = new Promise((resolve, reject)=>{
//     a = 100000**1234
//     resolve(a);
//     // reject('something went wrong');
// });
// p.then((big)=>{
//     console.log('then block accessed by resolve ', big);    
// });
// p.catch((err)=>{
//     console.log('catch block accessed by reject', err);
// });
// console.log('Last');



// ==========================


// api fetching

// fetch() returns PROMISE

// let returnedPromise = fetch('https://api.github.com/users');
// console.log(returnedPromise);


// returnedPromise.then((val)=>{
//     console.log(val);
//     let data = val.json()
//     return data;    
// }).then((kuchToAyga)=>{
//     console.log(kuchToAyga)
// }).catch((err)=>{
//     console.log('something went wrong',err);    
// });



// in oneline

fetch('https://api.github.com/users').then((val)=>{
    return val.json()
}).then((kuchToAyga)=>{
    console.log(kuchToAyga);
}).catch(()=>{
    console.log(err);    
})
