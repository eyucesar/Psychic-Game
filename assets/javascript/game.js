
    //variables for computer's choices
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    //This is where I track the wins, losses, the remaining number of guesses and the guessed letters. 
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var guessesSoFar = [];

    //computer chooses a random letter and the value is assigned to computerGuess variable.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    //This is where my function starts. I start by capturing user's guess.  
    document.onkeyup = function(event) {
        //user presses a key and I convert into a lower case letter and assing the value to userGuess variable.
        var userGuess = event.key.toLowerCase();

        //testing the values of variables to see whether my code works so far
        //console.log("computer guess: " + computerGuess);
        //console.log("user guess: " + userGuess);

        //if statements begin. If user cannot guess the letter, the pressed key is pushed to the guessesSoFar array.
        if (userGuess !== computerGuess) {
            if (guessesSoFar.indexOf(userGuess) === -1) {
            guessesSoFar.push(userGuess);
            guessesLeft--;
        }
            if (guessesLeft === 0) {
                alert("You lost! Seems like you are not a very good psychic after all :)");
                losses++;
                guessesLeft = 10;
                //here I empty the elements inside the array to start the game again.
                guessesSoFar = [];
                //after the execution of each if statement, computer picks another letter randomly.
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            }
        //if user guesses the letter, guessesSoFar array is emptied and guessesLeft counter is reset.
        } else {
            wins++;
            alert("You won! Wow, I'm impressed!");
            guessesLeft = 10;
            //here I empty the elements inside the array to start the game again.
            guessesSoFar = [];
            //after the execution of each if statement, computer picks another letter randomly.
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        }

        //Here I write the counters and the guessed letters to the screen.
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
        document.getElementById("theGuesses").innerHTML = guessesSoFar;

        /* alternative to upper block of code :) 
        var writeScores = "<p>GUESS WHAT LETTER I AM THINKING OF</p>" + "<br>" +
        "<h3>Wins: " + wins + "</h3>" +
        "<h3>Losses: " + losses + "</h3>" +
        "<h3>Guesses Left: " + guessesLeft + "</h3>" +
        "<h3>Your Guesses So Far: " + guessesSoFar + "</h3>";

        document.querySelector("#psychicGame").innerHTML = writeScores;*/

    };
