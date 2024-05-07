import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api-portfolio-2-0.onrender.com',
})

export default api
