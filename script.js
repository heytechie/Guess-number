'use strict';
//To select an html element use
// document.querySelector(.message)
// document.querySelector('.message').textContent = '🥳 CORRECT ';
// console.log(document.querySelector('.message'));
// document.querySelector('.guess').value = 23;
// to select any button
//we can do .addEventListner('Task', Assign a function)
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 NO NUMBER ';
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '⬆️ TOO HIGH ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😔 YOU LOST THE GAME';
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '⬇️ TOO LOW ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😔 YOU LOST THE GAME';
    }
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 CORRECT! ';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = guess;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing... ';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
