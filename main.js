// GET ELEMENTS
const modal = document.getElementById('simpleModal');
const modalBtn = document.getElementById('modalBtn');
const closeBtn = document.getElementsByClassName('closeBtn')[0];

modalBtn.addEventListener('click', openModal);

function openModal() {
  modal.style.display = 'block';
}

closeBtn.addEventListener('click', closeModal);

function closeModal() {
  modal.style.display = 'none';
}

// LISTEN FOR OUTSIDE CLICK
window.addEventListener('click', clickOutside);

function clickOutside(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
