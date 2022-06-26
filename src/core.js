import getAnswer from './cli.js';

const greetTheUser = () => {
  console.log('Welcome to the Brain Games!\nMay I have your name?');
  const name = getAnswer();
  console.log(`Hello, ${name}`);
  return name;
};

const startGame = (gameQAndA) => {
  const name = greetTheUser();
  let trueAnswerCounter = 0;
  while (trueAnswerCounter < 3) {
    const [question, trueAnswer] = gameQAndA();
    console.log(`Question: ${question}`);
    const userAnswer = getAnswer();
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

export default startGame;
