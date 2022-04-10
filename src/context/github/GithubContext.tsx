import { createContext, Dispatch, ReactNode, useReducer } from 'react'
import { RepoViewModel } from '../../models/Repo'
import { UserViewModel } from '../../models/User'
import githubReducer, {
  GITHUB_ACTIONTYPE,
  githubInitialState,
} from './GithubReducer'

interface IGithubContext {
  users: UserViewModel[]
  user: UserViewModel
  repos: RepoViewModel[]
  loading: boolean
  dispatch: Dispatch<GITHUB_ACTIONTYPE>
}

const GithubContext = createContext({} as IGithubContext)

export const GithubProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(githubReducer, githubInitialState)

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
