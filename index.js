const word = require('./word.js');

const inquirer = require('inquirer')


function chooseWord() {
    var wordArray = ['English', 'Social Studies', 'Algebra', 'Social Studies']
    var chosenWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    return chosenWord
   
}


function startGame() {

    console.log('It\'s Time to Play Hangman!!')

    var chosenWord = new word.Word(chooseWord())

    inquirer.prompt([{
        name: "category",
        message: "The category is: School Subjects"
    }, {
        name: "enterLetter",
        message: "Enter a Letter to Begin!"

    }]).then(function (answers) {
        var guessedLetter = answers.enterLetter
        console.log(chosenWord.guessLetter(guessedLetter))
        var stringResult = chosenWord.wordToString();
        console.log(stringResult)

        
    });

}

startGame()

//TASKS

//check if the guessed letter is equal to a letter in the chosen word
    //need to find a way to log all of the letters in the chosen word 
//if statements
    //if the guessed letter === letter in chosen word
        //remaining guesses stays the same
        //another guess letter prompt is activated
    //if the guessed letter != letter in chosen word
        //remaining guesses goes down by one
            //user is informed
        //another guess letter prompt is activated
//if guesses left === 0 
    //game over