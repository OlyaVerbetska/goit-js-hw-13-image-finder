import debounce from 'lodash.debounce';
import refs from './refs.js';
// import fetchCountry from './fetchCountries.js';
// import updateMarkup from './updateCountriesMarkup.js';

refs.input.addEventListener(
  'input',
  debounce(event => {
    event.preventDefault();
    console.log(event.target.value);
    // const searchQuery = event.target.value;
    // refs.container.innerHTML = '';
    // fetchCountry(searchQuery).then(updateMarkup);
  }, 500),
);