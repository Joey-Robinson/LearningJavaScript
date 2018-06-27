let notes = [];

const filters = {
  searchText: ''
};

const notesJSON = localStorage.getItem('notes');

if(notesJSON !== null) {
  notes = JSON.parse(notesJSON);
}

const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  document.getElementById('notes').innerHTML = '';
  filteredNotes.forEach((note) => {
    const noteElement = document.createElement('p');
    if(note.title.length > 0) {
      noteElement.textContent = note.title;
    } else {
      noteElement.textContent = 'No Named Note';
    }
    document.getElementById('notes').appendChild(noteElement);
  });
};

renderNotes(notes, filters);

document.getElementById('createNote').addEventListener('click', (event) => {
  notes.push({
    title: '',
    body: ''
  });
  localStorage.setItem('notes', JSON.stringify(notes));
  renderNotes(notes, filters);
});

document.getElementById('searchNotes').addEventListener('input', (event) => {
  filters.searchText = event.target.value;
  renderNotes(notes, filters);
});

document.getElementById('filterBy').addEventListener('change', (event) => {
  console.log(event.target.value);
});


// document.getElementById('fun').addEventListener('change', (event) => {
//   event.target.checked
// });

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
