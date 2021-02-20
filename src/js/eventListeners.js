import debounce from 'lodash.debounce';
import refs from './refs.js';
import fetchImage from './fetchImage.js';
import updateImageMarkup from './updateMarkup.js';

refs.input.addEventListener(
  'input',
  debounce(event => {
    event.preventDefault();
    const searchQuery = event.target.value;
    refs.gallery.innerHTML = '';
    fetchImage(searchQuery).then(updateImageMarkup);
  }, 500),
);
