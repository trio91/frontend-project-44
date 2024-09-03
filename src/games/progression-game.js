import start from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const description = 'What number is missing in the progression?';
const minNumber = 0;
const maxNumber = 100;
const minProgressionStep = 1;
const maxProgressionStep = 10;
const minProgressionLength = 5;
const maxProgressionLength = 10;

const generateProgression = (actualProgressionLength, firstItem, progressionStep) => {
  const progression = [];
  for (let i = firstItem; progression.length < actualProgressionLength; i += progressionStep) {
    progression.push(i);
  }
  return progression;
};

const generateRound = () => {
  const actualProgressionLength = getRandomNumber(minProgressionLength, maxProgressionLength);
  const firstItem = getRandomNumber(minNumber, maxNumber);
  const progressionStep = getRandomNumber(minProgressionStep, maxProgressionStep);
  const progression = generateProgression(actualProgressionLength, firstItem, progressionStep);
  const cutIndex = getRandomIndex(progression);
  const correctAnswer = progression[cutIndex].toString();
  progression[cutIndex] = '..';
  const question = progression.join(' ').toString();
  return [question, correctAnswer];
};

const startProgression = () => {
  start(description, generateRound);
};

export default startProgression;
