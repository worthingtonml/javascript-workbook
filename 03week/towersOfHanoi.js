'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}
const i = 0;
function movePiece(startStack, endStack) {
  //Establish length limits for each tower since each tower can only hold a max of 4. A piece only moves after passing this test. Once it passes the start stack final is removed using the pop method placed onto the end of a new stack using the push method. The numbers must be in descending order for all stacks in order to get to this point.
  if (stacks.a.length < 5 && stacks.b.length < 5 && stacks.c.length < 5) {
    function properMove(startStack, endStack) {
      const lastItem = stacks.startStack.pop();
      stacks.endStack.push(lastItem);
      movePiece();
    }
  }
}

function checkForWin() {
  //Winner must satisfy 3 tests. If the array is in descending order, and the tower length of C is equal to 4 items in the array.

  if (stacks.c[i] > stacks.c[i + 1] && stacks.c.length === 4) {
    return "You Win!";
  }
}
checkForWin();

function towersOfHanoi(startStack, endStack) {
  //Once the winner gets all items on the C column in descending order, the game needs to reset. The splice method will remove all items from C. The concate merges the items in C with the empty array A.
  if (stacks.c[i] > stacks.c[i + 1] && stacks.c.length === 4) {
    function towersOfHanoi(startStack, endStack) {
      const endGame = stacks.c.slice(0, 4);
      const restart = stacks.a.concat(stacks.c);
    }
  }
}
towersOfHanoi();

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

getPrompt();

  // if I ran towersOfHanoi('a','b'), the stacks would look like (a)(4, 3, 2,) (b)(1)
  // c()
  // Only the top disks of (a),(b),(c) are movable at any given time.(a) (4,3) (b)(1) (c)2
  // Only the smaller disks can stack on top of larger disks (a)(), (b)(), (c)(4,3,2,1)
  // Try to break the game in your tests.
