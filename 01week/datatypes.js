'use strict';

//Use methods Date and and toLocaleString to produce date and time
function dateTime() {
  const d = new Date();
  const t = d.toLocaleString();
  return console.log("The current date and time is " + t);
}
dateTime();

//Use method toString to convert number to string
function numberToString() {
  const num = 20;
  const n = num.toString();
  return console.log("This little number is converted " + n);
}
numberToString();


//Use method parseInt to convert a number to a string.
// function stringToNumber() {
//   const string = "20";
//   const b = parseInt(string);
//   return console.log("This string is converted " + b);
// }
// stringToNumber();

const stringToNumber=(x)=>{
return parseInt(x)
}
stringToNumber('17')
stringToNumber('8')
stringToNumber('hello')

//Use method typeof to convert number to string
function type() {
  const entry = NaN;
  const whatDataType = typeof(entry);
  return console.log("This is a " + whatDataType);
}
type();

//create function add that takes 2 numbers
//return the sum of the two numbers passed
function add(num1, num2) {
  return num1 + num2,
    console.log('line 41');
}
add(1, 2);

// Create a function that only runs if both things are true
// Use the and && operator, that runs if both are true
//if arguement 1 evaluates to true and arguement 2 evaluates to true, then run the code block

function areBothTrue(x, y) {
  if (x && y) {
    return "Show me the $$$ dude!";
  }
}
areBothTrue(15, 20);


// Create a function that only runs if 1 of 2 things are true
// Use the 'or' || operator, that runs when one of two things are true

function isItTrue(d, e) {
  if (d || e) {
    return 'One of two is true!';
  }
}

isItTrue(10, 4);

//Write a JavaScript program that runs when both things are not true.
function compare(d, e) {
  if (!d && !e) {
    return 'both are false'
}

compare(1, 2);
