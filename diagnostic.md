# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each

string - text read as text, stored as character values within quotations
boolean - truthy or falsy values, ex. true or false
null - no value
number - numbers! -1 0, 2.7
undefined - value does not have a defnition

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d;` and explain what they do.

C = 7 because 5+2=7 (reading left to right for addition); c+d is assigning the value of 7 to c;


## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

x is set as 4 initially, but its value changes to the value of y, which is 3. Y is then changed to the value of 10, but x stays at the value of 3 because it is not reassigned.


## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

the first weather is being assigned the value of "sunny". The second weather has a strict equality with weather, meaning that whatever the value of weather is, it equals "sunny" and also has the same primitive type (string in this case)


## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer === 'SeCrEt') {
   console.log("You guessed it!");
   break;
  }
}
```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
