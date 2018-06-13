// const notes = ['Note One', 'Note Two', 'Note Three'];
const notes = [{
  title: 'My next trip',
  body: 'I would like to go to Spain'
}, {
  title: 'Habbits to work on',
  body: 'Exercise. Eating Healthier.'
}, {
  title: 'New Monitor',
  bod: 'Get another monitor'
}];

// const findNote = (notes, noteTitle) => {
//   const index = notes.findIndex((note, index) => {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   return notes[index];
// };

const findNote = (notes, noteTitle) => {
  return notes.find((note, index) => {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

console.log(findNote(notes, 'MY NEXT TRIP'));
// notes.findIndex((note, index) => {
//   console.log(note, index);
// });
// console.log(notes.indexOf('Note One'));

// for(let count = 2; count >= 0; count--) {
//   console.log(count);
// }

// for(let count = notes.length - 1; count >= 0; count--) {
//   console.log(notes[count]);
// }

// for(let value of notes) {
//   value += ' Test';
//   console.log(value);
// }

// The parameter (item) here is the notes variable. So when I console.log() it, it will print the array as 3 individual items
// The parameter (index) here is the placement of each item in the array. Using console.log() will print Note One 0, for example, and continue on until done.
// notes.forEach((item, index) => {
//   console.log(item, index);
// });
// console.log(notes);
// notes.splice(0, 0, 'Note Zero');
// First argument is where, or the index.
// Second argument is the number of items you want to remove. (Or add)
// Third argument is optional. It allows you to inject an item depending on where your first and second arguments are located at. 
// Optionally, you can use the second argument to remove that location (eg: 1, 1, 'Something') would remove
// 'Note Two' and replace it with 'Note Zero'
// notes[2] = 'New Note Three';
// notes.unshift('Notes Zero');
// console.log(notes.length);
// notes.push('Note Four');
// console.log(notes[notes.length - 1]);
// notes.pop();
// console.log(notes.shift());