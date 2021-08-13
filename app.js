const getRandomWord = require( "@cityssm/random-words").getRandomWord
const word = getRandomWord();
console.log(word)


let gameBoard =[]
word.split("").forEach(element => {
    gameBoard.push('_')

});
console.log( gameBoard.join(" "))

