'use strict';



//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer =1;

while (answer !== '') {
  answer = ask("Pick a number!");
  if (answer>10) || (answer<1){
   console.log("Bin needs to be between 1 and 10!");
   break;
  }
}
