'use strict';

import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
export const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

// input.value = localStorage.getItem('value');

form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  if (event.currentTarget.elements.search.value.trim() === '') {
    iziToast.error({
      position: 'topRight',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  }

  const value = event.currentTarget.elements.search.value.trim();
  //   localStorage.setItem('value', value);

  fetchImages(value);
  renderImages();
}
