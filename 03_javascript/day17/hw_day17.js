// 1. Function Basics with Callback:Create a function called greetWithCallback that accepts a callback function as an argument. Inside this function, the callback should print “Hello World” to the console. Test it by passing a callback that does this job.

        // function greetWithCallback(cbf){
        //     cbf("Hello World")
        // }
        // function cbf(msg){
        //     console.log(msg);
        // }
        // greetWithCallback(cbf)



// 2. Function with Parameters and Callback:Write a function named addTwoNumbersWithCallback that accepts two numbers and a callback function. Inside addTwoNumbersWithCallback, call the callback with the sum of the two numbers as its argument. The callback should log this sum to the console.

        // function addTwoNumbersWithCallback(a,b,cbf){
        //     let total = a+b;
        //     cbf(total);
        // }
        // function cbf(val){
        //     console.log(`Sum is ${val}`);
        // }
        // addTwoNumbersWithCallback(5,6,cbf);



// 3. Function with Conditional Statement and Callback:Create a function called checkEvenOddWithCallback that accepts a number and a callback function. Use an if-else statement to check if the number is even or odd. Then, call the callback function with a message (“Even” or “Odd”) depending on the result.

        // function checkEvenOddWithCallback(n,cbf){
        //     if(n%2==0){cbf("Even");}
        //     else {cbf("Odd");}
        // }
        // function cbf(msg){
        //     console.log(msg);    
        // }
        // checkEvenOddWithCallback(29, cbf);



// 4. Loop Basics with Higher-Order Function:Write a higher-order function called loopAndExecute that accepts a loop limit and a callback function. Inside the function, use a for loop to iterate from 1 to the loop limit, and for each iteration, call the callback function with the current loop index.

        // function loopAndExecute(limit,cbf){
        //     for(let i=1; i <= limit; i++){
        //         cbf(i);
        //     }
        // }
        // function cbf(msg){
        //     console.log(msg);    
        // }
        // loopAndExecute(5, cbf);



// 5. While Loop with Callback:Create a function named whileLoopWithCallback that accepts a callback and a limit. Use a while loop that runs as long as a counter is less than the limit, and for each iteration, call the callback with the current counter value.

        // function whileLoopWithCallback(limit,cbf){
        //     let counter = 0;
        //     while(counter < limit){
        //         cbf(counter);
        //         counter++;
        //     }
        // }
        // function cbf(msg){
        //     console.log(msg);    
        // }
        // whileLoopWithCallback(5, cbf);



// 6. Do-While Loop with Callback:Write a function called doWhileLoopWithCallback that accepts a callback and a limit. Use a do-while loop to print numbers from 1 to the limit. In each iteration, call the callback function with the current loop value.

        // function doWhileLoopWithCallback(limit,cbf){
        //     let counter = 1;
        //     do{
        //         cbf(counter);
        //         counter++;
        //     }while(counter <= limit);
        // }
        // function cbf(msg){
        //     console.log(msg);    
        // }
        // doWhileLoopWithCallback(5, cbf);



// 7. Nested Loops with Callback:Create a higher-order function called nestedLoopCallback that accepts two limits and a callback. Inside this function, use two nested for loops to iterate over the numbers from 1 to each limit. For each pair of numbers from the loops, call the callback with both numbers.

        // function nestedLoopCallback(limit1, limit2, cbf){
        //     for(let i=1; i <= limit1; i++){
        //         for(let j=1; j <= limit2; j++){
        //             cbf(i,j)
        //         }
        //     }
        // }
        // function cbf(val1, val2){
        //     console.log(val1, val2);    
        // }
        // nestedLoopCallback(2, 3, cbf);



// 8. Conditional Statement with Higher-Order Function:Write a higher-order function called checkNumberWithCallback that accepts a number and two callback functions. One callback should handle positive numbers, the other should handle negative numbers. Inside the function, use an if-else statement to check if the number is positive or negative, and call the appropriate callback.

        // function checkNumberWithCallback(n, positive_cbf, negative_cbf){
        //     if(n >= 0){positive_cbf(n)}
        //     else{negative_cbf(n)}
        // }
        // function positive_cbf(val){console.log(`${val} is a positive number`);}
        // function negative_cbf(val){console.log(`${val} is a negative number`);}
        // checkNumberWithCallback(2, positive_cbf, negative_cbf);
        // checkNumberWithCallback(-18, positive_cbf, negative_cbf);



// 9. Switch Case with Callback:Implement a function named getDayOfWeekWithCallback that accepts a number from 1 to 7 and a callback function. Use a switch statement to determine the day of the week, and call the callback with the corresponding day (e.g., “Monday”, “Tuesday”).

        // function getDayOfWeekWithCallback(dayNo, cbf){
        //     let day;
        //     switch(dayNo){
        //         case 1: day = 'Monday'; break;
        //         case 2: day = 'Tuesday'; break;
        //         case 3: day = 'Wednesday'; break;
        //         case 4: day = 'Thursday'; break;
        //         case 5: day = 'Friday'; break;
        //         case 6: day = 'Saturday'; break;
        //         case 7: day = 'Sunday'; break;
        //     }
        //     cbf(day);
        // }
        // function cbf(val){console.log(`Day is: ${val}`);}
        // getDayOfWeekWithCallback(2, cbf);




// 10. Function with Return and Callback:Create a higher-order function called `multiplyWithCallback` that accepts two numbers and a callback. Multiply the two numbers inside the function, then call the callback with the result. The callback should print the result to the console.

        // function multiplyWithCallback(a, b, cbf){
        //     let pdt = a * b;    
        //     cbf(pdt);
        // }
        // function cbf(val){console.log(`Product is: ${val}`);}
        // multiplyWithCallback(2, 5, cbf);



// 11. Ternary Operator with Callback:Write a function named `checkEligibilityWithCallback` that accepts a person’s age and a callback function. Use a ternary operator to check if the person is eligible to vote (age ≥ 18). Call the callback with the message “Eligible” or “Not Eligible” based on the result.

        // function checkEligibilityWithCallback(age, cbf){
        //     let eligibleOrNot = age >= 18 ? "Eligible" : "Not Eligible";    
        //     cbf(eligibleOrNot);
        // }
        // function cbf(msg){console.log(`Eligibility: ${msg}`);}
        // checkEligibilityWithCallback(15, cbf);
        // checkEligibilityWithCallback(62, cbf);



// 12. Nested If-Else with Higher-Order Function:Create a function named `checkDivisibilityWithCallback` that accepts a number and two callback functions. Use `if-else` blocks to check if the number is divisible by both 3 and 5, only by 3, or only by 5. Call the appropriate callback based on the outcome.

        // function checkDivisibilityWithCallback(n, divByOne, divByBoth){
        //     if(n % 3 == 0 && n % 5 == 0){divByBoth(n)}
        //     else if(n % 3 == 0){divByOne(n,3)}
        //     else{divByOne(n,5)}
        // }
        // function divByOne(n,val){console.log(`${n} is Only divisible by: ${val}`);}
        // function divByBoth(n){console.log(`${n} is Divisible by both 3 and 5`);}
        // checkDivisibilityWithCallback(15, divByOne, divByBoth);
        // checkDivisibilityWithCallback(65, divByOne, divByBoth);
        // checkDivisibilityWithCallback(33, divByOne, divByBoth);



// 13. Loop with Break and Callback:Write a higher-order function called `forLoopWithBreakCallback` that accepts a loop limit and two callback functions. Use a `for` loop to iterate from 1 to the limit. If the loop reaches the number 5, call the second callback to break the loop, otherwise call the first callback for each iteration.

        // function forLoopWithBreakCallback(limit, cbf1, cbf2){
        //     for(let i = 1; i <= limit; i++){
        //         if(i === 5){
        //                 cbf2();
        //                 break;
        //         }
        //         else{ cbf1(i);}
        //     }
        // }
        // function cbf1(val){console.log(`${val}`);}
        // function cbf2(){console.log(`loop break`);}
        // forLoopWithBreakCallback(10, cbf1, cbf2);



// 14. Loop with Continue and Callback:Write a function named `forLoopWithContinueCallback` that accepts a loop limit and two callbacks. Use a `for` loop to print numbers from 1 to the limit, but skip the number 5 using the `continue` statement. Call the first callback for each number except 5, and the second callback when the number is 5.

        // function forLoopWithContinueCallback(limit, cbf1, cbf2){
        //         for(let i = 1; i <= limit; i++){
        //                 if(i === 5){
        //                         cbf2();
        //                         continue;
        //                 }
        //                 else{ cbf1(i);}
        //         }
        // }
        // function cbf1(val){console.log(`${val}`);}
        // function cbf2(){console.log(`loop skipped`);}
        // forLoopWithContinueCallback(10, cbf1, cbf2);



// 15. Function without Return but with Callback:Create a function called `printUpperCaseWithCallback` that accepts a string and a callback function. Inside the function, manually convert the string to uppercase (without string methods), and pass the result to the callback to print it.

        // function printUpperCaseWithCallback(str, cbf){
        //         let upperstr = '';
        //         for(let i = 0; i < str.length; i++){
        //                 let charcode = str.charCodeAt(i);
        //                 if(charcode >= 97 && charcode <= 122){
        //                         upperstr += String.fromCharCode(charcode - 32);
        //                 }else{
        //                         upperstr += str[i];
        //                 }
        //         }
        //         cbf(upperstr)
        // }
        // function cbf(msg){console.log(msg);}
        // printUpperCaseWithCallback('i am upper cased', cbf);



// 16. Recursive Function with Callback:Write a recursive function called `recursivePrintWithCallback` that prints numbers from 1 to 5, and for each number, it calls a callback function. Make sure to stop the recursion when you reach 5 by adding a base case.

        // function recursivePrintWithCallback(n,cbf){
        //         if(n > 5){return;}
        //         cbf(n);
        //         recursivePrintWithCallback(n + 1, cbf);
        // }
        // function cbf(val){console.log(val);}
        // recursivePrintWithCallback(1, cbf);



// 17. Conditional with Loops and Callback:Create a function called `fizzPrintWithCallback` that accepts a number and a callback. Print numbers from 1 up to the given number, but for multiples of 3, pass the string “Fizz” to the callback instead of the number.

        // function fizzPrintWithCallback(n,cbf){
        //         for(let i = 1; i <= n; i++){
        //                 if(i % 3 ===0 ){cbf("Fizz");}
        //                 else{cbf(i);}
        //         }
        // }
        // function cbf(msg){console.log(msg);}
        // fizzPrintWithCallback(10, cbf);



// 18. While with Break and Callback:Write a function called `whileLoopWithBreakCallback` that accepts a limit and two callback functions. Use a `while` loop to print numbers from 1 to the limit, but stop the loop at number 7 by calling the second callback. Call the first callback for each other number.

        // function whileLoopWithBreakCallback(limit,cbf1, cbf2){
        //         let i = 1;
        //         while(i <= limit){
        //                 if(i === 7){
        //                         cbf2();
        //                         break;
        //                 }else{cbf1(i)}
        //                 i++;
        //         }
        // }
        // function cbf1(msg){console.log(msg);}
        // function cbf2(){console.log('loop break');}
        // whileLoopWithBreakCallback(10, cbf1, cbf2);



// 19. Function with Default Parameters and Callback:Create a higher-order function called `multiplyWithDefaultAndCallback` that accepts two numbers and a callback. If the second number is not provided, use a default value of 2. Multiply the numbers and call the callback with the result.

        // function multiplyWithDefaultAndCallback(a, cbf, b = 2){
        //         // order of parameters matter because it is positioned parameter
        //         let pdt = a * b;
        //         cbf(pdt);        
        // }
        // function cbf(val){console.log(val);}
        // multiplyWithDefaultAndCallback(10, cbf, 15);
        // multiplyWithDefaultAndCallback(10, cbf);



// 20. Loop with Function Call and Callback:Write a function named `forLoopWithCallback` that takes a limit and a callback. Inside the function, use a `for` loop to iterate from 1 to the limit. For each iteration, call the callback function to print “Hello” or any other message.

        function forLoopWithCallback(limit, cbf){
                for(let i = 1; i <= limit; i++){cbf();}        
        }
        function cbf(){console.log('Hello, Hi, Bye Bye');}
        forLoopWithCallback(5, cbf);