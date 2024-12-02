import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
export const input = document.querySelector('.input');
const list = document.querySelector('.list');

form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  if (event.currentTarget.elements.search.value.trim() === '') {
    clearGallery();
    return;
  }

  const value = event.currentTarget.elements.search.value.trim();

  fetchImages(value)
    .then(data => {
      if (data.total === 0) {
        clearGallery();
      }

      list.innerHTML = '';

      list.insertAdjacentHTML('afterbegin', renderImages(data.hits));
    })
    .catch(error => console.log(error.statusText));
}

function clearGallery() {
  iziToast.error({
    position: 'topRight',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    maxWidth: 432,
  });
  list.innerHTML = '';
}
