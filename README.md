<h1>Guess My Number</h1>
This is a simple "guess the number" game built with HTML, CSS, and JavaScript. It was created as part of the Udemy js course by Jonas Schmedtmann.

<h2>How to Play</h2>
When the page loads, the game will randomly generate a number between 1 and 20.<br>
Enter a guess in the input field and click the "Check!" button.<br>
The game will tell you if your guess was too high or too low.<br>
Keep guessing until you get the right number!<br>

<h2>Features</h2>
Generate random secret number <br>
Provide feedback if guess is too high/low <br>
Keep track of previous guesses <br>
Display message when player wins <br>

<h2>Code Overview</h2>
The core game logic is implemented in JavaScript. The index.html file provides the HTML structure and links to the necessary CSS and JS files.

The script.js file contains the following functions:

reset() - Initializes the game by resetting values and generating a new secret number <br>
checkGuess() - Checks the player's guess against the secret number <br>
displayMessage() - Updates the message displayed to the player <br>
displayScore() - Updates the statistics fields with the latest guess info <br>

<h2>Credits</h2>
This game was built as part of the Udemy course "The Complete JavaScript Course 2023: From Zero to Expert!" by instructor Jonas Schmedtmann. The HTML/CSS code was provided as part of the course and I implemented the core game logic per the course instructions.
