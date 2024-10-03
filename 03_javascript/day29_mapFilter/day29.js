// 02 - Oct - 2024


// map filter reduce

let arr = [10,20,30,40,50,60,70,80];

let forEachReturnedValue = arr.forEach((element)=>{
        console.log(element);
        return element;     
});
console.log(arr);
console.log(forEachReturnedValue);

// in above code we can't return anything


// map(): in case of map(), we can return and original
let returnedValue = arr.map((element)=>{
    console.log(element);
    return element+100;     
});
console.log(arr);
console.log(returnedValue);










// filter():
// checks if the returned value is TRUE and returns the element on which the iteration is going on.

let ages = [34,44,10,12,18,54,23,19]
let newAges = ages.filter((val)=>{
    return val>=18;
});
console.log(newAges);


let data = [{"first_name":"Ebba","last_name":"Elfes","gender":"Female"},
    {"first_name":"Padraic","last_name":"Honywill","gender":"Male"},
    {"first_name":"Ruthi","last_name":"Talks","gender":"Female"},
    {"first_name":"Giulia","last_name":"Klas","gender":"Female"},
    {"first_name":"Louisa","last_name":"Weedon","gender":"Female"},
    {"first_name":"Laurene","last_name":"Novakovic","gender":"Female"},
    {"first_name":"Goraud","last_name":"Verdie","gender":"Male"},
    {"first_name":"Clayton","last_name":"Alldridge","gender":"Male"},
    {"first_name":"Fields","last_name":"Gurrado","gender":"Genderfluid"},
    {"first_name":"Emelita","last_name":"Filson","gender":"Female"},
    {"first_name":"Mattie","last_name":"Trousdell","gender":"Male"},
    {"first_name":"Sosanna","last_name":"Balden","gender":"Female"},
    {"first_name":"Linda","last_name":"Ellerey","gender":"Female"},
    {"first_name":"Finn","last_name":"Dring","gender":"Male"},
    {"first_name":"Abe","last_name":"Janaway","gender":"Male"},
    {"first_name":"Emmerich","last_name":"Schapero","gender":"Male"},
    {"first_name":"Kristos","last_name":"Cottell","gender":"Male"},
    {"first_name":"Marysa","last_name":"Parradice","gender":"Female"},
    {"first_name":"Amory","last_name":"Calafato","gender":"Genderfluid"},
    {"first_name":"Gordan","last_name":"Mc Pake","gender":"Male"}]

// hw: obj, map, filter

const maleArray = data.filter((val)=>{
    return val.gender == 'Male';
});
const femaleArray = data.filter((val)=>{
    return val.gender == 'Female';
});
console.log(maleArray);
console.log(femaleArray);
