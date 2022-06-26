import startGame from '../core.js';
import getRandomNumber from '../get-random.js';

const message = 'Answer "yes" if the number is even, otherwise answer "no"';

const gameQAndA = () => {
  const num = getRandomNumber(2, 100);
  const trueAnswer = num % 2 === 0 ? 'yes' : 'no';
  return [num, trueAnswer];
};

const game = () => startGame(message, gameQAndA);

export default game;
