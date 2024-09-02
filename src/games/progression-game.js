import start from '../index.js';
import getNumber from '../utils.js';

const resultOfIt = () => {
  const max = 100;
  const progression = [];
  const firstItem = getNumber(max);
  for (let i = firstItem; i < firstItem + 10; i += 1) {
    progression.push(i);
  }
  const cutIndex = Math.floor(Math.random() * 10);
  const missingIndex = progression[cutIndex];
  progression[cutIndex] = '..';
  const question = `Question: ${progression.join(' ')}`;
  const correctAnswer = missingIndex.toString();
  return [question, correctAnswer];
};
const startProgression = () => {
  const description = 'What number is missing in the progression?';
  start(description, resultOfIt);
};
export default startProgression;
