import { startGame, getAnswer } from '../cli.js';
import getRandomNumber from '../get-random.js';

const name = startGame();
let trueAnswerCounter = 0;

const askAboutNumber = (num) => {
  console.log(`Question: ${num}`);
  return getAnswer();
};

const game = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  while (trueAnswerCounter < 3) {
    const num = getRandomNumber(2, 100);
    const userAnswer = askAboutNumber(num);
    const trueAnswer = num % 2 === 0 ? 'yes' : 'no';
    if (userAnswer === trueAnswer) {
      console.log('Correct!');
      trueAnswerCounter += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}"\nLet's try again, ${name}!`);
      trueAnswerCounter = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
