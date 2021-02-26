import refs from './refs.js';
import serviceImage from './fetchImage.js';
import updateImageMarkup from './updateMarkup.js';

import { noImagesMessage, noMoreImagesMessage } from './notifications.js';

refs.searchForm.addEventListener('submit', event => {

  event.preventDefault();
  // console.log(event.target);
  // console.log(event.currentTarget);
  // console.log(refs.input.value.length);
  serviceImage.searchQuery = refs.input.value;
  if (refs.input.value < 1) {
    return;
  }

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
  // refs.searchForm.reset();
});

refs.loadBtn.addEventListener('click', () => {
  serviceImage.fetchImage().then(hits => {
    if (hits.length === 0) {
      noMoreImagesMessage();
      return;
    }
    updateImageMarkup(hits);
    refs.loadBtn.classList.remove('is-hidden');

    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  });
});

// refs.input.addEventListener(
//   'input',
//   debounce(event => {
//     event.preventDefault();
//     serviceImage.searchQuery = event.target.value;
//     refs.gallery.innerHTML = '';
//     serviceImage.resetPage();
//     refs.loadBtn.classList.add('is-hidden');
//     serviceImage.fetchImage().then(hits => {
//       if (hits.length === 0) {
//         noImagesMessage();
//         return;
//       }
//       updateImageMarkup(hits);
//       refs.loadBtn.classList.remove('is-hidden');
//       window.scrollTo({
//         top: document.documentElement.offsetHeight,
//         behavior: 'smooth',
//       });
//     });
//   }, 500),
// );

// refs.loadBtn.addEventListener('click', () => {
//   serviceImage.fetchImage().then(hits => {

//     updateImageMarkup(hits);
//     refs.loadBtn.classList.remove('is-hidden');
//     window.scrollTo({
//       top: document.documentElement.offsetHeight,
//       behavior: 'smooth',
//     });
//   });
// });
