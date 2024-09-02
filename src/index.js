import readlineSync from 'readline-sync';

const start = (description, generateRound) => {
  const getName = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    return name;
  };
  const name = getName();
  console.log(description);
  const maxTries = 3;
  for (let i = 0; i < maxTries; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default start;
