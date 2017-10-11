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
function stringToNumber() {
  const string = "20";
  const b = parseInt(string);
  return console.log("This string is converted " + b);
}
stringToNumber();


//Use method typeof to convert number to string
function type() {
  const entry = NaN;
  const whatDataType = typeof(entry);
  return console.log("This is a " + whatDataType);
}
type();

//create function add that takes 2 numbers
//return the sum of the two numbers passed
function add(num1, num2){
  return num1 + num2;
}

add(1, 2);

// Create a function that only runs if both things are true
// Use the and && operator, that runs if both are true

function areBothTrue (x, y){
  if (x === 15 && y === 20) {
    return "Show me the $$$ dude!";
  }
}
areBothTrue(15,20)


// Create a function that only runs if 1 of 2 things are true
// Use the 'or' || operator, that runs when one of two things are true

function isItTrue (d, e) {
  if (d === 10 || e === 15) {
    return 'One of two is true!';
  }
}

isItTrue(10,90);

//Create a function with 3 parameters. Create an if statement within the function with the 'not equal value/type' operator which will only run if arguements passed are not true
function compare(d, e, f) {
  if (d !== e && e !== f) {
    return 'It is alive';
  } else {
    return 'It is dead';
  }
}

compare(1,2,3);

// Write a JavaScript program to display the current day and time.
// Write a JavaScript program to convert a number to a string.
// Write a JavaScript program to convert a string to the number.
// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
// Null
// Undefined
// Number
// NaN
// String
// Write a JavaScript program that adds 2 numbers together.
// Write a JavaScript program that runs only when 2 things are true.
// Write a JavaScript program that runs when 1 of 2 things are true.
// Write a JavaScript program that runs when both things are not true.
