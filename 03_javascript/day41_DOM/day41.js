// 18 - oct - 2024


// get elements by tagname:
    let heading = document.getElementsByTagName('h1')
    console.log(heading);

    let inp = document.getElementsByTagName('input')
    console.log(inp);  // [input.userInput, input.userInput, input.userInput, input.userInput, input]

    inp[0].title = 'Input 1';
    inp[1].style.backgroundColor = 'red';

    // inp.forEach((val, ind)=>{
    //     val[ind].style.backgroundColor = 'green'
    // }); 
    // we can't use forEach() because 'inp' looks like array but it is an Object

    for(let i = 0; i < inp.length; i++){
        inp[i].style.backgroundColor = 'green';
    }





// ==============================================================
// get elements by class name: 

    let userInput = document.getElementsByClassName('userInput');
    for(let i = 0; i < userInput.length; i++){
        userInput[i].style.backgroundColor = 'magenta'
    }





// ============================================================
// get elements by using querySelector:
    // best (can use . for class and # for id)

    let qs = document.querySelector('.userInput')
    console.log(qs); 

    let qsall = document.querySelectorAll('.userInput')
    console.log(qsall);





// ============================================================
// set a new attribute to a html tag:

    let myDiv = document.querySelector('div');
    console.log(myDiv);
    myDiv.setAttribute('class', 'myDivClass'); 
    console.log(myDiv);



// make the input tag disabled
    let disable_me = document.querySelector('input')
    disable_me.setAttribute('disabled', '')



// remove the attribute from input
    myDiv.removeAttribute('class');
    console.log(myDiv);





// ============================================================
// add html tag using JS

    let create_a_span = document.createElement('span');
    console.log(create_a_span);

    create_a_span.setAttribute('class', 'spanUsingJS');


// how to add text in above created 'span' and show it in html file

    // 1. get the body tag
    // 2. give the content to span
    // 3. inject the span inside the body tag


    // 3 ways to get body tag:
        let body_using_querySelector = document.querySelector('body');
        let body_using_direct = document.body;
        let {body} = document;  // use this 

        console.log(body_using_querySelector);
        console.log(body_using_direct);
        console.log(body);

    create_a_span.textContent = 'This text is from JS file';
    body.append(create_a_span);


// hw myntra navbar using js only
// html file should contain only script tag