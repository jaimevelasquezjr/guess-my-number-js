'use strict';

/* 
const number = (document.querySelector('.number').textContent = '?');
const btn = document.querySelector('.btn');

 */

const message = (document.querySelector('.message').textContent = '---');

let highScore = 0;
let score = 20;
document.querySelector('.score').textContent = score;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';
console.log(`Secret Number: ${secretNumber}`);

const distance = function (value1, value2) {
  return value1 - value2;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  console.log(`Secret Number: ${secretNumber}`);
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('🚫Invalid. No number!');
  } else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayMessage('🎉Correct Number!');
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score -= 1;
      document.querySelector('.score').textContent = score;
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  } /* else if (guess > secretNumber) {
    
  } else if (guess < secretNumber) {
    if (score > 1) {
      score -= 1;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = ;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    console.log(score);
  } */

  console.log(secretNumber);
});

// 2 -- 10
// secret number: 2
// guess: 15
//
