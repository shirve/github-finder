import { createContext, ReactNode, useReducer } from 'react'
import { UserViewModel } from '../../models/User'
import githubReducer from './GithubReducer'

interface IGithubContext {
  users: UserViewModel[]
  loading: boolean
  fetchUsers: () => void
}

const GITHUB_URL = 'https://api.github.com'

const GithubContext = createContext({} as IGithubContext)

export const GithubProvider = ({ children }: { children: ReactNode }) => {
  const initialState: { users: UserViewModel[]; loading: boolean } = {
    users: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  const fetchUsers = async () => {
    setLoading()
    const res = await fetch(`${GITHUB_URL}/users`)
    const data = await res.json()
    dispatch({
      type: 'GET_USERS',
      payload: data,
    })
  }

  const setLoading = () => {
    dispatch({
      type: 'SET_LOADING',
    })
  }

  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading, fetchUsers }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
