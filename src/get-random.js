const getRandomNumber = (min, max) => {
  const random = Math.random() * (max - min) + min;
  return Math.round(random);
};

export default getRandomNumber;
