// default export (use this only)
let plane = 'Fighter jet'
let plane2 = 'Cargo Plane'
export default {plane, plane2}


// named export
export let planeNamedExp = 'Fighter jet'



// DEFAULT export:
    // array is not recommended
    // we have to use default keyword
    // can write default keyword only once
    // if we want to export multiple variables in default way, we can wrap these variables into an object and then we will export that object
    // when it is default export, while importing we can use any name
    // when it is default export, while importing we should NOT take { }
    // when we are exporting as default, default keyword should not be on the same line of variable declaration

// NAMED export
    // we should not use default keyword
    // can do named export multiple times
    // when it is named export, while importing we have to take same exported name
    // when it is named export, while importing we must take { }
    // when we are exporting using named export, export keyword should be on the same line of variable declaration

// hw give example for each point