// const num = 103.941;

// console.log(num.toFixed(2));

// Math.round(num);

// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));

// const min = 10;
// const max = 20;
// const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomNum);

const makeGuess = (userGuess) => {
  const smallNumber = 10;
  const largeNumber = 100;
  const inBetween = Math.floor(Math.random() * (largeNumber - smallNumber + 1)) + smallNumber;
  if(userGuess === inBetween) {
    return `Your guess of ${userGuess} was correct. The number was ${inBetween} and you got it right!`
  } else {
    return `Your guess of ${userGuess} was incorrect. The number was ${inBetween} and you got it wrong` 
  }
};

console.log(makeGuess(10));