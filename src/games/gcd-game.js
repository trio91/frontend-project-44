import start from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const min = 0;
const max = 100;

const answer = (number1, number2) => {
  let x = number1;
  let y = number2;
  let gcd = 0;
  while (x !== 0 && y !== 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }
  gcd = x + y;
  return gcd;
};

const generateRound = () => {
  const number1 = getRandomNumber(min, max);
  const number2 = getRandomNumber(min, max);
  const question = `${number1} ${number2}`;
  const correctAnswer = answer(number1, number2).toString();
  return [question, correctAnswer];
};

const startGcd = () => {
  start(description, generateRound);
};

export default startGcd;
