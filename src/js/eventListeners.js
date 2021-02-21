import debounce from 'lodash.debounce';
import refs from './refs.js';
import serviceImage from './fetchImage.js';
import updateImageMarkup from './updateMarkup.js';

refs.input.addEventListener(
  'input',
  debounce(event => {
    event.preventDefault();
    serviceImage.searchQuery = event.target.value;
    refs.gallery.innerHTML = '';
    serviceImage.resetPage();
    refs.loadBtn.classList.add('is-hidden');
    serviceImage.fetchImage().then(updateImageMarkup);
    refs.loadBtn.classList.remove('is-hidden');
    console.log(refs.image);
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  }, 500),
);

refs.loadBtn.addEventListener('click', () => {
  serviceImage.fetchImage().then(updateImageMarkup);
  refs.loadBtn.classList.remove('is-hidden');
  window.scrollTo({
    top: document.documentElement.offsetHeight,
    behavior: 'smooth',
  });
});
