import axios from 'axios';

const api = axios.create({
  baseURL: `https://api.github.com/`,
  headers: { 'Authorization': `bearer ${process.env.REACT_APP_API_KEY}` }
})


export default api;
