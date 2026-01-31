'use strict';

let number = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const numberEl = document.querySelector('.number');
const guessEl = document.querySelector('.guess');
const body = document.querySelector('body');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessEl.value);

  if (!guess) {
    messageEl.textContent = '🛑 No Number';
  } 
  else if (guess === number) {
    messageEl.textContent = '😎 Correct number';

    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }

    numberEl.textContent = number;
    body.style.backgroundColor = '#60b347';
    numberEl.style.width = '30rem';
  } 
  else {
    if (score > 1) {
      messageEl.textContent =
        guess > number ? '💀 Tooo highhhh' : '💀 Tooo lowwwww';

      score--;
      scoreEl.textContent = score;
    } 
    else {
      messageEl.textContent = 'YOU LOST!';
      scoreEl.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.floor(Math.random() * 20) + 1;
  score = 20;

  scoreEl.textContent = score;
  messageEl.textContent = 'Start guessing...';
  body.style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
  numberEl.textContent = '?';
  guessEl.value = '';
});

