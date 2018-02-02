const word = require('./word.js');

const inquirer = require('inquirer')


function chooseWord() {
    var wordArray = ['English', 'Social Studies', 'Algebra', 'Social Studies']
    var chosenWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    return chosenWord
    //---------------log the letters in chosenWord
    var res = chosenWord.split('');
    console.log(res)
   
}



// function checkIfCorrect() {
//     if (guessedLetter === true) {
//         console.log('correct')
//     } else { console.log('wtf are you doing') }
// }


// function startGame() {

//     console.log('It\'s Time to Play Hangman!!')

//     var chosenWord = new word.Word(chooseWord())
//     console.log(chosenWord)

//     inquirer.prompt([{
//         name: "category",
//         message: "The category is: School Subjects"
//     }, {
//         name: "enterLetter",
//         message: "Enter a Letter to Begin!"

//     }]).then(function (answers) {
//         var guessedLetter = answers.enterLetter
//         chosenWord.guessLetter(guessedLetter)
//         console.log(chosenWord.wordToString())
//         if (guessedLetter === ) {
//             console.log('correct')
//         } else { console.log('wtf are you doing') }
//     });

// }

chooseWord()