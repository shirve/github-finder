import { createContext, ReactNode, useReducer } from 'react'
import { RepoViewModel } from '../../models/Repo'
import { UserViewModel } from '../../models/User'
import githubReducer from './GithubReducer'

interface IGithubContext {
  users: UserViewModel[]
  user: UserViewModel
  repos: RepoViewModel[]
  loading: boolean
  getUser: (login: string) => void
  getUserRepos: (login: string) => void
  searchUsers: (text: string) => void
  clearUsers: () => void
}

const GITHUB_URL = 'https://api.github.com'

const GithubContext = createContext({} as IGithubContext)

export const GithubProvider = ({ children }: { children: ReactNode }) => {
  const initialState: {
    users: UserViewModel[]
    user: UserViewModel
    repos: RepoViewModel[]
    loading: boolean
  } = {
    users: [],
    user: {} as UserViewModel,
    repos: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  const searchUsers = async (text: string) => {
    setLoading()
    const params = new URLSearchParams({
      q: text,
    })
    const res = await fetch(`${GITHUB_URL}/search/users?${params}`)
    const { items } = await res.json()
    dispatch({
      type: 'GET_USERS',
      payload: items,
    })
  }

  const getUser = async (login: string) => {
    setLoading()
    const res = await fetch(`${GITHUB_URL}/users/${login}`)
    if (res.status === 404) {
      window.location.href = '/notfound'
    } else {
      const data = await res.json()
      dispatch({
        type: 'GET_USER',
        payload: data,
      })
    }
  }

  const getUserRepos = async (login: string) => {
    setLoading()
    const params = new URLSearchParams({
      sort: 'created',
      per_page: '10',
    })
    const res = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`)
    const data = await res.json()
    dispatch({
      type: 'GET_USER_REPOS',
      payload: data,
    })
  }

  const clearUsers = () => {
    dispatch({
      type: 'CLEAR_USERS',
    })
  }

  const setLoading = () => {
    dispatch({
      type: 'SET_LOADING',
    })
  }

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        getUser,
        getUserRepos,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
