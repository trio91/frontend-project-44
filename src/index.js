import readlineSync from 'readline-sync';

const getNumber = () => {
  const number = Math.floor(Math.random() * 100);
  return number;
};
function getName() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}
function start(startMessage, result) {
  const name = getName();
  console.log(startMessage);
  for (let i = 0; i < 3; i += 1) {
    const [question, correct] = result();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correct) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correct}'. \nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}

export { getNumber, getName, start };
