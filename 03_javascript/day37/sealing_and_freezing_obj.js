// 14 - Oct - 2024


// ================== Object.seal() vs Object.freeze() =========================================

// sealing: can modify properties but not able to add/delete new properties (eg: balance)
// freeze: can't do any modification (eg: bank accNo)



const obj = {
    name: 'Putin',
    accNo: 123456432007,
    contact: 9800000007,
    balance: '$150 Billion'
}


// since we have used 'const', so we should not be able to modify the properties of the obj
// but it is not the case, CONST works differently with Non-primitive datatypes 

obj.gf = 'Kerolina';

// Why This Works:

// Mutable Properties: The properties of objects declared with const remain mutable, 
// so changes to the object's internal state (like updating or adding properties) are allowed. 
// Only the reference to the entire object cannot be reassigned to a different object.





// ================== Object.seal(obj) =========================================

// sealing: can modify properties but not able to add/delete new properties


Object.seal(obj)

obj.balance = "$200 Billion";
console.log(obj);

obj.add = "kremlin";
console.log(obj);

delete obj.balance;

console.log(obj);

console.log(Object.isSealed(obj));





// ================== Object.freeze(obj) =========================================

// freeze:  can't do any modification (object becomes immutable)
//          Once frozen, all properties become read-only.

Object.freeze(obj)
obj.moonMissions = 5
console.log(obj);               // see we can't modify a frozen object

console.log(Object.isFrozen(obj));