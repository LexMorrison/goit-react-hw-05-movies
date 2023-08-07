import Notiflix from 'notiflix';
import axios from 'axios';

export async function fetchData(FLEX_URL, page = 1, search = '') {
  try {
    const BASE_URL = `https://api.themoviedb.org/3`;
    const API_KEY = `e001340a26371433e04561724452dcfa`;
    let URL = BASE_URL + FLEX_URL + `?api_key=${API_KEY}`;

    if (search) {
      URL = URL + `&query=${search.trim()}`;
    }
    if (page) {
      URL = URL + `&page=${page}`;
    }
    const responce = await axios.get(URL);
    return responce;
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
}
