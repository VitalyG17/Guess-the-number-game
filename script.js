'use strict';

// console.log(document.querySelector('.guess-message').textContent);
// document.querySelector('.guess-message').textContent = 'Верно!';
// document.querySelector('.question').textContent = 7;
// document.querySelector('.score').textContent = 11;
// document.querySelector('.number-input').value = 99

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 10;
let bestScore;

document.querySelector('.check').addEventListener('click', function () {
  const quessingNumber = Number(document.querySelector('.number-input').value);
  //Игрок не выбрал число
  if (!quessingNumber) {
    document.querySelector('.guess-message').textContent = 'Введите число!';
  }
  //Игрок победил
  else if (quessingNumber === secretNumber) {
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('.guess-message').textContent = 'Верно!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.guess-message').style.color = '#00FF00';
    document.querySelector('.question').style.width = '50rem';
  }
  //Игрок выбрал маленькое число
  else if (quessingNumber < secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent =
        'Загаданное число больше!';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.guess-message').style.color = 'red';
    } else {
      document.querySelector('.guess-message').textContent = 'Вы проиграли!';
      document.querySelector('.guess-message').style.color = 'red';
    }
  }
  //Игрок выбрал большое число
  else if (quessingNumber > secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent =
        'Загаданное число меньше!';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.guess-message').style.color = 'red';
    } else {
      document.querySelector('.guess-message').textContent = 'Вы проиграли!';
    }
  }

  if(score>=7) {
    document.querySelector('.score').style.color = '#7CFC00'
  } else if (score <7 && score >=5 ){ 
    document.querySelector('.score').style.color = '#EC7C26'
  } else {
    document.querySelector('.score').style.color = '#FF0033'
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);

  document.querySelector('.question').textContent = '???';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess-message').textContent = 'Начни угадывать';
  document.querySelector('.guess-message').style.color = 'white';
  document.querySelector('.question').style.width = '25rem';
  document.querySelector('.number-input').value = null;

});
