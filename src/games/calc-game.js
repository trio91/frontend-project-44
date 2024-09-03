import start from '../index.js';
import { getRandomNumber, getRandomIndex} from '../utils.js';

const min = 0;
const max = 100;
const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculation = (operation, value1, value2) => {
  switch (operation) {
    case '+': return value1 + value2;
    case '-': return value1 - value2;
    case '*': return value1 * value2;
    default: throw new Error(`Sorry operation ${operation} is undefined`); 
  }
};

const generateRound = () => {
  const number1 = getRandomNumber(min, max);
  const number2 = getRandomNumber(min, max);
  const operator = getRandomIndex(operators);
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculation(expression, number1, number2).toString();
  return [question, correctAnswer];
};

const startCalc = () => {
  start(description, generateRound);
};

export default startCalc;
