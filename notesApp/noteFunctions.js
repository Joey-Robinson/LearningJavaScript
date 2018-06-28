const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes');
  if(notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

const generateNote = (note) => {
  const noteElement = document.createElement('div');
  const textElement = document.createElement('span');
  const buttonElement = document.createElement('button');
  buttonElement.textContent = 'x';
  noteElement.appendChild(buttonElement);
  if(note.title.length > 0) {
    textElement.textContent = note.title;
  } else {
    textElement.textContent = 'No Named Note';
  }
  noteElement.appendChild(textElement);
  return noteElement;
};

const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  document.getElementById('notes').innerHTML = '';
  filteredNotes.forEach((note) => {
    const noteElement = generateNote(note);
    document.getElementById('notes').appendChild(noteElement);
  });
};