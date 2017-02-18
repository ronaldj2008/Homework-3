var wordlist = [
	"Reasonable Doubt",
	"Watch the Throne",
	"Magna Carta",
	"Kingdom Come",
	"The Dynasty",
	"The Black Album",
	"Hard Knock Life Vol Two"
	]

var chosenWord = "";
var letterInChosenWord = [];
var numBlanks = 0;
var blanksAndSuccesses= [];
var wrongGuesses = [];

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

function startgame (){

/*

1. select word at random 
2. break up random words to letters and replace them with underscores
3. add those underscores to html
4. numGuesses equals; 9, and blankandsuccess is an empty array,
and wrongGuesses is empty as well
*/
numGuesses = 9;
blanksAndSuccesses = [];
wrongGuesses = [];

chosenWord = wordList[Math.floor(Math.random()* wordList.length)];
letterInChosenWord = chosenWord.split("");
numBlanks = letterInChosenWord.length; 
console.log(chosenWord);
console.log(numBlanks)

for (var i=0; i < numBlanks; i++) {
	blanksAndSuccesses.push("_")
}

console.log(blanksAndSuccesses);
document.getElementbyId('guesses-left').innerHTML = numGuesses;\
document.getElementbyId ('word-bank').innerHTML = blanksAndSuccesses;

 
}
function checkLetters(letter){

/*

1. Compare the letter the user picks and matches any of the letters in the word	
2. Create conditional statement to determine if the letter the user picked is in the word. 
If so, do something, if not do something else
3. If the user is wrong we want to decrease the numGuesses variables by one
*/

function roundComplete (){

/*

1. Going to update the HTML with letters that are in the word
2. Going to update the HTML with guesses we have left
3. Going to update HTML to show incorrect guesses
4. Goting to determine whether the user won the game or not

*/


}

document.onkeyup = function(event){

/*

1. Going to take in the letter that we type in
2. Going to pass it through the 
}
