import axios from 'axios'

export const api = axios.create({
  baseURL: `${process.env.HOME_PAGE}/api/`,
})
export const apiJson = axios.create({
  baseURL: 'http://localhost:3004/',
})
export const apiGitHub = axios.create({
  baseURL: 'https://api.github.com/',
})
