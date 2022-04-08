import { createContext, ReactNode, useReducer } from 'react'
import { UserViewModel } from '../../models/User'
import githubReducer from './GithubReducer'

interface IGithubContext {
  users: UserViewModel[]
  loading: boolean
  searchUsers: (text: string) => void
  clearUsers: () => void
}

const GITHUB_URL = 'https://api.github.com'

const GithubContext = createContext({} as IGithubContext)

export const GithubProvider = ({ children }: { children: ReactNode }) => {
  const initialState: { users: UserViewModel[]; loading: boolean } = {
    users: [],
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
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
