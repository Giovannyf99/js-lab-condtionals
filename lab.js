//! DO NOT REMOVE 
const prompt = require('prompt-sync')({sigint: true});

/**
  Example usage to prompt a user: 
  const name = prompt('What is your name?');
  console.log(`Hey there ${name}`);

  All user input will be read as a String, so in order to treat user input as numbers, you’ll need to convert the input:
*/

const number = prompt('what is your favorite number?')
if(number == 0){
  console.log("you entered zero")
} else if(number > 0){
  console.log("you entered a positive number")
} else(number < 0){
  console.log("you entered a negative number")
}
console.log(`${number}`)



