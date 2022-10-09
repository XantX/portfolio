import axios from 'axios';
const api_key = process.env.REACT_APP_API_KEY
const token_test = process.env.REACT_APP_TEST_TOKEN
console.log(token_test)
const api = axios.create({
  baseURL: `https://api.github.com/`,
  headers: { 'Authorization': `bearer ${api_key}` }
})


export default api;
