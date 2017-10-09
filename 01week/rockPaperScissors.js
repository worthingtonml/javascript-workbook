'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// User1 input of rock, paper, or scissors.
// User2 input of rock, paper, or scissors.
// Compare User1 input to User2 input.
// If User1 input is 'rock' and User2 input is 'scissor', User1 wins.
// If User1 input is 'rock' and User2 input is 'paper', User2 wins.
// If User1 input is 'rock' and User2 input is 'rock', it's a tie.
// If User1 input is 'paper' and User2 input is 'rock', User1 wins.
// If User1 input is 'paper' and User2 input is 'scissors', User2 wins.
// If User1 input is 'paper' and User2 input is 'paper', it's a tie.
// If User1 input is 'scissors' and User2 input is 'paper', User1 wins.
// If User1 input is 'scissors' and User2 input is 'rock', User2 wins.
// If User1 input is 'scissors' and User2 input is 'scissors', it's a tie.

function rockPaperScissors(hand1, hand2) {
  if (hand1 === hand2) {
    return "It's a tie!";
  }
  //Return tie whenever both users throw the same

  if (hand1 === "rock" && hand2 === "scissors" || hand1 === "paper" && hand2 === "rock" ||
    hand1 === "scissors" && hand2 === "paper") {
    return "Hand one wins!"; //
  } else if (hand1 === "scissors" && hand2 === "rock" || hand1 === "rock" && hand2 === "paper" || hand1 === "paper" && hand2 === "scissors"){
    return "Hand two wins!";
  }
};





//compare hand1 to hand2. If the two show the same then return "it's a tie". Use a function to evaluate.


//If it's not a tie, continue evaluating. If hand1 throws a rock and hand2 throws paper, hand 1 loses. If hand2 throws scissor then hand 1 wins. Use an if/then statement to evaluate and return winnner.


function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
