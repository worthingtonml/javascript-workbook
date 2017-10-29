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

function movePiece() {
  // Only allow the last position to move from one stack to another stack.


}

function isLegal(tower) {
  // Checks if the move is legal
  for (i = 0; i < tower.length - 1; i++) {
    if (tower[i] > tower[i + 1]) {
      return "Is Valid";
    } else {
      return "Is not Valid";
    }
  }
}
isLegal(stacks.a);


function checkForWin() {
  // Checks if there is a winner
  for (i = 0; i < stacks.c.length - 1; i++) {
    if (stacks.c[i] > stacks.c[i + 1] && stacks.c.length === 4) {
      return "winner";
    }
  }
}
checkForWin();


function towersOfHanoi(startStack, endStack) {
  // Your code here

}

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
// Try to break the game in your tests
//a lot of bigger companies do tdd, it takes time. Startup companies may not because they may need to get stuff out quicker
