var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed;

// computer choices
var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lettersGuessed = [];


var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

document.onkeyup = function (e) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

 
    lettersGuessed.push(userGuess);
    
    


    if (guessesLeft > 0) {
    
    if (userGuess === computerGuess) {
        computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
        wins++;
        guessesLeft--;
        guessesLeft = 10;
        lettersGuessed = [];
        alert("YOU WIN!!!!");

    }
    if (userGuess !== computerGuess) {
        
        guessesLeft--;
    }
    if (guessesLeft === 0) {
        computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
        alert("You lost!  I was thinking of the letter: " + computerGuess);
        guessesLeft = 9;
        losses++;
        lettersGuessed = [];

    }
    console.log(computerGuess);

}


    var html = "<p>Guess what letter I'm thinking of:</p><br>" + "<p>Wins: " + wins + "</p><br>" +
    "<p>Losses: " + losses + "</p><br>" +
    "<p>Guesses Left: " + guessesLeft + "</p><br>" + "<p>" + "You Guessed so far: " + lettersGuessed.toString() + "</p><br>";

    document.querySelector("#game").innerHTML = html;
}












