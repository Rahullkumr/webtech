let {body} = document;

let navbar = document.createElement('nav');
navbar.setAttribute('class', 'navbar');
body.append(navbar)


// logo
let div1 = document.createElement('div')
div1.setAttribute('class', 'logo')
navbar.append(div1)




// menus
let div2 = document.createElement('div')
navbar.append(div2)

let menu1 = document.createElement('h4')
let menu2 = document.createElement('h4')
let menu3 = document.createElement('h4')
let menu4 = document.createElement('h4')
let menu5 = document.createElement('h4')
let menu6 = document.createElement('h4')
menu1.textContent = 'MEN'
menu2.textContent = 'WOMEN'
menu3.textContent = 'KIDS'
menu4.textContent = 'HOME & LIVING'
menu5.textContent = 'BEAUTY'
menu6.textContent = 'STUDIO'
div2.setAttribute('class', 'menus')
div2.append(menu1)
div2.append(menu2)
div2.append(menu3)
div2.append(menu4)
div2.append(menu5)
div2.append(menu6)



// searchbar
let div3 = document.createElement('div')
div3.setAttribute('class', 'search')
navbar.append(div3)
// let searchbar = document.createAttribute('input') // need attention

let search_icon = document.createElement('div')
let search_input = document.createElement('input')
search_icon.setAttribute('class', 'search_icon')
search_input.setAttribute('class', 'search_input')
div3.append(search_icon)
div3.append(search_input)





// other items
let div4 = document.createElement('div')
div4.setAttribute('class', 'extra')
navbar.append(div4)

let profile = document.createElement('h5') // need attention
let wishlist = document.createElement('h5') // need attention
let bag = document.createElement('h5') // need attention


profile.textContent = 'Profile'
wishlist.textContent = 'Wishlist'
bag.textContent = 'Bag' 

div4.append(profile)
div4.append(wishlist)
div4.append(bag)



// ==========================================================
let createH1 = document.createElement('h1');
createH1.textContent = 'Myntra Navbar using only JS'
body.append(createH1);