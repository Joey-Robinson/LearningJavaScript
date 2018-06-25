const todos = [{
  text: 'Get Coffee',
  completed: false
}, {
  text: 'Finish Layout',
  completed: false
}, {
  text: 'Get Water',
  completed: false
}, {
  text: 'Go For Walk',
  completed: false
}, {
  text: 'Take Shower',
  completed: false
}];

const filters = {
  searchText: ''
};

const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  const incompleteTodos = filteredTodos.filter((todo) => {
    return !todo.completed;
  });
  document.getElementById('todos').innerHTML = '';
  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  document.getElementById('todos').appendChild(summary);
  filteredTodos.forEach((todo) => {
    const paragraphs = document.createElement('p');
    paragraphs.textContent = todo.text;
    document.getElementById('todos').appendChild(paragraphs); 
  });
};

renderTodos(todos, filters);

document.querySelector('#createTodo').addEventListener('click', () => {
  console.log('fugyeah');
});

document.querySelector('#newTodo').addEventListener('click', (event) => {
  event.target.value = ''
});

document.getElementById('searchTodos').addEventListener('input', (event) => {
  filters.searchText = event.target.value;
  renderTodos(todos, filters);
});


// Here I'm using forEach() to go over the paragraphs in the HTML document
// I'm looking for the textContent. of each paragraph to see if any of them contain
// The word 'the'. If it does, I call .remove(); on it, removing that form the DOM.
// const paragraph = document.querySelectorAll('p');
// paragraph.forEach((paragraphs) => {
//   if(paragraphs.textContent.includes('the')) {
//     paragraphs.remove();
//   }
// });