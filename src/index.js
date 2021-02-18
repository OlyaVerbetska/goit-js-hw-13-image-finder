import './styles.css';
import 'material-design-icons/iconfont/material-icons.css'
//import './js/eventListeners.js'
import axios from 'axios';
import imageCard from './templates/image-card.hbs'


axios.defaults.baseURL = 'https://pixabay.com/api/';
//axios.defaults.headers.common['Authorization'] ='Bearer 20318294-75f546a505c22d4a6a744da7a';

const refs = {
    input: document.querySelector('#search-form input'),
    gallery: document.querySelector('.gallery')
  };
console.log(refs.gallery)

const searchQuery = 'cat';
const key = '20318294-75f546a505c22d4a6a744da7a'
const pageNumber = 1;
const perPage = 1;

const query = `/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageNumber}&per_page=${perPage}&key=${key}`


const fetchImage = async () => {
    const { data: {hits} } = await axios.get(query);
    // updateImageMarkup(data);
    console.log(hits);
 console.log(hits.webformatURL)
}
fetchImage();



// function updateImageMarkup (data) {
//     const markup = imageCard(data);
//     refs.gallery.insertAdjacentHTML('beforeend', markup);
// }


