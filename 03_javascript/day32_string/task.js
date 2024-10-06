// 1. **Task**: Write a function that accepts a full name (first and last name) as input and returns the total number of characters in the name, excluding spaces. The function should also return a message like: "Your name has X characters."

let fullName = name => `Your name has ${name.length - 1} characters`;
console.log(fullName("Rahul Kumar"));



// 2. **Task**: Write a function that accepts a string and returns the third character in that string. If the string is too short (less than three characters), return a message like: "The string is too short."

let return3rdChar = (str)=>{
    if(str.length < 3){
        return "The string is too short.";
    }else{
        return str[2];
    }
}
console.log(return3rdChar('JavaScript'));



// 3. **Task**: Write a function that takes a string and returns the Unicode value of the character in the middle of the string. If the string has an even number of characters, return the Unicode value of the character just before the middle.

let returnUnicode = (str)=>{
    if(str.length % 2 == 0){
        let mid = str.length/2;
        return str.charCodeAt(mid-1);
    }else{
        let mid = str.length/2 - 0.5;
        return str.charCodeAt(mid);
    }
}
console.log(returnUnicode('JavaScript'));     // 83 (S)
console.log(returnUnicode('Hello'));          // 108 (l)



// 4. **Task**: Create a function that checks if a given file name starts with "Report" (case-sensitive). If it does, return a message like: "This is a report file." If not, return: "This is not a report file."

let fun = (file)=>{    
    if(file.startsWith('Report')){
        return "This is a report file.";
    }else{
        return `This is not a report file.`;
    }
}
console.log(fun('Report.txt'));
console.log(fun('graphs.csv'));



// 5. **Task**: Write a function that accepts a string and checks if it ends with ".jpg". If it does, return: "This is an image file." Otherwise, return: "This is not an image file."

function func(str){    
    if(str.endsWith('.jpg')){
        return "This is an image file."
    }else{
        return "This is not an image file."
    }
}
console.log(func('profile.jpg'));
console.log(func('hello'));



// 6. **Task**: Write a function that checks if the word "password" is included in a user's input string. If it is found, return: "Your input contains a forbidden word." Otherwise, return: "Input accepted."

let func = (str)=>{
    if(str.includes('password')){
        return "Your input contains a forbidden word.";
    }else{
        return "Input accepted.";
    }
}
console.log(func('enter your password'));



// 7. **Task**: Write a function that searches a paragraph for the first appearance of the word "important" and returns the position (index) of that word. If the word isn't found, return a message like: "The word 'important' is not in the paragraph."

let func = (para)=>{    
    if(para.split(' ').includes('important')){
        return `Present at: ${para.split(' ').indexOf('important')}`;
    }else{
        return "The word 'important' is not in the paragraph.";
    }
}
console.log(func('This is a paragraph having the word important'));     // 'Present at: 7'



// 8. **Task**: Create a function that takes a sentence and replaces all instances of the word "sad" with "happy." Return the updated sentence.

let func = sent => sent.replaceAll('sad', 'happy');
console.log(func('Today I saw a sad person and asked the reason for his sadness'));



// 9. **Task**: Write a function that takes a long string of text and replaces all occurrences of the word "mistake" with "correction." It should replace every instance found and return the updated text.

let func = str => str.replaceAll('mistake', 'correction');
let str = 'The essay was full of mistakes. Every line has a mistake, even the heading contained mistakes';
console.log(func(str));



// 10. **Task**: Write a function that extracts the first 10 characters from a given string and returns them. If the string has fewer than 10 characters, return the entire string.

let func = (str)=>{
    if(str.length < 10){    return str; }
    else{       return str.slice(0,10); }
}
console.log(func('JavaScript is fun'));     // 'JavaScript'
console.log(func('C is fun'));     // 'C is fun'



// 11. **Task**: Write a function that takes a sentence and splits it into an array of individual words. Then, return the array and display each word on a new line.

let func = sent => sent.split(' ');
returned_words = func('This func takes a sentence and splits it into an array');
returned_words.forEach((element)=>{
    console.log(element);
});



// 12. **Task**: Create a function that converts a sentence into lowercase letters and returns the new version. For example, the input "HELLO WORLD" should be converted to "hello world."

let func = str => str.toLowerCase();
console.log(func('HELLO WORLD'));



// 13. **Task**: Write a function that converts all the characters in a string to uppercase and returns the updated string. If the input is "good morning", the output should be "GOOD MORNING."

let func = str => str.toUpperCase();
console.log(func('good morning'));



// 14. **Task**: Write a function that accepts a number and converts it into a string. For example, if the number is 123, the output should be the string "123". The function should return the string with a message like: "The number has been converted to a string."

let func = (num) => {
    console.log(String(num));       // '123'
    return `The number has been converted to a string`;
};
console.log(func(123));



// 15. **Task**: Write a function that removes extra spaces from the start and end of a string. For example, if the input is "  hello world  ", the output should be "hello world". The function should return a message like: "Extra spaces have been removed."

let removeSpaces = (str) => {
    console.log(str.trim());     // 'hello world'
    return "Extra spaces have been removed.";
};
console.log(removeSpaces("  hello world  "));



// 16. **Task**: Create a function that accepts a string with extra spaces at the start and trims only the leading spaces. For example, the input "  learn JavaScript" should return "learn JavaScript", with a message: "Leading spaces have been removed."

let removeLeadingSpaces = (str) => {
    console.log(str.trimStart());     // 'learn JavaScript'
    return "Leading spaces have been removed.";
};
console.log(removeLeadingSpaces("  learn JavaScript"));



// 17. **Task**: Write a function that takes a string and trims off any trailing spaces. If the input is "coding is fun   ", it should return "coding is fun" with a message: "Trailing spaces have been removed."

let removeTrailingSpaces = (str) => {
    console.log(str.trimEnd());     // 'coding is fun'
    return "Trailing spaces have been removed.";
};
console.log(removeTrailingSpaces("coding is fun   "));



// 18. **Task**: Write a function that takes a string and checks whether it starts with an uppercase letter. If the first letter is capitalized, return a message like: "The string starts with an uppercase letter." Otherwise, return: "The string starts with a lowercase letter."

let func = (str)=>{
    if(str[0].toUpperCase() === str[0]){
        return "The string starts with an uppercase letter.";
    }else{
        return "The string starts with a lowercase letter.";
    }
}
console.log(func('Hello'));



// 19. **Task**: Write a function that accepts a sentence and converts only the first letter of the sentence to uppercase, while the rest of the letters are converted to lowercase. For example, "hello WORLD" should become "Hello world." Return the updated sentence with a message.

let converter = (str)=>{
    new_str = str[0].toUpperCase() + str.slice(1).toLowerCase();
    return `Updated sentence is: ${new_str}`;
}
console.log(converter("hello WORLD"));      // 'Updated sentence is: Hello world'



// 20. **Task**: Write a function that takes a sentence and counts how many spaces are in it. The function should return the total number of spaces with a message like: "There are X spaces in the sentence."

let spaceCounter = (sent)=>{
    let count = 0
    for(let i=0; i < sent.length; i++){
        if(sent[i] == ' '){count++;}
    }
    return `There are ${count} spaces in the sentence.`;
}
console.log(spaceCounter('How many spaces are there?'));
