import { start } from '../index.js';
import { getNumber } from '../utils.js';

const even = (number) => {
  const result = (number % 2 === 0);
  return result;
};
const resultOfIt = () => {
  const number = getNumber();
  const question = `Question: ${number}`;
  const correct = even(number) ? 'yes' : 'no';
  return [question, correct];
};
const startEven = () => {
  const startMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
  start(startMessage, resultOfIt);
};

export default startEven;
