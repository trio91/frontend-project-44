import { start, getNumber } from '../index.js';

function isPrime(number) {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number !== 1;
}

const resultOfIt = () => {
  const number = getNumber();
  const question = `Question: ${number}`;
  const correct = isPrime(number) ? 'yes' : 'no';
  return [question, correct];
};

const game = () => {
    const startMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
    start(startMessage, resultOfIt);
};
export default game;
