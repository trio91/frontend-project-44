const getNumber = (max, min = 0) => {
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
};
export { getNumber };
