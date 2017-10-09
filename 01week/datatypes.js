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
  return console.log("This number is converted " + n);
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

//Assign a value variables a and b.
//return the sum of the two variables
function adding() {
  const a = 10;
  const b = 5;
  return a + b;
}
adding();

//Assign values to 3 variables
//Use the 'and' && operator, that only runs when 2 things are true
const x = 10;
const y = 5;
const z = 1;
if (x > y && y > z) {
  console.log("Show me the $$$ dude!");
}

//Assign values to 3 variables
//Use the 'or' || operator, that runs when one of two things are true
const a = 11;
const b = 5;
const c = 1;
if (x > y || y > z) {
  console.log("Show me the $$$ either way!");
}


//Assign values to 3 variables
//Use the 'not equal value/type' operator, that will only run if both things are not true
const d = 1;
const e = 5;
const f = 10;
if (d !== e && e !== f) {
  console.log("It's alive");
}
