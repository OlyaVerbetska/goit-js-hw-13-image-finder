import axios from 'axios';
import './eventListeners.js';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const key = '20318294-75f546a505c22d4a6a744da7a';
const pageNumber = 1;
const perPage = 12;

const fetchImage = async searchQuery => {
  const query = `/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageNumber}&per_page=${perPage}&key=${key}`;
  const {
    data: { hits },
  } = await axios.get(query);
  return hits;
  //   updateImageMarkup(hits);
  //  console.log(hits);
};
export default fetchImage;
