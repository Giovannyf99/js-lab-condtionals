//! DO NOT REMOVE 
const prompt = require('prompt-sync')({ sigint: true });

/**
  Example usage to prompt a user: 
  const name = prompt('What is your name?');
  console.log(`Hey there ${name}`);

  All user input will be read as a String, so in order to treat user input as numbers, you’ll need to convert the input:
*/

//1.

// const number = prompt('what is your favorite number?');
// if (number == 0) {
//   console.log("you entered zero")
// } else if (number > 0) {
//   console.log("you entered a positive number")
// } else {
//   console.log("you entered a negative number")
// }
// console.log(`${number}`); 

//2.Write a program that prompts the user for a number and determines if it is even or odd.

// const number = prompt("pick a number: ")
// if(number % 2 == 0){
//   console.log("you entered a even number")
// } else if (number % 3 >0){
//   console.log("you entered a odd");
// }

//3. Write a program that prompts the user for a letter and determines if it is a vowel or a consonant.

// const letter = prompt("pick a letter")

// if (letter == 'a' || letter == 'A' || letter == 'e' || letter == 'E' || letter == 'i' || letter == 'I' || letter == 'o' || letter == 'O' || letter == 'u' || letter == 'U') {
//   console.log("you entered a vowel")
// } else {
//   console.log('you entered a constonant.')
// }

//4. Write a program that prompts the user for a number and checks if it is between 1 and 10 (inclusive).

// const number = prompt('pick a number')

// if (number > 0 && number << 11){
//   console.log('correct')
// } else {
//   console.log('false')
// }

//5.Write a program that prompts the user for a number and checks if it is between 50 and 100 (inclusive).

// const number = prompt('pick a number')
// if (number > 49 && number < 100){
//   console.log("correct")
// } else {
//   console.log ("false")
// }



// //6.Write a program that prompts the user for a password and checks if it is correct (password should be "password123").

// const password = prompt('what is your password?')

// if (password == "password123"){
//   console.log("password123")
// } else {
//   console.log('NO!!!!')
// }



//7.Write a program that prompts the user for a number and checks if it is a multiple of 3.

// const number = prompt('pick a number, this is life or death')
// if (number % 3 == 0){
//   console.log('LETSSSS GOOOOOO')
// } else {
//   console.log('oof, its time')
// }



//8.Write a program that prompts the user for their age and checks if they are eligible for a senior discount (age 65 and up).
 
// const age = prompt('How old are you?')

// if (age >= 65){
//   console.log('sorry and heres your discount')
// }else {
//   console.log('no')
// }







//9.Write a program that prompts the user for their birth year and determines if they are a millennial (born between 1981 and 1996).

// const birthYear = prompt('what year are you born in?')

// if (birthYear >= 1981 && birthYear <=1996){
//   console.log('You are a milenial')
// } else {
//   console.log('You are not a millenial')
// }



//10.Write a program that prompts the user for their age and checks if they are a teenager (ages 13-19).

// const age = prompt('how old are you?')

// if(age >12 && age <20){
//   console.log('teenager')
// } else {
//   console.log('Congrats')
// }


//11.Write a program that prompts the user for their favorite color and prints a message based on their choice.

// const color = prompt('what is your favorite color')

// if(color == 'blue'){
//   console.log('good job, you got it right')
// } else {
//   console.log('no')
// }