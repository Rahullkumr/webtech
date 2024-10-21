// browser storage = 10MB
// local storage 5MB + session storage 5MB



// SESSION storage:

    // session storage me objects not allowed
    // session: stored till the tab is open; 

    let password_using_sessionStorage = '1234'
    let username_using_sessionStorage = 'Rahul kumar'
    sessionStorage.setItem('meraPassword_using_sessionStorage', password_using_sessionStorage)
    sessionStorage.setItem('meraUsername_using_sessionStorage', username_using_sessionStorage)

    // you can see this in the browser
    // applications ===> session storage ===> local host
    // or
    console.log(sessionStorage);





// LOCAL storage:

    let password_using_localStorage = '1234'
    let username_using_localStorage = 'Rahul kumar'
    localStorage.setItem('meraPassword_using_localStorage', password_using_localStorage)
    localStorage.setItem('meraUsername_using_localStorage', username_using_localStorage)
    console.log(sessionStorage);



// getting item from storages
    let showme = localStorage.getItem('meraPassword_using_localStorage')
    console.log(showme);



// clearing storages
    localStorage.removeItem('meraUsername_using_localStorage')
    localStorage.clear()
    sessionStorage.clear()