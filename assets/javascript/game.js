
	//variables for computer's choices
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	//This is where I track the wins, losses and the remaining guesses.
    var wins = 0;
	var losses = 0;
	var guesses = 9;
	var guessesLeft = 9;
    var guessesSoFar = [];
    var guessesVar;

    //This is where I capture user's guess and computer's choice.	
	document.onkeyup = function(event) {
        //user presses a key and I convert into a lower case letter and assing the value to userGuess variable.
    	var userGuess = event.key.toLowerCase();
        //computer chooses a random letter and the value is assigned to computerGuess variable.
    	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        //testing the values of variables to see whether my code works so far
        console.log("computer guess: " + computerGuess);
        console.log("user guess: " + userGuess);

        //if statements begin
        if (userGuess !== computerGuess) {
            guessesSoFar.push(userGuess);
            guessesLeft--;
                if (guessesLeft === 0) {
                    alert("You lost!");
                    losses++;
                    guessesLeft = 9;
                    guessesSoFar = [];
                    alert("Type another letter to keep playing!")
                }

        } else {
            wins++;
            alert("You won!");
            guessesLeft = 9;
            guessesSoFar = [];
            alert("Type another letter to keep playing!")
        }

        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
        guessesVar = document.getElementById("theGuesses");
        guessesVar.innerHTML = guessesSoFar;

        /* the code below somehow didn't work, so I came up with the above block which works. Whatever works, right? :) 
        var writeScores = "<p>GUESS WHAT LETTER I AM THINKING OF</p>" + 
        "<h3>Wins: " + wins + "</h3>" +
        "<h3>Losses: " + losses + "</h3>" +
        "<h3>Guesses Left: " + guessesLeft + "</h3>" +
        "<h3>Your Guesses So Far: " + guessesSoFar + "</h3>";

        document.querySelector("psychicGame").innerHTML = writeScores;
        */

    };

    
