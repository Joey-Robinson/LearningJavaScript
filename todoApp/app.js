let todos = getSavedTodos();

const filters = {
  searchText: '',
  hideCompleted: false
};

renderTodos(todos, filters);

document.getElementById('searchTodos').addEventListener('input', (event) => {
  filters.searchText = event.target.value;
  renderTodos(todos, filters);
});

document.getElementById('newTodo').addEventListener('submit', (event) => {
  event.preventDefault();
  todos.push({
    text: event.target.elements.text.value,
    complete: false
  });
  saveTodos();
  renderTodos(todos, filters);
  event.target.elements.text.value = '';
});

document.getElementById('hideCompleted').addEventListener('change', (event) => {
  filters.hideCompleted = event.target.checked;
  renderTodos(todos, filters);
});


// document.getElementById('createTodo').addEventListener('click', () => {
//   console.log('fugyeah');
// });

// document.getElementById('newTodo').addEventListener('click', (event) => {
//   event.target.value = ''
// });

// Here I'm using forEach() to go over the paragraphs in the HTML document
// I'm looking for the textContent. of each paragraph to see if any of them contain
// The word 'the'. If it does, I call .remove(); on it, removing that form the DOM.
// const paragraph = document.querySelectorAll('p');
// paragraph.forEach((paragraphs) => {
//   if(paragraphs.textContent.includes('the')) {
//     paragraphs.remove();
//   }
// });