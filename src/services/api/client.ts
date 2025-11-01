import { API_URL, TMDB_ACCESS_TOKEN } from '@env'
import axios from 'axios'

export const api = axios.create({
  baseURL: API_URL,
  timeout: 10_000,
  headers: {
    Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
  },
})

api.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
)

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      console.error('API Error:', error.response.status, error.response.data)
    } else if (error.request) {
      console.error('Network Error:', error.message)
    } else {
      console.error('Error:', error.message)
    }
    return Promise.reject(error)
  },
)
