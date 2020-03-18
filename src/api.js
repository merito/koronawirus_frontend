import axios from 'axios'


const api = axios.create({
  baseURL: `/api/`,
  timeout: 10000,
  headers: {
    'Accept-Version': 1,
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})

export default api
