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
  const filteredNotes = notes.filter((notes) => {
    return notes.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  document.getElementById('notes').innerHTML = '';
  filteredNotes.forEach((note) => {
    const noteElement = document.createElement('p');
    noteElement.textContent = note.title;
    document.getElementById('notes').appendChild(noteElement);
  });
};

renderNotes(notes, filters);
// const paragraphs = document.querySelectorAll('p');
// paragraphs.forEach((p) => {
//   p.textContent[0] = 'fugyeah';
// });

// const newParagraphs = document.createElement('p');
// newParagraphs.textContent = 'New shit';
// document.querySelector('body').appendChild(newParagraphs);

const createNote = (event) => {
  event.preventDefault();
  console.log('Hi');
}

// const removeAllNotes = (event) => {
//   event.preventDefault();
//   console.log('Removed');
// }
document.getElementById('createNote').addEventListener('click', createNote);
document.getElementById('removeAllNotes').addEventListener('click', (event) => {
  document.querySelectorAll('.note').forEach((note) => {
    note.remove();
  });
});

document.getElementById('searchNotes').addEventListener('input', (event) => {
  filters.searchText = event.target.value;
  renderNotes(notes, filters);
});