import startGame from '../core.js';
import getRandomNumber from '../get-random.js';

const gameQAndA = () => {
  const num = getRandomNumber(2, 100);
  const trueAnswer = num % 2 === 0 ? 'yes' : 'no';
  return [num, trueAnswer];
};

const game = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  startGame(gameQAndA);
};

export default game;
