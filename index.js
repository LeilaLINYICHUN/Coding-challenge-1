const shareIcon = document.querySelector('.share');
const modal = document.querySelector('.popup');
const button = document.querySelector('.circle');

button.addEventListener('click', openModal);

function openModal() {
  modal.style.display = 'block';
  shareIcon.firstChild.style.fill = 'hsl(210, 46%, 95%)';
  button.style.backgroundColor = 'hsl(214, 17%, 51%)';
}
