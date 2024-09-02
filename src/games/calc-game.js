import { start } from '../index.js';
import { getNumber } from '../utils.js';

const expressions = ['+', '-', '*'];
function getExpression() {
  const operation = expressions[Math.floor(Math.random() * expressions.length)];
  return operation;
}

function calculation(operation, firstNumber, secondNumber) {
  switch (operation) {
    case '+': return firstNumber + secondNumber;
    case '-': return firstNumber - secondNumber;
    case '*': return firstNumber * secondNumber;
    default: console.log('sorry');
  }
  return null;
}

const resultOfIt = () => {
  const number1 = getNumber();
  const number2 = getNumber();
  const expression = getExpression();
  const question = `Question: ${number1} ${expression} ${number2}`;
  const correct = calculation(expression, number1, number2).toString();
  return [question, correct];
};

const startCalc = () => {
  const startMessage = 'What is the result of the expression?';
  start(startMessage, resultOfIt);
};

export default startCalc;
