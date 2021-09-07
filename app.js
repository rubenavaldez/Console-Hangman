const getRandomWord = require( "@cityssm/random-words").getRandomWord
let word = getRandomWord();
var inquirer = require('inquirer')
//console.log(word)
let guessCount = 0;
let gameWord =word.split("");
const chalk = require('chalk')

let gameBoard =[]
word.split("").forEach(element => {
    gameBoard.push('_')

});
//console.log( gameBoard.join(" "))
function replaceLetter(answer,match,guessCount){       
    if(gameWord.indexOf(answer) !== -1){
              
      gameBoard[gameWord.indexOf(answer)] = answer
      gameWord[gameWord.indexOf(answer)] = "_"
      match++
    //   console.log("gameBoard", gameBoard)
    //   console.log("gameWord", gameWord)
      replaceLetter(answer,match,guessCount)
  }else if( match > 0){
      
  
  }else{
  
      guessCount++
  }
  
  }

inquirer
.prompt({
    type:"confirm",
    message:"Ready to play Hangman",
    name:"intro"
}
)
.then(answers =>{

    console.log(answer)
})
.catch(err=>{
    if(err.isTyError){
        console.log(err)
    }else{

        console.log(`Your word has ${word.length} letters`)
        wordGuess(word, gameBoard)
    }
})

function wordGuess(word, gameBoard){
    inquirer.prompt({
        type:"input",
        message:"Guess a letter",
        name:"letter"

    }).then(answers =>{
        console.log(`Your word has ${word.length} letters`)
        let answer = answers.letter[0];
        console.log("answer",answer)
        let match = 0;
        //replaceLetter(answer,match,guessCount)

        if(gameWord.indexOf(answer) !== -1){
              
            // gameBoard[gameWord.indexOf(answer)] = answer
            // gameWord[gameWord.indexOf(answer)] = "_"
            // match++
            // console.log("gameBoard", gameBoard)
            // console.log("gameWord", gameWord)
            replaceLetter(answer,match,guessCount)
        }else{
            guessCount++
        }
            // stop at guess count limit
        //console.log(gameBoard.join(" "))
        if(gameBoard.join("")== word){
            console.log("you win")
        }else if(guessCount >= hangman.length){
            console.log(`The word was ${word}
            GAME OVER`)

        }else{

            console.log(chalk.red(hangman[guessCount]).concat(gameBoard.join(" ")))
          wordGuess(word, gameBoard)
        }
    })
    .catch(err=>{
        if(err){
            console.log(err)
        }

        
    })
}

let hangman = [`
  +---+
  |   |
      |
      |
      |
      |
=========
`, `
  +---+
  |   |
  O   |
      |
      |
      |
=========
`, `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========
`, `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========
`, `
  +---+
  |   |
  O   |
 /|\\\  |
      |
      |
=========
`, `
  +---+
  |   |
  O   |
 /|\\\  |
 /    |
      |
=========
`, `
  +---+
  |   |
  O   |
 /|\\\  |
 / \\\  |
      |
=========
`];

