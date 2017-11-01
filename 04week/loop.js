// Create a new file called loops.js in the /04week folder of your workbook.
// Complete each of the following exercises.
// for loop
// Use a for loop to console.log each item in the array carsInReverse.
// for...in loop

const cars = ['ford', 'chevy', 'mazda', 'subaru'];
const carsInReverse = cars.reverse();
for (i=0; carsInReverse.length < 4; i++){
}
console.log(carsInReverse);


// Create an object (an array with keys and values) called persons with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"

let persons = {
firstName: "Jane",
lastName: "Doe",
birthDate: "Jan 5, 1925",
gender: "female",
};


// Use a for...in loop to console.log each key.
for (const prop in persons) {
  console.log(`persons.${prop} = ${persons}`);
}


// Then use a for...in loop and if state to console.log the value associated with the key birthDate.

function PersonProps() {
  this.birthDate = 'Jan 5, 1925';
}

PersonProps.prototype = obj;

const obj = new PersonProps();
for (const prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}


// Use a for loop to console.log the numbers 1 to 1000.
for (i=0; i<=1000; i++){
  console.log(i);
}


// do...while loop
var i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 1000);


// When is a for loop better than a while loop?
// For loops are for doing the same task over and over when you know how many times you'll have to repeat the loop.
//
// While loops are ideal when you have to loop, but you're not sure how many times you'll need to loop.
//
// // How is the readability of the code affected?
// For loops are generally considered to have better readability.
//
//
// // What is the difference between a for loop and a for...in loop?
// A for loop is a loop for arrays, a for in loop works with object.
//
//
// // What is the difference between a while loop and a do...while loop?
// A while loop, loops through a block of code while a specified condition is true a do/while will loop once regardless of if the condition is true. It checks for truthy the second loop through and check each time after.
