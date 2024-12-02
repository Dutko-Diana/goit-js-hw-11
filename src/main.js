'use strict';

import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

const form = document.querySelector('.form');
export const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

input.value = localStorage.getItem('value');

form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  if (event.currentTarget.elements.search.value.trim() === '') {
    return;
  }

  const value = event.currentTarget.elements.search.value.trim();
  localStorage.setItem('value', value);

  fetchImages();
  renderImages();
}
