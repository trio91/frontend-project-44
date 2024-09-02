import { start } from '../index.js';
import { getNumber } from '../utils.js';

const expressions = ['+', '-', '*'];
function getExpression() {
  const operation = expressions[Math.floor(Math.random() * expressions.length)];
  return operation;
}

const  calculation = (operation, firstNumber, secondNumber) => {
  switch (operation) {
    case '+': return firstNumber + secondNumber;
    case '-': return firstNumber - secondNumber;
    case '*': return firstNumber * secondNumber;
    default: console.log('sorry');
  }
  return null;
};

const resultOfIt = () => {
  const max = 100;
  const number1 = getNumber(max);
  const number2 = getNumber(max);
  const expression = getExpression();
  const question = `Question: ${number1} ${expression} ${number2}`;
  const correctAnswer = calculation(expression, number1, number2).toString();
  return [question, correctAnswer];
};

const startCalc = () => {
  const description = 'What is the result of the expression?';
  start(description, resultOfIt);
};

export default startCalc;
