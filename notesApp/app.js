const notes = [{
  title: 'My next trip',
  body: 'I would like to go to Spain'
}, {
  title: 'Habbits to work on',
  body: 'Exercise. Eating Healthier.'
}, {
  title: 'New Monitor',
  body: 'Get another monitor'
}];

// const paragraph = document.querySelector('p');
// paragraph.remove();
// Will target the first element that's given. Example: p for paragraph
// h1 for h1, div for div, etc. This will target the first in the dom.

const paragraph = document.querySelectorAll('p');
paragraph.forEach((paragraphs) => {
  paragraphs.textContent = 'Hello';
  // paragraphs.remove();
});
// Similar to above, expect this is all of a given tag.

// Here, I'm creating a new element with createElement
// Then, I'm setting the textContent = 'This is a new element'
// After that, I'm using document.querySelector to select the body of the DOM
// And then using appendChild(newParagraph) to append the variable to the body
// Of the dom. So the result is the paragraph being added.
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new element';
document.querySelector('body').appendChild(newParagraph);