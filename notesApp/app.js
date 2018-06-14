// const paragraph = document.querySelector('p');
// paragraph.remove();

const paragraphs = document.querySelectorAll('p');
paragraphs.forEach((p) => {
  p.textContent[0] = 'fugyeah';
});