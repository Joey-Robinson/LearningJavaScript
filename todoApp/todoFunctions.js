const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos');
  if(todosJSON !== null) {
    return todos = JSON.parse(todosJSON);
  } else {
    return [];
  }
};

const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const renderTodos = (todos, filters) => {
  let filteredTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  filteredTodos = filteredTodos.filter((todo) => {
    if(filters.hideCompleted) {
      return !todo.completed
    } else {
      return true
    }
  });
  const incompleteTodos = filteredTodos.filter((todo) => {
    return !todo.completed;
  });
  document.getElementById('todos').innerHTML = '';
  document.getElementById('todos').appendChild(generateSummaryDom(incompleteTodos));
  filteredTodos.forEach((todo) => {
    document.getElementById('todos').appendChild(generateTodoDom(todo)); 
  });
};

const generateTodoDom = (todo) => {
  const paragraphs = document.createElement('p');
  paragraphs.textContent = todo.text;
  return paragraphs;
};

const generateSummaryDom = (incompleteTodos) => {
  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary;
};