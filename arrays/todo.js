// const todoList = [
//   'Get Coffee',
//   'Finish Layout',
//   'Get Water',
//   'Go For Walk',
//   'Take Shower'
// ];

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

const sortTodos = (todos) => {
  todos.sort((a, b) => {
    if(!a.completed && b.completed) {
      return -1;
    } else if(!b.completed && a.completed) {
      return 1;
    } else {
      return 0
    };
  });
};

sortTodos(todos)
console.log(todos);

// const findTodos = (todos,) => {
//   return todos.filter((todo) => {
//     return todo.completed === false
//   });
// };

// console.log(findTodos(todos));
// const findTodo = (todoList, todoBody) => {
//   return todoList.find((todo, index) => {
//     return todo.body.toLowerCase() === todoBody.toLowerCase();
//   });
// };

// console.log(findTodo(todoList, 'Get Water'));

// const removeTodo = (todos, todoText) => {
//   const index = todos.findIndex((todo) => {
//     return todo.body.toLowerCase() === todoText.toLowerCase();
//   });
//   if(index > -1) {
//     todos.splice(index, 1)
//   }
// };

// removeTodo(todos, 'Get Coffee');
// console.log(todos);

// Delete Get Coffee
// Add new item to end
// Remove first get coffee
// console.log(`You have at least ${todoList.length} things to get done today. ${todoList[0]} and ${todoList[todoList.length - 1]} are pretty important`);
// This starts at the third item, which is 2 in the array (Get Water), then removes it from the array. So 2 starts at Get Water, 1 removes Get Water
// todoList.splice(2, 1);
// Simply adding a thing to the end of the array.
// todoList.push('Random Thing');
// Removing first item from array
// todoList.shift();
// console.log(todoList);

// todoList.forEach((todo, index) => {
//   console.log(`${index+1} ${todo}`)
// });

// for(const value of Array.from(todoList)) {
//   todoList.map((todo, index) => {
//     console.log(`${index+1} ${todo}`);
//   })
// }

// for(let count = todoList.length - 1; count >= 0; count--) {
//   console.log(`This is your schedule for the day: ${todoList[count]}`);
// }

// for(let count = 0; count < todoList.length; count++) {
//   console.log(`${count+1} ${todoList[count]}`)
// }