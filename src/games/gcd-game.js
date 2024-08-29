import { getNumber, start } from '../index.js';

function answer(number1, number2) {
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
}

const resultOfIt = () => {
  const number1 = getNumber();
  const number2 = getNumber();
  const question = `Question: ${number1} ${number2}`;
  const correct = answer(number1, number2).toString();
  return [question, correct];
};
const game = () => {
  const startMessage = 'Find the greatest common divisor of given numbers.';
  start(startMessage, resultOfIt);
};
export default game;
