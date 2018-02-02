

exports.Letter = function(character) {
    this.character = character;
    this.guessed = false;
    this.checkIfGuessed = function () {
        if (this.guessed) {
            return this.character
        } else {
            return '_'
        }
    }
    this.changeBoolean = function (inputLetter) {
        if (inputLetter === this.character) {
            this.guessed = true;
        } else { this.guessed = false }
    }
}


