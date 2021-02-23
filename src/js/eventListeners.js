import debounce from 'lodash.debounce';
import refs from './refs.js';
import serviceImage from './fetchImage.js';
import updateImageMarkup from './updateMarkup.js';

import { noImagesMessage } from './notifications.js';

refs.input.addEventListener(
  'input',
  debounce(event => {
    event.preventDefault();
    serviceImage.searchQuery = event.target.value;
    refs.gallery.innerHTML = '';
    serviceImage.resetPage();
    refs.loadBtn.classList.add('is-hidden');
    serviceImage.fetchImage().then(hits => {
      if (hits.length === 0) {
        noImagesMessage();
        return;
      }
      updateImageMarkup(hits);
      refs.loadBtn.classList.remove('is-hidden');
      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth',
      });
    });
  }, 500),
);

refs.loadBtn.addEventListener('click', () => {
  serviceImage.fetchImage().then(hits => {

    updateImageMarkup(hits);
    refs.loadBtn.classList.remove('is-hidden');
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  });
});
