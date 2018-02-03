var letter = require('./letter.js');

exports.Word = function(word) {
    this.word = word
    var letterArray = [];
    word.split('').forEach(function(letterFromWord){
        var newLetter = new letter.Letter(letterFromWord)
        letterArray.push(newLetter)
    })
    this.letterArray = letterArray;
    this.wordToString = function() {
        var newArray = [];
        this.letterArray.forEach(function(letterObj){
            // console.log(letterObj.checkIfGuessed())
            newArray.push(letterObj.checkIfGuessed());
            console.log(newArray.length)
        })

        return newArray.join(' ');

    }
    this.guessLetter = function(character) {
        this.letterArray.forEach(function(letterObj){
            letterObj.changeBoolean(character);
            return true
            
        })


    }

    
}
