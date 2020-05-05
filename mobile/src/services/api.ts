import axios from 'axios';

const api = axios.create({
  baseURL: 'https://megahack-financee.herokuapp.com/'
});

export default api;
