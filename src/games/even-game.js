import start from '../index.js';
import getNumber from '../utils.js';

const even = (number) => {
  const result = (number % 2 === 0);
  return result;
};
const resultOfIt = () => {
  const max = 100;
  const number = getNumber(max);
  const question = `Question: ${number}`;
  const correctAnswer = even(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const startEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  start(description, resultOfIt);
};

export default startEven;
