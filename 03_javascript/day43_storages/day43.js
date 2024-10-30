// 21 - oct - 2024


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

    

// ==================================================================
//                          chatGpt
// ==================================================================


// Storing data (SESSION)
    sessionStorage.setItem('sessionId', '123456');

    // Retrieving data
    let sessionId = sessionStorage.getItem('sessionId');
    console.log(sessionId); // Output: '123456'

    // Removing a specific item
    sessionStorage.removeItem('sessionId');

    // Clearing all items
    sessionStorage.clear();



// Storing data (LOCAL)
    localStorage.setItem('username', 'john_doe');

    // Retrieving data
    let user = localStorage.getItem('username');
    console.log(user); // Output: 'john_doe'

    // Removing a specific item
    localStorage.removeItem('username');

    // Clearing all items
    localStorage.clear();


// COOKIES: 
    // Cookies are small pieces of data sent from a website and stored in the user's web browser. They can be used to persist data between page requests or across different browsing sessions.

    // Cookies have an expiration date, which determines how long the data is stored. They can be set to expire at the end of the session (when the browser is closed) or at a specific future time.

    // Cookies are sent to the server with each HTTP request, which makes them useful for server-side data handling.

    // CODE:
        // Setting a cookie with an expiration date
        document.cookie = "username=john_doe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";

        // Setting a cookie without an expiration date (will expire when the browser is closed)
        document.cookie = "theme=dark; path=/";


