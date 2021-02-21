import debounce from 'lodash.debounce';
import refs from './refs.js';
import serviceImage from './fetchImage.js';
import updateImageMarkup from './updateMarkup.js';

// let searchQuery = '';
// let pageNumber = 1;
// console.log(serviceImage);
// console.log(serviceImage.searchQuery);
// console.log(serviceImage.pageNumber);
refs.input.addEventListener(
  'input',
  debounce(event => {
    event.preventDefault();
    serviceImage.searchQuery = event.target.value;
    refs.gallery.innerHTML = '';

    serviceImage.resetPage();
    serviceImage.fetchImage(serviceImage.searchQuery).then(updateImageMarkup);
  }, 500),
);

refs.loadBtn.addEventListener('click', () => {
  serviceImage.fetchImage(serviceImage.searchQuery).then(updateImageMarkup);
  
});
