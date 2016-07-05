# JS Basics Diagnostic

You should save your answers in this README.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

```md
Type | Examples
---- | ----------------
Number | `-0`, `NaN`, `Infinity`
String | `''`, `"The non-empty string."`
Boolean | `true`, `false`
null | `null`
undefined | `undefined`
```

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the
operators in the last line of this program `c = c + d;` and explain what they
do.

```js
c = 7
= reassigns the value of c
+ makes that value the addition of c and d
```

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

```js
x = 4
y = 3
x = 3
y = 10
The variables do not change, but their values do.
```

## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

```js
let weather;  // undefined
weather = "sunny"; // "sunny"
weather === "sunny"; // true
```

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
