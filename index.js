function isPalindrome(word) {
  arrayOfCharacters = word.split("");
  // console.log(arrayOfCharacters);
  let testingArray = [];

  for (let i = 0; i < arrayOfCharacters.length; i++){
    let value;
    if(arrayOfCharacters[i] === arrayOfCharacters[arrayOfCharacters.length-i-1]){
      value = true;
    } else {
      value = false;
    }

    testingArray.push(value)

    };
  
    if (testingArray.find( arrayElement => arrayElement === false ) === undefined) {
      return true;
    } else {
      return false;
    };
  }

/* 
  Function takes one string as argument
  returns true IF:
  when iterating through the word, the first and last position are equal and those therin
  character in first position === character in last position
  character in second position === character in second to last position.
  etc..
   
  else false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true //", "Word: refer");
  console.log("=>", isPalindrome("refer"));

  console.log("Expecting: false //", "Word: duckos");
  console.log("=>", isPalindrome('duckos'));

  // add your own custom tests in here
  console.log("Expecting: true //", "Word: racecar");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true //", "Word: saippuakivikauppias");
  console.log("=>", isPalindrome("saippuakivikauppias"));

  console.log("Expecting: false //", "Word: robot");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
