// 17 - oct - 2024

// ============== dom start ===========================

// console.log(document);

let heading = document.getElementById('heading');
// convention is to use same variable name as that of id name(present in html file).



console.log(typeof heading);    // object 
 
console.log(heading);




// ===========================

heading.title = 'html heading tag';
heading.style.backgroundColor = 'red';
heading.style.color = 'white';
heading.style.textAlign = 'center';


// Three reasons why id must be unique in html tag:

    // - when we do internal linking within a webpage, id must be unique to move to different sections
    // - in forms, we clicked on labels and input fields got activated, possible because of unique id
    // - so that it can be uniquely accessed by DOM 


// why should we write script tag at the bottom of body?

        // so as to let the html elements load first and let the browser know which tags are present.
        // Then apply DOM manipulations.
