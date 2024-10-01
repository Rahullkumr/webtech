// 21 - sept - 2024



console.log("========== creating object using factory method =================")

let Student = (name, stream, yop, marks, email, mno)=>{
    let obj = {
        // name : name,
        // stream : stream,
        // yop : yop,
        // marks : marks,
        // email : email,
        // mno : mno,

        // instead of using above way, we can do in following way: 
        // es6 feature (key and value will be same):
        name, 
        stream, 
        yop, 
        marks, 
        email, 
        mno,
    }
    return obj;
}
let Student1 = Student('Rahul', 'MCA', 2024, 78, 'ra@gmail.com', 9798295265);
let Student2 = Student('Manish', 'MCA', 2024, 86, 'mans@gmail.com', 9711155265);





// check property available or not in given object
console.log('stream' in Student1);





// convert obj into array
let obj = {
    name : 'Rahul',
    add : 'Pune'
}
obj_converted_to_array = Object.entries(obj)
console.log(obj_converted_to_array);





// convert array (the following format only) into object
    // format ➡️ [ [ 'name', 'Rahul' ], [ 'add', 'Pune' ] ]

ar = [ [ 'name', 'Rahul' ], [ 'add', 'Pune' ] ]
array_converted_into_obj = Object.fromEntries(ar)
console.log(array_converted_into_obj);





// converting a normal array into object

// normal_array = [1,2,3,4,5]       // not possible
normal_array = [['num1',1],['num2',2],['num3',3],['num4',4],['num5',5]]     // now possible 

converted_into_obj = Object.fromEntries(normal_array)
console.log(converted_into_obj);





// merge multiple objects into main object

let merge_into_me = {
    rollNo : 100,
}

let merge_me1 = {
    name: 'Rahul'
}
let merge_me2 = {
    yop: 2024
}
let merge_me3 = {
    email: 'Rahul@g.com'
}

// merging
final_merge = Object.assign(merge_into_me, merge_me1,merge_me2,merge_me3)
console.log(merge_into_me);
