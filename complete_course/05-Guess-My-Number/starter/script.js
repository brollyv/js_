'use strict';

// manipulating elements

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 21;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// handling click events    // game logic

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number');

    // When player wins
  } else if (guess === secretNumber) {
    //  document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    // adding inline styles on html elements
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  // replaced with else if above => added a ternery operator for high and low
  //   }else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥 You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     //When gues is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥 You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

// resetting everything after clicking on Again!

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.backgroundColor = '15rem';
});
