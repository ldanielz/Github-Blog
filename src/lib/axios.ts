import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://github-blog-er9f2z6yz-ldanielz.vercel.app/api/',
})
export const apiJson = axios.create({
  baseURL: 'http://localhost:3004/',
})
export const apiGitHub = axios.create({
  baseURL: 'https://api.github.com/',
})
