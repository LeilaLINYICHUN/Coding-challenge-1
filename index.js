const shareIcon = document.querySelector('.share');
console.log(shareIcon);
// // shareButton.addEventListener('click', (event) => {
// //   event.target.style.fill = 'hsl(210, 46%, 95%)';
// // });

const modal = document.querySelector('.popup');
const button = document.querySelector('.circle');

button.addEventListener('click', openModal);
//shareIcon.addEventListener('click', openModal);

function openModal() {
  modal.style.display = 'block';
  shareIcon.style.stroke = 'hsl(210, 46%, 95%)';
  button.style.backgroundColor = 'hsl(214, 17%, 51%)';
}

// button.addEventListener('click', (open) => {
//   event.target.style.backgroundColor = 'hsl(214, 17%, 51%)';
//   event.target.style.fill = 'hsl(210, 46%, 95%)';
// });

// const toggleModal = () => {
//   document.querySelector('.circle').classList.toggle('popup--hidden');
// };

// document.querySelector('.popup'), addEventListener('click', toggleModal);

//'hsl(214, 17%, 51%)'
