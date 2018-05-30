// Undefined is the absence of w/e 
// const name = 'Jen';
// Note: This doesn't work with const. var and let only, sadly.
// let name;
// name = 'Jen'
// Will return undefined
// if(name === undefined) {
//   console.log(`Yup, it's undefined`);
// } else {
//   console.log(`Nope. It's not, ${name} is the variable name`);
// }
// console.log(name);

// When an argument isn't provided but named, undefined is returned
// const square = (number) => {
//   return number
// }

// const result = square();
// console.log(result);

// const age = 32;
// console.log(age);

// Have to use let, as const can't be mutated
let age = 32;
// age = undefined;
age = null;
console.log(age);