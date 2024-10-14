// 10 - Oct - 2024


// =============================== Destructuring Tasks ===============================================




// 1.	**Basic Array Destructuring**: 
//    You have an array `const colors = ["red", "green", "blue"]`. Destructure this array to assign the first, second, and third values to separate variables, `firstColor`, `secondColor`, and `thirdColor`. Ensure that each variable holds the corresponding color.

            const colors = ["red", "green", "blue"]
            let [firstColor, secondColor, thirdColor] = colors
            console.log(firstColor, secondColor, thirdColor);       // red green blue



// 2.	**Skipping Elements During Destructuring**:  
//    Given the array `const numbers = [1, 2, 3, 4, 5]`, use destructuring to assign the first and third elements to separate variables. Skip the second element without creating a variable for it.

            const numbers = [1, 2, 3, 4, 5] 
            let [first, ,third] = numbers
            console.log(first, third);      // 1 3



// 3.	**Destructuring a Nested Array**:  
//    You have a nested array `const matrix = [[1, 2], [3, 4], [5, 6]]`. Destructure it to get the individual numbers from each sub-array. Assign each value (1, 2, 3, etc.) to its respective variable.

            const matrix = [[1, 2], [3, 4], [5, 6]]
            let [r1_e1, r1_e2] = matrix[0]
            let [r2_e1, r2_e2] = matrix[1]
            let [r3_e1, r3_e2] = matrix[2]
            console.log(r1_e1,r1_e2,r2_e1,r2_e2,r3_e1,r3_e2);       // 1 2 3 4 5 6

        // sir's way:
            const matrix = [[1, 2], [3, 4], [5, 6]]
            let [[a,b],[c,d],[e,l]] = matrix
            console.log(a,b,c,d,e,l)



// 4.	**Destructuring an Object**:  
//    Given the object `const user = { name: "Alice", age: 30, location: "Wonderland" }`, destructure it to extract the `name`, `age`, and `location` properties into separate variables. Ensure each variable contains the correct value.

            const user = { name: "Alice", age: 30, loc: "Wonderland" }
            let {name, age, loc} = user
            console.log(name, age, loc);        // Alice 30 Wonderland



// 5.	**Renaming During Object Destructuring**:  
//    You have an object `const point = { x: 10, y: 20 }`. Destructure the object to rename `x` as `horizontal` and `y` as `vertical`. Store the values in these renamed variables.

            const point = { x: 10, y: 20 }
            const {x:horizontal, y:vertical} = point
            console.log(horizontal, vertical);      // 10 20



// 6.	**Providing Default Values**:  
//    Given the object `const book = { title: "JavaScript Basics", year: 2021 }`, destructure it to extract `title`, `year`, and a non-existent `author` property. Assign a default value of "Unknown Author" to `author`.

            const book = { title: "JavaScript Basics", year: 2021 }
            let {title, year, author = 'Unknown Author'} = book
            console.log(title, year, author);       // JavaScript Basics 2021 Unknown Author



// 7.	**Destructuring Function Parameters**:  
//    Write a function `getProfile({ name, age, country })` that takes an object as an argument. Destructure the object to extract `name`, `age`, and `country` and use them inside the function.

            function getProfile({ name, age, country }){
                console.log(name, age, country);        // Netanyahu 50 Israel
            }
            let user = {name: 'Netanyahu', age: 50, country: "Israel"} 
            getProfile(user)



// 8.	**Destructuring Nested Objects**:  
//    Given the object `const person = { name: "Bob", details: { age: 25, address: { city: "New York", country: "USA" } } }`, destructure it to get the `name`, `age`, `city`, and `country` into separate variables.

            const person    = { name: "Bob", details: { age: 25, address: { city: "New York", country: "USA" } } }
            let {name}      = person
            let {age}       = person.details
            let {city}      = person.details.address
            let {country}   = person.details.address
            console.log(name, age, city, country);      // Bob 25 New York USA

        //=================== sir's way (copy paste keys) ===================

            const person = { name: 'Bob', details: { age: 25, address: { city: 'New York', country: 'USA' } } }
            let {name, details: {age, address: {city,country}}} = person
            console.log(name, age, city, country)


            
// 9.	**Rest Operator in Array Destructuring**:  
//    You have an array `const letters = ["a", "b", "c", "d", "e"]`. Use the rest operator in destructuring to extract the first letter into a variable, and the remaining letters into another array.

            const letters = ["a", "b", "c", "d", "e"]
            let [first, ...remaining] = letters
            console.log(first)          // a
            console.log(...remaining);  // b c d e



// 10.	**Rest Operator in Object Destructuring**:  
//     Given the object `const settings = { theme: "dark", notifications: true, layout: "grid", language: "en" }`, destructure it to extract the `theme` property and group the rest of the properties into a separate object.

            const settings = { theme: "dark", notifications: true, layout: "grid", language: "en" }
            let {theme, ...remaining} = settings
            console.log(theme, remaining);





// =============================== Spread Operator Tasks ===============================================



// 11.	**Copying an Array**:  
//     Given the array `const originalArray = [1, 2, 3]`, create a new array by copying `originalArray` using the spread operator. Modify the new array without affecting the original array.

            const originalArray = [1, 2, 3]
            const newArray = [...originalArray]
            newArray[0] = 99
            console.log(newArray);      // (3) [99, 2, 3]



// 12.	**Merging Two Arrays**:  
//     You have two arrays `const arr1 = [10, 20]` and `const arr2 = [30, 40]`. Merge these two arrays into one using the spread operator and store the result in a new variable.

            const arr1 = [10, 20]
            const arr2 = [30, 40]
            const mergedArray = [...arr1, ...arr2]
            console.log(mergedArray);       // (4) [10, 20, 30, 40]



// 13.	**Concatenating Arrays with Spread**:  
//     Given two arrays `const start = [1, 2]` and `const end = [9, 10]`, use the spread operator to concatenate the `start` array at the beginning of the `end` array.

            const start = [1, 2]
            const end = [...start, 9, 10]
            console.log(end);       // [1, 2, 9, 10]



// 14.	**Copying an Object Using Spread**:  
//     You have an object `const car = { make: "Toyota", model: "Corolla" }`. Use the spread operator to create a copy of this object. Modify the copy without affecting the original object.

            const car = { make: "Toyota", model: "Corolla" }
            const copiedCar = {...car}
            copiedCar.model = 'Fortuner'
            console.log(car);       // {make: 'Toyota', model: 'Corolla'}
            console.log(copiedCar); // {make: 'Toyota', model: 'Fortuner'}



// 15.	**Merging Objects with Spread**:  
//     Given two objects `const defaults = { volume: 50, brightness: 80 }` and `const userSettings = { volume: 30 }`, merge them into a new object. Ensure the `volume` from `userSettings` overwrites the one in `defaults`, while keeping the other properties from `defaults`.

            const defaults = { volume: 50, brightness: 80 }
            const userSettings = { volume: 30 }
            const mergedObj = {...defaults, ...userSettings}
            console.log(mergedObj);     // {volume: 30, brightness: 80}



// 16.	**Using Spread in Function Arguments**:  
//     Write a function `sum(a, b, c)` that takes three numbers as arguments. Call this function with an array `[5, 10, 15]` using the spread operator to pass the values as individual arguments.

            function sum(a, b, c) {
                console.log(a+b+c);     // 30
            }
            sum(...[5, 10, 15])



// 17.	**Rest Operator in Function Parameters**:  
//     Write a function `calculateTotal(…prices)` that accepts any number of price values as arguments. Inside the function, sum all the price values and return the total.

            function calculateTotal(...prices){
                total = 0
                prices.forEach((val) =>{
                    total += val
                });    
                return total;
            }
            let val = calculateTotal(1,2,3)
            console.log(val);       // 6

        //=================== sir's way ===================

            let priceValues = [100, 200, 300]
            let calculateTotal = (...priceValues)=>{      // rest Operator
                let sum = priceValues.reduce((acc, val)=>{
                    return acc += val 
                });
                console.log(sum)
            }
            calculateTotal(...priceValues)



// 18.	**Combining Rest and Spread**:  
//     You have a function `combineArrays(arr1, arr2)` that merges two arrays. Modify the function so that it can accept any number of arrays using the rest operator. Use the spread operator inside the function to merge the arrays.

            function combineArrays(...arrays){      // rest operator
                let mergedArray = []
                arrays.forEach((val)=>{
                    mergedArray.push(...val)        // spread operator
                })
                console.log(mergedArray);           // [1, 2, 8, 9, 11, 22]
            }
            combineArrays([1,2], [8,9], [11,22])

        //=================== sir's way ===================

            function combineArrays(...lotOfArrays){
                console.log(lotOfArrays)
            }
            combineArrays(...[1,2,3], ...[11, 22, 33] )



// 19.	**Array Destructuring with Spread**:  
//     Given the array `const nums = [1, 2, 3, 4, 5]`, destructure it to extract the first number into one variable and the rest of the numbers into another array using the spread operator.

            const nums = [1, 2, 3, 4, 5]
            let [first, ...rest] = nums
            let remaining = [...rest]
            console.log(first);         // 1
            console.log(remaining);     // [2, 3, 4, 5]



// 20.	**Rest and Spread in Object Destructuring**:  
//     You have an object `const config = { host: "localhost", port: 3000, user: "admin", password: "1234" }`. Destructure this object to extract `host` and `port` into separate variables, while using the rest operator to group the remaining properties into another object. Use the spread operator to modify this new object by changing the `user` property.

            const config = { host: "localhost", port: 3000, user: "admin", password: "1234" }
            let {host, port, ...remaining} = config
            let newObj = {...remaining, user: 'Designer'}
            console.log(host, port);        // localhost 3000
            console.log(newObj);            // {user: 'Designer', password: '1234'}

