
// setTimeout() and setInterval()



// 5000 ms = 5 sec



// syntax:
        // settimeout(functn, time);
        // setInterval(functn, time);

        

// ===================================

// print 'hello world' after 5 sec
setTimeout(()=>{
    console.log('hello world');
}, 5000);



// =======================================
// count till 5 sec and print that count each second

let count = 0
let myInterval = setInterval(()=>{
    count++;
    console.log(count);
    if(count == 5){
        clearInterval(myInterval)
    }
}, 1000);



// use that css clock time using this 'setInterval()' method
