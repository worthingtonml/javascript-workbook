'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//If both users input the same answers, the program will return "It's a tie!". Use a function named "rockPaperScissors to evalute the input of each hand"
function rockPaperScissors(hand1, hand2) {
  const issatie = "It's a tie!";
  const oneWins = "Hand one wins!";
  const twoWins = "Hand two wins!";
  if (hand1 === "rock" || hand1 === "paper" || hand1 === "scissors") {
    if (hand1 === hand2) {
      return issatie;
    } else if (hand1 === "rock" && hand2 === "scissors" || hand1 === "paper" && hand2 === "rock" ||
      hand1 === "scissors" && hand2 === "paper") {

      return oneWins;

    } else {

      return twoWins;
    }
  } else {
    return "Only Rock, Paper, Scissors!";
  }
};

//   } else if (hand1 === "scissors" && hand2 === "rock" || hand1 === "rock" && hand2 === "paper" || hand1 === "paper" && hand2 === "scissors"){
//     return "Hand two wins!";
//   }
// }
// };



function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log(rockPaperScissors(answer1, answer2));
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
