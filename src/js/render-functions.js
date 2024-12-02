// const list = document.querySelector('.list');

export function renderImages(arr) {
  console.log(arr);

  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="list-item">
      <div class="thumb"><img src="${webformatURL}" alt="${tags} class="list-img"></div>
      <ul class="info-box">
      <li class="likes">
      <h2 class="likes-text">Likes</h2>
      <p class="likes-amount">${likes}</p>
      </li>
      <li class="views">
      <h2 class="views-text">Views</h2>
      <p class="views-amount">${views}</p>
      </li>
      <li class="comments">
      <h2 class="comments-text">Comments</h2>
      <p class="comments-amount">${comments}</p>
      </li>
      <li class="downloads">
      <h2 class="downloads-text">Downloads</h2>
      <p class="downloads-amount">${downloads}</p>
      </li>
      </ul>
      </li>
        `
    )
    .join('');
}
