import startGame from '../core.js';
import getRandomNumber from '../get-random.js';

const message = 'What is the result of the expression?';

const chooseOperator = () => {
  const operators = ['-', '+', '*'];
  const i = getRandomNumber(0, operators.length - 1);
  return operators[i];
};

const getTrueAnswer = (num1, num2, operator) => {
  switch (operator) {
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Operation "${operator}" is not supported!`);
  }
};

const gameQAndA = () => {
  const operator = chooseOperator();
  const num1 = getRandomNumber(0, 50);
  const num2 = getRandomNumber(0, 50);
  const trueAnswer = String(getTrueAnswer(num1, num2, operator));
  const question = `${num1} ${operator} ${num2}`;
  return [question, trueAnswer];
};

const game = () => startGame(message, gameQAndA);

export default game;
