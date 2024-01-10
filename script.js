'use strict';

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

const displayNumber = number =>
  (document.querySelector('.number').textContent = number);

const displayScore = score =>
  (document.querySelector('.score').textContent = score);

const resetGuess = function () {
  document.querySelector('.guess').value = 1;
};

const reset = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayScore(score);
  displayNumber('?');
  displayMessage('Start guessing...');
  resetGuess();

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

const check = function () {
  const guess = Number(document.querySelector('.guess').value);

  //No number entered or 0 or higher than 20
  if (guess < 1 || guess > 20) {
    resetGuess();
    displayMessage('Guess between 1 and 20');
    //Player win situation
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    displayNumber(secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //Guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'High!' : 'Low!');
      score--;
      displayScore(score);
    } else {
      document.querySelector('body').style.backgroundColor = 'red';
      displayMessage('You lost :(');
      displayScore(0);
    }
    //secret number is lower
  }
};

document.querySelector('.check').addEventListener('click', check);

//again button logic
document.querySelector('.again').addEventListener('click', reset);

//Enter button check

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') check();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'r' || e.key === 'R') reset();
});
