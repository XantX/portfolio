import axios from 'axios';
const token = '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'
const api = axios.create({
  baseURL: `https://api.github.com/`,
  headers: {'Authorization': `bearer ${token}`}
})


export default api;
