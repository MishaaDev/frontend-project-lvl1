import getAnswer from './cli.js';

const greetTheUser = () => {
  console.log('Welcome to the Brain Games!\nMay I have your name?');
  const name = getAnswer();
  console.log(`Hello, ${name}`);
  return name;
};

const startGame = (message, gameQAndA) => {
  const name = greetTheUser();
  console.log(message);
  for (let i = 0; i < 3; i += 1) {
    const [question, trueAnswer] = gameQAndA();
    console.log(`Question: ${question}`);
    const userAnswer = getAnswer();
    if (userAnswer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}"\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;
export { greetTheUser };
