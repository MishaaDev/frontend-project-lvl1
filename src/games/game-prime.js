import startGame from '../core.js';
import getRandomNumber from '../get-random.js';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num >= 2;
};

const gameQAndA = () => {
  const num = getRandomNumber(0, 100);
  const trueAnswer = isPrime(num) ? 'yes' : 'no';
  return [num, trueAnswer];
};

const game = () => startGame(message, gameQAndA);

export default game;
