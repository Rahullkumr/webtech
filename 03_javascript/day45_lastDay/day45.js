// 23 - oct - 2024 (LAST DAY OF JS)


// why do we write script tag at the bottom of <body>?
        // so that the ui elements load first and then JS performs tasks on them



// what will happen if I write <script> tag in the <head> and what are the problems faced?

    // - JS file will load before html elements
    // - problem: if we try to target an Element in the js file, then we will face some problems because ui elements are not loaded 
    // - solution
        // async attribute
            // <script src="./day45.js" async></script>         // tries to execute in asynchronous manner, jab jarurat parta h tub refer krta h
        // defer attribute
            // <script src="./day45.js" defer></script>         // try to execute both files (html and JS) simultaneously



// ==========================================================================================
//                          THREE PLACES TO WRITE <script> TAG
// ==========================================================================================


// 1.

    // when <script> is inside the <head>  
    let heading1 = document.querySelector('h1')
    console.log(heading1);       // null        //h1 (when ''defer' or 'async' is used)


// 2. 
    // when <script> is in between <head>  and <body> 
    let heading2 = document.querySelector('h1')
    console.log(heading2);       // null        //h1 (when ''defer' or 'async' is used)


// 3.
    // when <script> is at the bottom of <body>  (no effect of 'defer' or 'async' keywords)
    let heading3 = document.querySelector('h1')
    console.log(heading3);          // h1

