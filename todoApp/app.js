const todos = [{
  body: 'Get Coffee',
  completed: true
}, {
  body: 'Finish Layout',
  completed: true
}, {
  body: 'Get Water',
  completed: true
}, {
  body: 'Go For Walk',
  completed: false
}, {
  body: 'Take Shower',
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
  const summary = document.createElement('h3');
  summary.textContent = `You have ${incompleteTodos.length} todost left`
  document.getElementById('todos').appendChild(summary);
  filteredTodos.forEach((todo) => {
    const para = document.createElement('p');
    para.textContent = todo.body;
    document.getElementById('todos').appendChild(para);
  });
};

// const createTodo = (event) => {
//   console.log('hi');
// }
document.getElementById('createTodo').addEventListener('click', createTodo);

document.getElementById('todoInput').addEventListener('input', (event) => {
  console.log(event.target.value);
});

// const incompleteTodos = todos.filter((todo) => {
//   return !todo.completed;
// });

// const summary = document.createElement('h3');
// summary.textContent = `You have ${incompleteTodos.length} todost left`
// document.querySelector('body').appendChild(summary);

// todos.forEach((todo) => {
//   const para = document.createElement('p');
//   para.textContent = todo.body;
//   document.querySelector('body').appendChild(para);
// });

document.getElementById('searchTodos').addEventListener('input', (event) => {
  filter.searchText = event.target.value;
});

// const paragraphs = document.querySelectorAll('p');
// paragraphs.forEach((paragraph) => {
  
// })
// paragraphs.forEach((paragraph) => {
//   if(paragraph.textContent.includes('The')) {
//     paragraph.textContent = '';
//   }
// });
