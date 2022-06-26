import readlineSync from 'readline-sync';

const getAnswer = () => readlineSync.question('Your answer: ');

export default getAnswer;