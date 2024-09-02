import start from '../index.js';
import getNumber from '../utils.js';

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

const resultOfIt = () => {
  const max = 100;
  const number1 = getNumber(max);
  const number2 = getNumber(max);
  const question = `Question: ${number1} ${number2}`;
  const correctAnswer = answer(number1, number2).toString();
  return [question, correctAnswer];
};
const startGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  start(description, resultOfIt);
};
export default startGcd;
