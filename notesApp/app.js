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
document.getElementById('createNote').addEventListener('click', createNote);
