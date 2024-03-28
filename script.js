"use strict";
function guessNumber() {
  const systemNumber = Math.floor(Math.random() * 100) + 1;

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
      alert("Загаданное число больше.");
      checkNumber(prompt("Попробуйте еще раз:"));
    } else if (parsedAnswerNumber > systemNumber) {
      alert("Загаданное число меньше.");
      checkNumber(prompt("Попробуйте еще раз:"));
    } else {
      alert("Поздравляю, Вы угадали!!!");
    }
  }

  const userGuess = prompt("Угадай число от 1 до 100:");
  checkNumber(userGuess);
}

guessNumber();
