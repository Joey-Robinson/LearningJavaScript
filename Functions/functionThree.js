// Multiple Arguments
// const add = (a, b) => {
//   return a + b
// };

// console.log(add(10, 100));

// Default Arguments
// const mathFunction = (a = 10, b = 100) => {
//   return a * b
// };

// console.log(mathFunction(2, 2));
// More Defaults
const getScoreText = (name = 'Anonymous', score = 100) => {
  console.log(name, score);
};
// If no value is given in the callback, default will be used
getScoreText('Bob', 10);