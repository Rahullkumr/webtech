// 09 - Oct - 2024


// =================== DESTRUCTURING array ===================

let backpack = ['water bottle','tiffin','camera','torch','pant','charger']

let [a,b,c,d,e,f] = backpack 
let [firstElement] = backpack 
console.log(f)
console.log(firstElement)



// Rest operator    ...     (remaining elements will be stored after destructuring)
// Spread operator  ...     (spreads the elements of arrays, strings and OBJECTS)

let [x, y, ...z] = backpack     // ...z ===> rest 
console.log(...z);              // camera torch pant charger
console.log(z);                 // ['camera', 'torch', 'pant', 'charger']
console.log(...backpack);       // ... ==> spread operator



let arr = ['water bottle','tiffin','camera','torch','pant','charger']

let func = (val1, val2, val3)=>{
    console.log(val3);
}

func(arr[0], arr[1], arr[2])
func(...arr)            // internal working ⬇️
func('water bottle','tiffin','camera','torch','pant','charger')





// =================== DESTRUCTURING string ===================

let str = "Javascript"

console.log(...str);                // J a v a s c r i p t

let [i1, i2, ...remaining] = str
console.log(i1);                 // J
console.log(...remaining);          // v a s c r i p t





// =================== DESTRUCTURING objects ===================

let new_backpack = {
    item1: 'water bottle',
    item2: 'tiffin',
    item3: 'camera',
    item4: 'torch',
    item5: 'pant',
    item6: 'charger'
}

// console.log(...new_backpack);       //  Spread syntax requires ...iterable[Symbol.iterator] to be a function

console.log(new_backpack);

console.log({...new_backpack});     // deep copy





// =================== DEEP COPY using ... (spread operator) ===================

let deepCopy = {...new_backpack}
console.log('DC Before updation: ',deepCopy);

deepCopy.name = 'Tinku';

console.log(new_backpack);
console.log('DC After updation: ',deepCopy);
