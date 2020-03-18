import axios from 'axios'


const api = axios.create({
  baseURL: `https://koronamap.cal24.pl/`,
  timeout: 10000,
  headers: {
    'Accept-Version': 1,
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})

export default api
