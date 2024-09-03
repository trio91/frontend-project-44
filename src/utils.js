const getRandomNumber = (min, max) => {
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
};

const getRandomIndex = (collection) => {
  const index = Math.floor(Math.random() * collection.length);
  return index;
};

export { getRandomNumber, getRandomIndex };
