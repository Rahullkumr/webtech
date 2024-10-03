
// qns based on map()

// ### Task 1: Double the Numbers
// Write a function that takes an array of numbers and returns a new array with each number doubled.

// **Input:** `[1, 2, 3, 4, 5]`  
// **Output:** `[2, 4, 6, 8, 10]`

        input = [1, 2, 3, 4, 5]
        console.log(input);
        let rValue = input.map(value => value*2);
        console.log(rValue);
// ---

// ### Task 2: Convert Temperatures
// Given an array of temperatures in Celsius, use `map()` to convert them to Fahrenheit.

// **Formula:** `F = (C × 9/5) + 32`  
// **Input:** `[0, 10, 20, 30]`  
// **Output:** `[32, 50, 68, 86]`

        // input = [0, 10, 20, 30]
        // console.log(input);
        // let rValue = input.map(c => ((c*9/5)+32));
        // console.log(rValue);
// ---

// ### Task 3: Add 'Hello' to Each Name
// You have an array of names. Use `map()` to return a new array where each name is prefixed with "Hello".

// **Input:** `["Alice", "Bob", "Charlie"]`  
// **Output:** `["Hello Alice", "Hello Bob", "Hello Charlie"]`

        // input = ["Alice", "Bob", "Charlie"];
        // console.log(input);
        // let rValue = input.map(name => `Hello ${name}`);
        // console.log(rValue);
        
        // // using forEach()
        // a = []
        // let x = input.forEach((val)=>{
        //     a.push(`Hello ${val}`);
        // });
        // console.log(a);
        
// ---

// ### Task 4: Extract Property Values
// You have an array of objects representing users. Use `map()` to return an array of just the usernames.

// **Input:** `[{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }]`  
// **Output:** `["Alice", "Bob"]`

        // input = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }];
        // console.log(input);
        // let rValue = input.map(value=> value.name);
        // console.log(rValue);
// ---

// ### Task 5: Square the Numbers
// Write a function that squares each number in an array and returns the new array using `map()`.

// **Input:** `[2, 3, 4]`  
// **Output:** `[4, 9, 16]`

        // input = [2, 3, 4];
        // console.log(input);
        // let rValue = input.map(val => val*val);
        // console.log(rValue);
// ---

// ### Task 6: Create HTML List Items
// Given an array of product names, use `map()` to return a new array of HTML `<li>` elements for each product.

// **Input:** `["Apples", "Oranges", "Bananas"]`  
// **Output:** `["<li>Apples</li>", "<li>Oranges</li>", "<li>Bananas</li>"]`

        // input = ["Apples", "Oranges", "Bananas"]
        // rArr = input.map((element)=>{
        //   return `<li>${element}</li>`
        // });
        // console.log(rArr)
// ---

// ### Task 7: Add Tax to Prices
// You have an array of product prices. Use `map()` to return a new array where each price includes 15% tax.

// **Input:** `[100, 200, 300]`  
// **Output:** `[115, 230, 345]`

        // input = [100, 200, 300]
        // rArr = input.map((element)=>{
        //   return element + (0.15*element)
        // });
        // console.log(rArr)
// ---


// ### Task 8: Convert Strings to Numbers
// You have an array of strings representing numbers. Use `map()` to convert them into actual numbers.

// **Input:** `["1", "2", "3"]`  
// **Output:** `[1, 2, 3]`
        input = ["1", "2", "3"]
        rArr = input.map((element)=>{
        return Number(element)
        });
        console.log(rArr)