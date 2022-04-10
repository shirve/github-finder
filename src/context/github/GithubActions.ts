import axios from 'axios'

const GITHUB_URL = 'https://api.github.com'
const github = axios.create({
  baseURL: GITHUB_URL,
})

export const searchUsers = async (text: string) => {
  const params = new URLSearchParams({
    q: text,
  })
  const res = await github.get(`/search/users?${params}`)
  return res.data.items
}

export const getUserAndRepos = async (login: string) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ])
  return { user: user.data, repos: repos.data }
}
