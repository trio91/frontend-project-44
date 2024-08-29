import { getNumber, start } from '../index.js';

const expressions = ['+', '-', '*'];
function getExpression() {
  const operation = expressions[Math.floor(Math.random() * expressions.length)];
  return operation;
}

const calculation = (operation, firstNumber, secondNumber) => {
  switch (operation) {
    case '+': return firstNumber + secondNumber;
    case '-': return firstNumber - secondNumber;
    case '*': return firstNumber * secondNumber;
    default: console.log(`sorry`);
  }
};

const resultOfIt = () => {
  const number1 = getNumber();
  const number2 = getNumber();
  const expression = getExpression();
  const question = `Question: ${number1} ${expression} ${number2}`;
  const correct = calculation(expression, number1, number2).toString();
  return [question, correct];
};

function game() {
  const startMessage = 'What is the result of the expression?';
  start(startMessage, resultOfIt);
}

export default game;
