// 19 - oct - 2024

let {body} = document





// using innerHTML
let nav = document.createElement('nav')
nav.innerHTML = `
<div class='navDivs'>text1</div>
<div class='navDivs'>text2</div>
<div class='navDivs'>text3</div>
<div class='navDivs'>text4</div>
<div class='navDivs'>text5</div>
`;
body.append(nav)





// add content using 'textContent'
let div1 = document.createElement('div')
div1.textContent = '1st way to add text'
body.append(div1)





// add content using "innerText"
let nav2 = document.createElement('nav')
nav2.innerText = '2nd way to add text'
body.append(nav2)





// remove the h1 tag which is written in html file using JS
let quickly_remove_it = document.querySelector('#heading')
quickly_remove_it.remove();
