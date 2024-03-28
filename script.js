"use strict";
function guessNumber() {
  const systemNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 10;

  function checkNumber(answerNumber) {
    if (answerNumber === null) {
      alert("Игра окончена.");
      return;
    }

    const parsedAnswerNumber = parseInt(answerNumber);
    if (isNaN(parsedAnswerNumber)) {
      alert("Введи число!");
      checkNumber(prompt("Попробуйте еще раз:"));
    } else if (parsedAnswerNumber < systemNumber) {
      attempts--;
      if (attempts === 0) {
        alert("Попытки закончились, хотите сыграть еще?");
        return;
      }
      alert(`Загаданное число больше. Осталось попыток: ${attempts}`);
      checkNumber(prompt("Попробуйте еще раз:"));
    } else if (parsedAnswerNumber > systemNumber) {
      attempts--;
      if (attempts === 0) {
        alert("Попытки закончились, хотите сыграть еще?");
        return;
      }
      alert(`Загаданное число меньше. Осталось попыток: ${attempts}`);
      checkNumber(prompt("Попробуйте еще раз:"));
    } else {
      alert("Поздравляю, Вы угадали!!!");
    }
  }

  const userGuess = prompt("Угадай число от 1 до 100:");
  checkNumber(userGuess);
}

guessNumber();
