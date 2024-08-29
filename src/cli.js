import readlineSync from 'readline-sync';

const getUserName = () => {
  console.log('Welcome to the Brain games!');
  const name = readlineSync.question('May I have Your name?');
  console.log(`Hello, ${name}!`);
};
export default getUserName;
