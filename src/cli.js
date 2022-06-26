import readlineSync from 'readline-sync';

const getAnswer = () => readlineSync.question('Your answer: ');

const startGame = () => {
  console.log('Welcome to the Brain Games!\nMay I have your name?');
  const name = getAnswer();
  console.log(`Hello, ${name}`);
  return name;
};

export { getAnswer, startGame };
