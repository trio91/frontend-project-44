import readlineSync from 'readline-sync';

const getUserName = () => {
  const name = readlineSync.question('May I have Your name?');
  console.log(`Hello, ${name}!`);
};
export default getUserName;
