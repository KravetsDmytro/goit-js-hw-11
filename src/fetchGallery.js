import axios from 'axios';

const API_KEY = '35566012-73194189fcef75c31768f8916';
const URL = `https://pixabay.com/api/`;

export class ApiGalleryImg {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.perPage = 40;
  }
  async fetchGallery() {
    const param = {
      params: {
        key: API_KEY,
        q: this.searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: this.perPage,
        page: this.page,
      },
    };
    try {
      const response = await axios.get(URL, param);
      this.incrementPage();
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  incrementPage() {
    this.page = this.page + 1;
  }
  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}