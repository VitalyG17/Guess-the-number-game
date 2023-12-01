'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 10;
let highScore = 0;

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

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //Вывод подсказки в зависимости от ввода игрока
  else if (quessingNumber !== secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent =
        quessingNumber > secretNumber
          ? 'Загаданное число меньше!'
          : 'Загаданное число больше!';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.guess-message').style.color = 'red';
    } else {
      document.querySelector('.guess-message').textContent = 'Вы проиграли!';
      document.querySelector('.guess-message').style.color = 'red';
      document.querySelector('.score').textContent = 0;
    }
  }

  //Изменение цвета в зависимости от кол-ва очков
  if (score >= 7) {
    document.querySelector('.label-score').style.color = '#7CFC00';
  } else if (score < 7 && score >= 5) {
    document.querySelector('.label-score').style.color = '#F75E25';
  } else {
    document.querySelector('.label-score').style.color = '#FF0033';
  }
});

//Логика после нажатия на кнопку "Сначала!"
document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);

  document.querySelector('.question').textContent = '???';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess-message').textContent = 'Начни угадывать';
  document.querySelector('.guess-message').style.color = 'white';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.question').style.width = '25rem';
  document.querySelector('.number-input').value = null;
});

//Проверка введенного числа
function checkInputValue(input) {
  let value = parseInt(input.value, 10);

  if (isNaN(value) || value < 1) {
    input.value = 1;
  } else if (value > 20) {
    input.value = 20;
  }
}
