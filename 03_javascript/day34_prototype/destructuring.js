console.log('destructuring\n========');

let backpack = {
    item1: 'water bottle',
    item2: 'tiffin',
    item3: 'camera',
    item4: 'torch',
    item5: 'pant',
    item6: 'charger'
}

console.log(item6); // Cannot access 'item6' before initialization

// destructuring the properties of an object so that they can be accessed outside of the object
// It is the process of extracting out the values from arrays and objects

let {item2, item4, item6} = backpack

console.log(item6);



// why do we need destructuring?
// because it is used hugely in React.



console.log(window);
console.log(document);
// entire window obj is destructured

