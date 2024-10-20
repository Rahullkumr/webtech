
// ========================= event handling ====================================

// what is it?
    // The process of responding to events, such as user interactions (clicks, key presses, mouse movements) or changes in the browser environment (loading of a page, resizing of the window). 

    // This is done using event listeners, which are functions that handle the events.

        // - Event: An action or occurrence recognized by the browser (e.g., clicking a button, submitting a form).

        // - Event Listener: A function that "listens" for a specific event on an element and executes code when that event occurs.

        // - Event Object: An object that provides information about the event (e.g., the element that triggered it, the type of event).




// way1: change bgcolor using 'onclick()' from html file (as attribute)
let changebg_using_onclick = ()=>{
    body.style.backgroundColor = 'red';
    console.log('background color changed');
}



// way2: change bgcolor using 'onclick' from JS file (DOM manipulation)
let changebgbutton = document.getElementById('button2')
let changebg = ()=>{
    body.style.backgroundColor = 'teal';
    console.log('background color changed');
};
changebgbutton.onclick = changebg;





// way3: change bgcolor using 'onclick' JS file (EventListener)
let changebgbutton = document.getElementById('button3')
let changebgxxx = ()=>{
    body.style.backgroundColor = 'green';
    console.log('background color changed');
};
changebgbutton.onclick = changebg;





// addeventhandling
let str = ''
let heading = document.querySelector('h1')
let input = document.querySelector('input')
let btn = document.querySelector('button')

input.addEventListener('input', (e)=>{
    if (e.data !== null) {
        str += e.data
        console.log(str);
        heading.innerText = str  
    }  else{
        // do it remove kachra 
    }
});