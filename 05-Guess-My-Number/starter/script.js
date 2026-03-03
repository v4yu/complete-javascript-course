'use strict';

// document.querySelector('.message');
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'New message content!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 18;
// document.querySelector('.highscore').textContent = 15;
// document.querySelector('.label-highscore').textContent = 'New highscore:';

// document.querySelector('.guess').value = 0;

// Zawsze musi mieć function bez tego samo console.log nie zadziała.

// Od tego miejsca piszemy faktyczny projekt.

// document.querySelector('.guess').value = 0;

let secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 20;
let highscore = 0;

function setMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value);

  //   document.querySelector('.message').textContent =
  //     'the button has been clicked!';
  let guess = Number(document.querySelector('.guess').value);

  console.log(`Your guess is ${guess}`, typeof guess);

  if (score > 1) {
    if (!guess || guess < 0) {
      setMessage('No number entered!');
      //   document.querySelector('.message').classList.add('error');
      //   document.querySelector('.message').classList.remove('success');
    } else if (guess === secretNumber) {
      setMessage(`You've guessed the number!`);
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').textContent = secretNumber;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      //   document.querySelector('.message').classList.add('success');
      //   document.querySelector('.message').classList.remove('error');
    } else if (guess !== secretNumber) {
      setMessage(
        guess > secretNumber
          ? `The secret number is lower!`
          : `The secret number is higher!`,
      );
      //   document.querySelector('.message').classList.remove('error');
      //   document.querySelector('.message').classList.remove('success');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    setMessage(`You've lost the game!`);
    document.querySelector('.message').classList.add('error');
    document.querySelector('body').style.backgroundColor = 'red';
    score = 0;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 30) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  if (document.querySelector('.number').textContent != '?') {
    document.querySelector('.number').textContent = '?';
  }
  setMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  // console.log(score);
});
