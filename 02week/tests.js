'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  //If both users input the same answers, the program will return "It's a tie!". Use a function named "rockPaperScissors to evalute the input of each hand"
function rockPaperScissors(hand1, hand2) {
  const issatie = "It's a tie people";
  const oneWins = "Hand one wins!";
  const twoWins = "Hand two wins!";
  if (hand1 === hand2) {
    return issatie;
  } else if (hand1==="rock" || hand1==="paper" || hand1==="scissors" ){
    //Evaluate all winning scenarios for hand1 first using === operator.
    // If any of these scenarios occur show that hand1 is a winner.
    //Evaluate all exact opposits using else if. Did not simply use if statement because any random input that did not fullfill winning scenarios for hand1 would return a winner for hand2, even
    if (hand1 === "rock" && hand2 === "scissors" || hand1 === "paper" && hand2 === "rock" ||
    hand1 === "scissors" && hand2 === "paper") {
      return oneWins;

    } else {

      return twoWins;
    }
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
      assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
      assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
      assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('sCiSsOrs','rock '), "Hand two wins!");
      assert.equal(rockPaperScissors(' paper ', 'rOcK'), "Hand one wins!");
      assert.equal(rockPaperScissors('SCISSORS','Paper'), "Hand one wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
    it('should ensure only strings are considered', () => {
      assert.equal(rockPaperScissors(42, 'paper'), "Rock, Paper, Scissors Only");
    });
    it('should ensure only one entry is entered at a time', () => {
      assert.equal(rockPaperScissors('paper paper', 'rock'), "One entry at a time please");
    });
  });
} else {

  getPrompt();

}
