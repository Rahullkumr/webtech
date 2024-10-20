let {body} = document

// ### DOM Manipulation Tasks:

// 1. **Change Background Color:**
//    - Create a button with a label like “Change Background”. Write a function that will change the background color of the entire page when this button is clicked. You can allow the user to choose a random color or pick a predefined color.

        // let btn1 = document.createElement('button');
        // btn1.innerHTML = `<button onclick="changebg()">Change Background</button>`; // innerHTML overwrites above btn1
        // body.append(btn1)
        // let changebg = ()=>{
        //     body.style.backgroundColor = 'teal'
        // }



// 2. **Text Update:**
//    - Add a paragraph element to your HTML with some initial text (e.g., “Click the button to change this text.”). Create a button labeled “Update Text”. Write a function that, when the button is clicked, changes the paragraph text to something else (e.g., “Text updated!”).

        // let str = 'Click the button to change this text.'
        // let p2 = document.createElement('p')
        // p2.innerHTML = str;
        // let btn2 = document.createElement('button')
        // btn2.innerHTML = `Update Text`;
        // btn2.onclick = ()=>{
        //     str = 'Text updated!';
        //     p2.innerHTML = str;
        // };
        // body.append(p2,btn2);



// 3. **Hide/Show Element:**
//    - Add a div with some content and a button labeled “Hide/Show”. Write a function that hides the div when the button is clicked for the first time, and shows it again when clicked the second time. Use a boolean or toggle to keep track of whether the div is visible or hidden.

        // let str = "lets play hide and seek";
        // var isHidden = false;
        // let div = document.createElement('div');
        // div.innerHTML = str;
        // let btn3 = document.createElement('button');
        // btn3.innerHTML = "Hide/Show";
        // btn3.onclick = ()=>{
        //     if(isHidden){
        //         isHidden = false;
        //         div.style.display = 'block';                              
        //     }else{
        //         isHidden = true;
        //         div.style.display = 'none';                              
        //     }
        // };
        // body.append(div,btn3); 



// 4. **Add New Item to List:**
//    - Create an input field and an empty unordered list (ul) in your HTML. Below the input, add a button labeled “Add Item”. Write a function that, when the button is clicked, adds the value from the input field as a new list item (li) to the unordered list. Make sure to clear the input field after adding the item.

        // let input = document.createElement('input');
        // let btn4 = document.createElement('button');
        // btn4.innerHTML = 'Add Item';
        // let unordered_empty_list = document.createElement('ul');
        // btn4.onclick = ()=>{
        //     let val = input.value;
        //     unordered_empty_list.innerHTML = `<li>${val}</li>`;
        // };
        // body.append(input, btn4,unordered_empty_list); 



// 5. **Remove Last Item from List:**
//    - Add an unordered list with a few predefined list items (li). Below the list, add a button labeled “Remove Last Item”. Write a function that, when the button is clicked, removes the last item from the list. Make sure the function works even when the list is empty (i.e., it shouldn’t break).




// 6. **Toggle Class:**
//    - Create a div element with some initial style, like a background color or border. Add a button labeled “Toggle Style”. Write a function that toggles a specific class on the div when the button is clicked. The class should change the div’s appearance (e.g., different color or border style).

// 7. **Change Image Source:**
//    - Add an image element with an initial source. Below the image, add two buttons labeled “Change to Image 1” and “Change to Image 2”. Write functions for both buttons that change the image’s source to a different URL when clicked.

// 8. **Create Elements Dynamically:**
//    - Add a button labeled “Add Paragraph”. Write a function that, when the button is clicked, creates a new paragraph element and appends it to the document body. The paragraph should contain some text (e.g., “This is a new paragraph!”).

// 9. **Disable Button After Click:**
//    - Add a button labeled “Click Me”. Write a function that disables the button (i.e., makes it unclickable) after it’s been clicked once. You can change the button’s text to indicate that it’s been disabled (e.g., “Button Disabled”).

// 10. **Display Input Text:**
//     - Create an input field and a div below it. Write a function that, as the user types into the input field, displays the same text in the div In real-time. This can be achieved by listening for the input event and updating the div’s inner text with the input’s current value.

// 11. **Change Text Color on Hover:**
//     - Add a paragraph element with some text. Write a function that changes the text color when the mouse hovers over the paragraph and reverts the color back to its original state when the mouse leaves.

// 12. **Display Current Date and Time:**
//     - Add a button labeled “Show Date and Time”. Write a function that, when the button is clicked, displays the current date and time in a div below the button. You can use JavaScript’s `Date` object to get the current date and time.

// 13. **Remove Element:**
//     - Add a div or any other element with some content. Below it, add a button labeled “Remove Element”. Write a function that removes the element from the DOM when the button is clicked.

// 14. **Count Button Clicks:**
//     - Create a button labeled “Click Counter”. Below the button, add a paragraph that displays the number of times the button has been clicked (e.g., “Button clicked 0 times”). Write a function that increments the count every time the button is clicked.

// 15. **Display Window Width:**
//     - Add a div that will display the current window width. Write a function that updates the width in the div whenever the user resizes the window. You can listen for the `resize` event and use `window.innerWidth` to get the current width.

// 16. **Add Class to All Elements:**
//     - Add a few paragraph elements to the page. Below them, add a button labeled “Add Class”. Write a function that, when the button is clicked, adds a specific class (e.g., a class that changes the text color) to all the paragraph elements on the page.

// 17. **Input Validation:**
//     - Create a form with a text input field and a submit button. Write a function that validates the input field when the form is submitted. If the field is empty, display an error message below the form and prevent the form from being submitted.

// 18. **Change Font Size:**
//     - Add a paragraph with some text. Below the paragraph, add a button labeled “Increase Font Size”. Write a function that increases the font size of the paragraph by 2px every time the button is clicked.



// ### Event Handling Tasks:

// 21. **Button Hover Event:**
//     - Add a button labeled “Hover Me”. Write a function that changes the background color of the button when the user hovers over it and reverts the color when the mouse leaves.

// 22. **Form Submission Event:**
//     - Create a simple form with an input field and a submit button. Write a function that prevents the form from being submitted if the input is empty, and display an error message below the form. Use `event.preventDefault()` to prevent form submission.

// 23. **Keyboard Event:**
//     - Add an input field. Write a function that listens for the “Enter” key and triggers an alert when it’s pressed inside the input field. Make sure the function only works for the “Enter” key.

// 24. **Double-Click Event:**
//     - Create a div with some content and write a function that changes its background color when it’s double-clicked. The background should change every time a double-click event occurs.

// 25. **Key Press Counter:**
//     - Add an input field and a paragraph that displays the number of times a key has been pressed inside the input field. Write a function that increments the count with every keypress and updates the paragraph.

// 26. **Mouse Movement Tracker:**
//     - Write a function that tracks the mouse’s position on the page in real-time and displays the current x and y coordinates in a div. Update the coordinates every time the mouse moves.

// 27. **Right-Click Event:**
//     - Add an element to your page, like a button or div. Write a function that triggers an alert when the user right-clicks on the element. Use the `contextmenu` event to handle the right-click.

// 28. **Mouse Over Event:**
//     - Create a div or paragraph with some text. Write a function that changes its text or color when the mouse is moved over the element and changes it back when the mouse leaves.

// 29. **Focus Event:**
//     - Add an input field. Write a function that changes the input field’s border color when it gains focus and reverts the color when it loses focus. Use the `focus` and `blur` events for this.