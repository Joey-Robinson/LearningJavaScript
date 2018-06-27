const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes');
  if(notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

const generateNote = (note) => {
  const noteElement = document.createElement('p');
  if(note.title.length > 0) {
    noteElement.textContent = note.title;
  } else {
    noteElement.textContent = 'No Named Note';
  }
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