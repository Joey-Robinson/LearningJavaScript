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
// const getScoreText = (name = 'Anonymous', score = 100) => {
//   return `Name: ${name}, Score: ${score}`
// };
// If no value is given in the callback, default will be used
// console.log(getScoreText());

// Challenge
// 2 Arguments: total, tipPercent: .2 
const getTip = (total, tipPercent = .2) => {
  return total * tipPercent
};

console.log(getTip(100));