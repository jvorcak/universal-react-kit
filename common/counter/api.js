function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export async function fetchCounter() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(getRandomInt(1, 100))
    }, 500);
  });
}
