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

const createTodo = (event) => {
  console.log('hi');
}
document.getElementById('createTodo').addEventListener('click', createTodo);

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

// const paragraphs = document.querySelectorAll('p');
// paragraphs.forEach((paragraph) => {
  
// })
// paragraphs.forEach((paragraph) => {
//   if(paragraph.textContent.includes('The')) {
//     paragraph.textContent = '';
//   }
// });
