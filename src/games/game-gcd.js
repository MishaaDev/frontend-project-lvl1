import startGame from '../core.js';
import getRandomNumber from '../get-random.js';

const message = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return greatestCommonDivisor(num2, num1 % num2);
};

const gameQAndA = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);
  const question = `${num1} ${num2}`;
  const trueAnswer = String(greatestCommonDivisor(num1, num2));
  return [question, trueAnswer];
};

const game = () => startGame(message, gameQAndA);

export default game;
