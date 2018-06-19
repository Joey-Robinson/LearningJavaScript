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


// In this block, I'm filtering over the todos array and returning !todo.completed. I'm going to use this variable further down.
const incompleteTodos = todos.filter((todo) => {
  return !todo.completed;
});
// Here, I'm creating an h2 element to server as a staging area
const summary = document.createElement('h2');
// summary.textContent calls the incompleteTodos. Meaning that any todos.completed that are >FALSE< will be shown here
summary.textContent = `You have ${incompleteTodos.length} todos left`;
// Next, I'm again using querySelector to appendChild the summary variable to the body. This results in any todos that are
// false, showing. In this case it would be this: You have 2 todos left.
document.querySelector('body').appendChild(summary);

// Here, I'm using forEach to iterate over the todos array. I'm making a new variable (paragraph) to create a new element
// (p). After that, I'm using paragraph.textContent and setting that to the todo(s).body. Finally, I'm using the 
// document.querySelector to target the <body> element, then using appendChild to add the paragraph variable to the DOM
// This results in all the todos printing to the screen.
todos.forEach((todo) => {
  const paragraph = document.createElement('p');
  paragraph.textContent = todo.body
  document.querySelector('body').appendChild(paragraph);
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