const getRandomWord = require( "@cityssm/random-words").getRandomWord
let word = getRandomWord();
var inquirer = require('inquirer')
console.log(word)

let gameWord =word.split("");

let gameBoard =[]
word.split("").forEach(element => {
    gameBoard.push('_')

});
//console.log( gameBoard.join(" "))

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

        if(gameWord.indexOf(answer) !== -1){
            
            gameBoard[gameWord.indexOf(answer)] = answer
            gameWord[gameWord.indexOf(answer)] = "_"
        }

        console.log(gameBoard.join(" "))
        if(gameBoard.join("")== word){
            console.log("you win")
        }else{
          wordGuess(word, gameBoard)
        }
    })
    .catch(err=>{
        if(err){
            console.log(err)
        }

        
    })
}