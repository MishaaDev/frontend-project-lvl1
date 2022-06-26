import startGame from '../core.js';
import getRandomNumber from '../get-random.js';

const message = 'What number is missing in the progression?';

const getNumberRow = () => {
  const startNumber = getRandomNumber(0, 10);
  const progressionSize = getRandomNumber(1, 10);
  const result = [startNumber];
  for (let i = 0; i < 9; i += 1) {
    const newNumber = result[result.length - 1] + progressionSize;
    result.push(newNumber);
  }
  return result;
};

const gameQAndA = () => {
  const numberRow = getNumberRow();
  const hidingNumberIndex = getRandomNumber(0, numberRow.length - 1);
  const trueAnswer = String(numberRow[hidingNumberIndex]);
  numberRow[hidingNumberIndex] = '..';
  const question = numberRow.join(' ');
  return [question, trueAnswer];
};

const game = () => startGame(message, gameQAndA);
// const game = () => getNumberRow();

export default game;
