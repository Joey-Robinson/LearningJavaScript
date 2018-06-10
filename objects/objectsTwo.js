// const favoriteBook = {
//   title: 'The Name of The Wind',
//   author: 'Patrick Rothfuss',
//   pages: '662'
// };

// const secondBook = {
//   title: 'The Wise Man\'\s',
//   author: 'Patrick Rothfuss',
//   pages: '994'
// };

// const getSummary = (book) => {
//   return {
//     summary: `${book.title} written by ${book.author}.`,
//     pageCountSummary: `${book.title} is ${book.pages} long`
//   }
// }


// console.log(getSummary(favoriteBook));
// console.log(getSummary(secondBook));

const tempConversion = (fahrenheit) => {
  return {
    celsius: (fahrenheit - 32) * 5 / 9,
    kelvin: (fahrenheit + 459.67) * 5 / 9
  }
};

console.log(tempConversion(65));
