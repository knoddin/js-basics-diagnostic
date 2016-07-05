'use strict';
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer >=1 && answer <=10) {
   console.log("You guessed it!");
   break;
 }else{
   console.log('Please try a number between 1 and 10')
 }
}
