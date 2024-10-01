// 01 - Oct - 2024



// 1. **Extract Object Keys**  
//    You are given an object representing a student:
//    ```javascript
//    const student = {
//      name: 'Alice',
//      age: 22,
//      major: 'Computer Science',
//      GPA: 3.8
//    };
//    ```
//    Extract all the keys from the `student` object and print each key along with its corresponding value.



// const student = {
//     name: 'Alice',
//     age: 22,
//     major: 'Computer Science',
//     GPA: 3.8
// };  
// const keys = Object.keys(student) 
// console.log(keys);
// keys.forEach((key)=>{
//     console.log(`${key} : ${student[key]}`);
    
// });
// ==========================================================================





// 2. **Retrieve Object Values**  
//    Given the following object representing a movie:
//    ```javascript
//    const movie = {
//      title: 'Inception',
//      director: 'Christopher Nolan',
//      releaseYear: 2010,
//      rating: 8.8
//    };
//    ```
//    Retrieve all the values from this `movie` object and print them in a structured format.



// const movie = {
//     title: 'Inception',
//     director: 'Christopher Nolan',
//     releaseYear: 2010,
//     rating: 8.8
// };
// values = Object.values(movie);
// console.log(values);
// values.forEach(value => {
//     console.log(`${value} : ${movie[value]}`);
// });
// ==========================================================================





// 3. **Convert Object to Key-Value Pairs**  
//    You have an object that represents a book:
//    ```javascript
//    const book = {
//      title: '1984',
//      author: 'George Orwell',
//      genre: 'Dystopian'
//    };
//    ```
//    Convert the object into an array of key-value pairs and print each pair in the format: `key: value`.



// const book = {
//     title: '1984',
//     author: 'George Orwell',
//     genre: 'Dystopian'
// };
// keyValueArray = Object.entries(book);
// console.log(keyValueArray);
// keyValueArray.forEach((element)=>{
//     console.log(`${element[0]} : ${element[1]}`);
// });
// ==========================================================================





// 4. **Recreate Object from Key-Value Pairs**  
//    You are given an array of key-value pairs:
//    ```javascript
//    const keyValueArray = [
//      ['name', 'Charlie'],
//      ['age', 30],
//      ['job', 'Engineer']
//    ];
//    ```
//    Convert this array back into an object and print the newly created object.



// const keyValueArray = [
//     ['name', 'Charlie'],
//     ['age', 30],
//     ['job', 'Engineer']
// ];
// obj = Object.fromEntries(keyValueArray)
// console.log(obj);
// ==========================================================================





// 5. **Merge Two Objects**  
//    Given the following two objects:
//    ```javascript
//    const contactInfo = {
//      phone: '123-456-7890',
//      email: 'john.doe@example.com'
//    };



//    const address = {
//      street: '123 Main St',
//      city: 'Anytown',
//      state: 'CA'
//    };
//    ```
//    Merge these two objects into a single `userInfo` object and print the merged object.
// ==========================================================================





// 6. **Shallow Copy with Object.assign**  
//    Create a nested object representing a `person`:
//    ```javascript
//    const person = {
//      name: 'John',
//      age: 35,
//      address: {
//        city: 'New York',
//        country: 'USA'
//      }
//    };
//    ```
//    Create a shallow copy of the `person` object. Modify the `city` property in the copied object and check the original object.



// const person = {
//     name: 'John',
//     age: 35,
//     address: {
//     city: 'New York',
//     country: 'USA'
//     }
// };
// let sc = Object.assign(person);
// sc.address.city = 'Pune';
// console.log(person);
// console.log(sc);
// ==========================================================================





// 7. **Deep Copy using JSON Methods**  
//    Given the same nested `person` object, create a deep copy of it. Modify the `address` in the deep copy and verify the original object remains unchanged.
// const person = {
//     name: 'John',
//     age: 35,
//     address: {
//         city: 'New York',
//         country: 'USA'
//     }
// };



// let dc = JSON.parse(JSON.stringify(person));
// dc.address.city = "Pune";
// console.log(person);
// console.log(dc);
// ==========================================================================





// 8. **Object Literal Syntax**  
//    Create an object using object literal syntax to represent a smartphone:
//    Print each property of the `smartphone` object.



// let smartphone = {
//     brand: 'Apple',
//     model: 'iPhone 13',
//     color: 'black'
// }
// keys = Object.keys(smartphone)
// keys.forEach(key => {
//     console.log(`${key}: ${smartphone[key]}`);    
// });
// ==========================================================================





// 9. **Factory Function**  
//    Write a factory function `createCar(make, model, year)` that returns an object representing a car. The object should have a `drive` method that logs the car's make and model. Use the factory function to create 3 different car objects and call the `drive()` method on each.



// function createCar(make, model, year){
//     return {
//         make,
//         model,
//         year,
//         drive(){
//             console.log(`${make} --> ${model}`);            
//         }
//     }
// }
// let car1 = createCar('Tesla', 'Model S', 2022);
// let car2 = createCar('Tata', 'Nano', 2015);
// let car3 = createCar('Hyundai', 'Alpha', 2025);
// car1.drive()
// car2.drive()
// car2.drive()
// ==========================================================================





// 10. **Constructor Function**  
//    Define a constructor function `User(name, email)` that initializes a user object with `name` and `email` properties. Add a method `greet()` to the constructor that logs a greeting message using the user’s name. Create multiple instances of `User` and call the `greet()` method on them.



// function User(name, email){
//     this.name = name;
//     this.email = email;
//     this.greet = ()=>{
//         console.log(`Hello ${this.name}`);        
//     };
// }
// let user1 = new User('Mohit', 'tihor@gmail.com')
// let user2 = new User('Punit', 'pun@gmail.com')
// user1.greet()
// user2.greet()
// ==========================================================================





// 11. **Creating Objects with Classes**
//    Create a class `Dog` with a constructor that takes `name` and `breed` as parameters. Add a method `bark()` that logs the dog's name followed by "is barking". Instantiate the class with 2 dogs and make them bark.



// class Dog{
//     constructor(name, breed){
//         this.name = name;
//         this.breed = breed;
//     }
//     bark(){
//         console.log(`${this.name} is barking`);
//     }
// }
// let dog = new Dog('Tommy', 'Labrador');
// dog.bark();
// ==========================================================================





// 12. **Using Constructor Function**  
//    Create a constructor function `Movie(title, director)` that initializes a movie object. Add a prototype method `getDetails()` that returns a string with the title and director. Create a few movie instances and call `getDetails()` on them.



// function Movie(title, director){
//     this.getDetails = ()=>{
//         return `${title}, ${director}`;
//     }
// }
// let movie1 = new Movie('Mulashi Pattern', 'Pravin Tarade')
// console.log(movie1.getDetails());
// ==========================================================================





// 13. **Assign Default Values to an Object**  
//    You have an object with missing properties:
//    ```javascript
//    const userProfile = {
//      name: 'Alice',
//      age: 25
//    };
//    ```
//    Merge the object with default values `{age: 18, city: 'Unknown'}` and print the updated object.


// const userProfile = {
//     name: 'Alice',
//     age: 25
// };
// let defaultValues = {
//     age: 18,
//     city: "Pune"
// }
// let updatedProfile = Object.assign({},userProfile,defaultValues)
// console.log(updatedProfile);
// ==========================================================================





// 14. **Cloning an Object with Object.assign**  
//    Create an object `laptop` with properties like `brand`, `model`, and `price`. Clone the `laptop` object into a new object `newLaptop`. Modify `newLaptop` and ensure the changes don’t affect the original `laptop`.


// let laptop = {
//     brand: 'Asus',
//     model: 'Swift Go',
//     price: 45000
// }
// const newLaptop = Object.assign({}, laptop);
// newLaptop.price = 55000;
// console.log('Original: ', laptop);
// console.log("New: ", newLaptop);
// ==========================================================================





// 15. **Adding Methods to an Existing Object with Object.assign**  
//    You have a `robot` object:
//    ```javascript
//    const robot = {
//      name: 'Robo'
//    };
//    ```
//    Add two new methods to the `robot` object: `greet()` and `performTask()`. The `greet` method should log the robot's name, and `performTask` should log a generic task message.



// const robot = {
//     name: 'Robo'
// };
// Object.assign(robot, {
//     greet(){
//         console.log('Hello, I am '+this.name);        
//     },
//     performTask(){
//         console.log(this.name+" is performing a task");        
//     }
// });
// robot.greet();
// robot.performTask();
// ==========================================================================





// 16. **Iterating through Object Properties using Object.entries**  
//    Given the following object:
//    ```javascript
//    const movie = {
//      title: 'The Matrix',
//      director: 'Wachowskis',
//      year: 1999
//    };
//    ```
//    Iterate through the object and log each key-value pair in the format: `key: value`.



// const movie = {
//     title: 'The Matrix',
//     director: 'Wachowskis',
//     year: 1999
// };
// arr = Object.entries(movie);
// arr.forEach((val)=>{
//     console.log(`${val[0]} : ${val[1]}`);    
// });
// ==========================================================================





// 17. **Dynamic Access to Object Keys**  
//    Write a function `getProperty(obj, key)` that takes an object and a key as arguments. Check if the key exists in the object. If it exists, return the value of the key; otherwise, return `"Key not found"`.



function getProperty(obj, key){
    return key in obj ? obj[key] : `key not found`;
}
let user = {
    name: 'Prince',
    age: 28
}
console.log(getProperty(user, 'name'));
console.log(getProperty(user, 'country'));