import { getNumber, start } from "../index.js";

const resultOfIt = () => {
  const progression = [];
  const firstItem = getNumber();
  for (let i = firstItem; i < firstItem + 10; i += 1) {
    progression.push(i);
  }
  const cutIndex = Math.floor(Math.random() * 10);
  const missingIndex = progression[cutIndex];
  progression[cutIndex] = '..';
  const question = `Question: ${progression.join(' ')}`;
  const correct = missingIndex.toString();
  return [question, correct];
};
const game = () => {
  const startMessage = 'What number is missing in the progression?';
  start(startMessage, resultOfIt);
};
export default game;
