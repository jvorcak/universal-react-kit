function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const fetchCounter = async () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(getRandomInt(1, 100));
    }, 500);
  });
