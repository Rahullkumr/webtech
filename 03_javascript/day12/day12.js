// 10 - Sept - 2024



// **1. Repeated Call**  
// Write a function `repeatCall` that accepts a callback and a message string. The callback should call the provided message twice, returning the result as a single string.
// **Example:**  
// `repeatCall(callback, ‘Let’s go!’)`  
// `callback` should return: `”Let’s go! Let’s go!”`

let repeatCall = function (func, msg){
    console.log(func(msg));
}
let callback = (msg) => msg + ' ' + msg;

repeatCall(callback, "let's go!")





// **2. Simple Decision Maker**  
// Write a function `decideAction` that accepts a callback function and a string (action). The callback should return `”Approved”` if the action is `”proceed”`, and `”Denied”` otherwise.
// **Example:**  
// `decideAction(callback, ‘proceed’)`  
// `callback` should return: `”Approved”`

let decideAction = function (func, action){
    console.log(func(action));
}
let callback = (action) => action === 'proceed' ? 'Approved' : 'Denied';

decideAction(callback, 'proceed')





// **3. Repeated Message**  
// Write a function `repeatMessage` that accepts a callback and a message string. The callback should return the message repeated twice.
// **Example:**  
// `repeatMessage(callback, ‘Goodbye’)`  
// `callback` should return: `”Goodbye Goodbye”`

TODO:

let repeatMessage = function (func, msg){
    console.log(func(msg));    
}
let callback = (msg) => msg + ' ' + msg;
repeatMessage(callback, 'Goodbye')





// **4. Toggle Switch**  
// Write a function `toggleSwitch` that accepts a callback and a string (either `”on”` or `”off”`). The callback should return `”Switched on”` if the string is `”off”` and `”Switched off”` if the string is `”on”`.
// **Example:**  
// `toggleSwitch(callback, ‘off’)`  
// `callback` should return: `”Switched on”`

let toggleSwitch = function (func, str){
    console.log(func(str));
}
let callback = (str) => str === 'off' ? 'Switched on' : 'Switched off';
toggleSwitch(callback, 'off')





// **5. Yes or No Decision**  
// Write a function `askYesOrNo` that accepts a callback function and a response string (`”yes”` or `”no”`). The callback should return `”Confirmed”` for `”yes”` and `”Rejected”` for `”no”`.
// **Example:**  
// `askYesOrNo(callback, ‘yes’)`  
// `callback` should return: `”Confirmed”`

let askYesOrNo = function (func, response){
    console.log(func(response));  
}

let callback = (response) => response === 'yes' ? 'Confirmed' : 'Rejected';

askYesOrNo(callback, 'yes')





// **6. Reverse the Text**  
// Write a function `reverseText` that accepts a callback and a string. The callback should return the string reversed.
// **Example:**  
// `reverseText(callback, ‘world’)`  
// `callback` should return: `”dlrow”`

let reverseText = function (func, str){
    console.log(func(str));    
}
function callback(str){
    let rev_str = '';
    for(let i = str.length - 1; i >= 0; i--){
        rev_str += str[i];  
    }
    return rev_str;
}
reverseText(callback, 'world')





// **7. Personalized Farewell**  
// Write a function `createFarewell` that accepts a callback and a name string. The callback should return `”Goodbye, [name]!”` where `[name]` is replaced with the provided name.
// **Example:**  
// `createFarewell(callback, ‘Bob’)`  
// `callback` should return: `”Goodbye, Bob!”`

let createFarewell = function (func, name){
    console.log(func(name));  
}
let callback = (name) => `Goodbye ${name}!`;
createFarewell(callback, 'Bob')





// **8. Decision Logic**  
// Write a function `decisionMaker` that accepts a callback and a string (`”start”` or `”stop”`). The callback should return `”Starting…”` if the string is `”start”` and `”Stopping…”` if the string is `”stop”`.
// **Example:**  
// `decisionMaker(callback, ‘start’)`  
// `callback` should return: `”Starting…”`

let decisionMaker = function (func, str){
    console.log(func(str));  
}
let callback = (str) => str === 'start' ? 'Starting...' : 'Stopping...';
decisionMaker(callback, 'start')
