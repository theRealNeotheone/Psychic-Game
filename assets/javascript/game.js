// Creates an array that lists out all of the possible options.
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
// Creating variables to hold the number of wins, losses, and guesses. They start at 0.
var wins = 0;
var losses = 0;
var guesses = 9;

// This function is run whenever the user presses a key.
document.onkeyup = function() {
// Randomly chooses a choice from the options array. This is the Computer's guess.    
    var computerGuess = options[Math.floor(Math.random()*options.length)]; 
    document.getElementById("my_id").textContent = "Wins" + wins + "Losses" + losses + "Guesses Left" + guesses;
// Determines which key was pressed by User.
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    
    
    if (userGuess== for (var i = 0; i < options.length; i++) {
        if ((userGuess== 'a') && (computerGuess== 'a')) {
        wins++;
        }
        if ((userGuess== 'a') && (computerGuess== for (var i = 1; i < options.length; i++))) {
        wins++;
        }
    }
}    