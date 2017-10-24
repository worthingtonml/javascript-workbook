'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  const pigLatinTrans = (word) => {
    //Create function to test for pig latin
    const stringArray = word.split("");
    //Turn 'word' into an array in order to compare it to a list of vowels
    console.log(stringArray);
    //log the result of stringArray, which should be the 'word's letters broken into an array of characters
    const isItAVowel = ["aeiouy"];
    //create an array for vowels
    const regexp = /[aeiouy]/;
    //Use regular expressions to compare the array of vowels - from strings - to the first letter of the input word. Use the method "match" to compare
    const firstVowel = word.match(regexp);
    const charPlace = word.indexOf(firstVowel);
    //Find the place of the 1st vowel in the word - as compared to the vowel array. To find place use method "indexOf" to get the position
    console.log(charPlace);
    if (charPlace === 0) {
      return word + "way";
      //Evaluates if the first vowel's place is equal to 0 that means it starts with a vowel. Any word that starts with a vowel, add "way to the end of it. "
    } else {
      if (charPlace > 0) {
        return word.slice(charPlace) + word.slice(0, charPlace) + 'ay';
        //If charPlace is greater than 0, it means the word does not start with a vowel. If the word doesn't start with a vowel I want everything before the vowel. I then want the first position up to the first vowel to placed at the end of the word. All using slice. From there add 'ay' to the end.
      }
    }
  }
  pigLatinTrans("char")

}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log(pigLatin(answer));
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
