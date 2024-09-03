import start from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const min = 0;
const max = 100;

const isPrime = (number) => {
  const testLimit = Math.sqrt(number);
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= testLimit; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = getRandomNumber(min, max);
  const question = number.toString();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startPrime = () => {
  start(description, generateRound);
};

export default startPrime;
