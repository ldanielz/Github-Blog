import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000/api/',
})
export const apiJson = axios.create({
  baseURL: 'http://localhost:3004/',
})
export const apiGitHub = axios.create({
  baseURL: 'https://api.github.com/',
})
