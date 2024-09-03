import start from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const description = 'What number is missing in the progression?';
const min = 0;
const max = 100;

const generateRound = () => {
  const progression = [];
  const firstItem = getRandomNumber(min, max);
  for (let i = firstItem; i < firstItem + 10; i += 1) {
    progression.push(i);
  }
  const cutIndex = getRandomIndex(progression);
  const missingIndex = progression[cutIndex];
  progression[cutIndex] = '..';
  const question = `${progression.join(' ')}`;
  const correctAnswer = missingIndex.toString();
  return [question, correctAnswer];
};
const startProgression = () => {
  start(description, generateRound);
};
export default startProgression;
