import start from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const min = 0;
const max = 100;

const isEven = (number) => {
  const result = (number % 2 === 0);
  return result;
};

const generateRound = () => {
  const number = getRandomNumber(min, max);
  const question = number.toString();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startEven = () => {
  start(description, generateRound);
};

export default startEven;
