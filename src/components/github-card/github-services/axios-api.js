import axios from 'axios';
const api_key = process.env.REACT_APP_API_KEY
console.log(api_key)
const api = axios.create({
  baseURL: `https://api.github.com/`,
  headers: { 'Authorization': `bearer ${api_key}` }
})


export default api;