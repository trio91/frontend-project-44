import { start } from '../index.js';
import { getNumber } from '../utils.js';

const isPrime = (number) => {
  if (number === 0) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number !== 1;
};

const resultOfIt = () => {
  const max = 100;
  const number = getNumber(max);
  const question = `Question: ${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  start(description, resultOfIt);
};
export default startPrime;
