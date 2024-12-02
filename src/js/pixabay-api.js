import { renderImages } from './render-functions';

const API_KEY = '47411566-1fe68ca00fdccc973e940a4de';
const list = document.querySelector('.list');

export function fetchImages(value) {
  //   const value = localStorage.getItem('value');

  const params = new URLSearchParams({
    key: API_KEY,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  fetch(`https://pixabay.com/api/?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => list.insertAdjacentHTML('beforeend', renderImages(data.hits)))
    .catch(error => console.log(error.message));
}
