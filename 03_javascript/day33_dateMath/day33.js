// 07 - Oct - 2024


// Date object

// we use "date.getTime()" to give uniqueness to ids

let date = new Date();
console.log(date.getDay());
console.log(date.getTime());



// weekday
switch (date.getDay()) {
    case 1:
        console.log('Mon');        
        break;
    case 2:
        console.log('Tue');        
        break;
    case 3:
        console.log('wed');        
        break;
    case 4:
        console.log('Thu');        
        break;
    case 5:
        console.log('Fri');        
        break;
    case 6:
        console.log('Sat');        
        break;
    case 0:         // be careful
        console.log('Sun');        
        break;
    default:
        break;
}



// months
switch (date.getMonth()) {
    case 0:
        console.log('Jan');
        break;
    case 1:
        console.log('feb');
        break;
    case 2:
        console.log('march');
        break;
    case 3:
        console.log('April');
        break;
    case 4:
        console.log('May');
        break;
    case 5:
        console.log('June');
        break;
    case 6:
        console.log('July');
        break;
    case 7:
        console.log('Aug');
        break;
    case 8:
        console.log('Sept');
        break;
    case 9:
        console.log('Oct');
        break;
    case 10:
        console.log('Nov');
        break;
    case 11:
        console.log('Dec');
        break;
    default:
        break;
}



console.log(date.getDate());            // today's date
console.log(date.getFullYear());        // current year
console.log(date.getHours());           // current time in hours
console.log(date.getMilliseconds());    // current time in milliseconds
console.log(date.getMinutes());         // current time in minutes



// ==========================================================================
// ==========================================================================



// Math object

console.log(Math.PI);
console.log(Math.ceil(10.55));
console.log(Math.floor(10.55));
console.log(Math.min(10.55, '10', -5));
console.log(Math.max(10.55, '10', -5));
console.log(Math.pow(11,2));


console.log(Math.random());



// way1: generate 4 digit otp
let otp = '';
for(let i=1; i<=4; i++){
    otp += Math.ceil(Math.random()*9); 
}
console.log(otp);


// way2: generate 4-digit otp
let otp1 = Math.floor(Math.random()*10000).toString();
if(otp.length == 4){
    console.log(otp1);
}else{
  console.log(otp1+1000);
}