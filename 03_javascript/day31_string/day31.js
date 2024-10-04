// 04 - Oct - 2024

// string and its methods



let str = 'Bahubali'

// reverse the string: mentos way😎
rev_str = str.split("").reverse().join('');
console.log(rev_str);   //'ilabuhaB'

// reverse the string: normal way
let split_str = str.split('');
let reversed_splited_str = split_str.reverse()
let final_str = reversed_splited_str.join('')
console.log(final_str);     //'ilabuhaB'





// reverse without inbuilt methods
s = 'hello'
rs = ''
for(let i = s.length-1; i >= 0; i--){
    rs += s[i]
}
console.log(rs);





// padStart() and padEnd()
let num = '9098'
let newNo = num.padStart(12, '*').padEnd(20, '*')
console.log(newNo); //'********9098********'





// trim()
let removeMySpaces = '    oh no   '
console.log(removeMySpaces.trim());         // 'oh no'
console.log(removeMySpaces.trimStart());    // 'oh no   '
console.log(removeMySpaces.trimEnd());      // '    oh no'





// upper case and lower case
alpha = 'javaScript'
console.log(alpha.toUpperCase());
console.log(alpha.toLowerCase());





// replace()
console.log(alpha.replace('a',' '));    // replaces only first occurance

b = 'Bahubali'
console.log(b.replace('Bahub','Khaug'));    // replaces only first occurance
