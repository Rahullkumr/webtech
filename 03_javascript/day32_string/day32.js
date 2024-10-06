// 05 - Oct - 2024

// string and its methods


// slice()
let str = 'Katappa'
console.log(str.slice(2,7));        // 'tappa'
console.log(str.slice(-4, -2));    // 'tappa'
console.log(str.slice(-1));         // 'a'
console.log(str.slice(-1, str.length));    // 'a'



// substring()
console.log(str.substring(2, 7));    // 'tappa'
console.log(str.substring(-4,-2));    // 'tappa'
console.log(str.substring(str.length));    // 'a'



// includes() vvvvi
console.log(str.includes('pp'));    // true



// startsWidth()
console.log(str.startsWith('pp'));    //false

// endsWith()
console.log(str.endsWith('ppa'));

// at()
console.log(str.at(4));     // 'p'

// charAt()
console.log(str.charAt(4)); // 'p'

// charAt()
console.log(str.charCodeAt(4));     // ASCII value of p i.e 112


// remaining topics:
    // date 1
    // math1
    // destructuring 2
    // promise1
    // async await1
    // fetch1
    // prototype 1
    // event handling3
    // exception handling1
    // dom2

try{
    console.log(a);    
    throw new Error('a is not defined');
}
catch(err){
    console.log(err.message);
}
finally{
    console.log('always executed');
}