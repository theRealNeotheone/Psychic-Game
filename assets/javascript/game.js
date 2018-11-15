var compTurn = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



var wins = 0;
var losses = 0;
var guesses = 9;
var guessedLetters = [];
var compGuess = [];



window.onload = function() {
	var computersG = compTurn[Math.floor(Math.random() * compTurn.length)];
	compGuess.push(computersG);
	
}



document.onkeyup = function(event) {
	var playerGuess = event.key;
	guessedLetters.push(playerGuess);
	

if ((playerGuess === compGuess[0]) && (guesses > 0)) {
	wins++;
	guesses = 9;
	guessedLetters.length = 0;
	compGuess.length = 0;
	var computersG = compTurn[Math.floor(Math.random() * compTurn.length)];
	compGuess.push(computersG);
}

else if ((playerGuess !== compGuess[0]) && (guesses > 0)) {
	guesses = guesses-1;
}

else {
	losses++;
	guesses = 9;
	guessedLetters.length = 0;
	compGuess.length = 0;
	var computersG = compTurn[Math.floor(Math.random() * compTurn.length)];
	compGuess.push(computersG);
}

var html = "<p>What letter do I have in mind!</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses left: " + guesses + "</p>" +
          "<p>Your guesses so far: " + guessedLetters + "</p>";
 
document.querySelector("#game").innerHTML = html;

}
