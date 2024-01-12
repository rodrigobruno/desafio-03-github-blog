import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com',
})

const githubToken = import.meta.env.VITE_GITHUB_TOKEN
axios.defaults.headers.common.Authorization = `Bearer ${githubToken}`
