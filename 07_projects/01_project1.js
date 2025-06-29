const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach((button) => {
//   const color = button.getAttribute('id');
//   console.log(color);
  button.addEventListener('click', (event) => {
    console.log(event);
    console.log(event.target);
    // const color = button.getAttribute('id');
    const color = event.target.id;
    body.style.backgroundColor = color;
  });
});
