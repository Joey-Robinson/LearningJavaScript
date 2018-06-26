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

const filters = {
  searchText: ''
};

const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  document.getElementById('notes').innerHTML = '';
  filteredNotes.forEach((note) => {
    const noteElement = document.createElement('p');
    noteElement.textContent = note.title;
    document.getElementById('notes').appendChild(noteElement);
  })
};

renderNotes(notes, filters);

document.getElementById('createNote').addEventListener('click', (event) => {
  event.target.textContent = 'wew';
});

document.getElementById('searchNotes').addEventListener('input', (event) => {
  filters.searchText = event.target.value;
  renderNotes(notes, filters);
});


// document.getElementById('removeAllNotes').addEventListener('click', () => {
//   document.querySelectorAll('.note').forEach((note) => {
//     note.remove();
//   })
// });



// const paragraph = document.querySelectorAll('p');
// paragraph.forEach((paragraphs) => {
//   paragraphs.textContent = 'Hello';
//   // paragraphs.remove();
// });

// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'This is a new element';
// document.querySelector('body').appendChild(newParagraph);

// Similar to above, expect this is all of a given tag.

// Here, I'm creating a new element with createElement
// Then, I'm setting the textContent = 'This is a new element'
// After that, I'm using document.querySelector to select the body of the DOM
// And then using appendChild(newParagraph) to append the variable to the body
// Of the dom. So the result is the paragraph being added.

// const paragraph = document.querySelector('p');
// paragraph.remove();
// Will target the first element that's given. Example: p for paragraph
// h1 for h1, div for div, etc. This will target the first in the dom.
