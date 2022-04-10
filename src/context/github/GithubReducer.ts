import { RepoViewModel } from '../../models/Repo'
import { UserViewModel } from '../../models/User'

export const githubInitialState: {
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

export type GITHUB_ACTIONTYPE =
  | { type: 'GET_USERS'; payload: UserViewModel[] }
  | {
      type: 'GET_USER_AND_REPOS'
      payload: { user: UserViewModel; repos: RepoViewModel[] }
    }
  | { type: 'CLEAR_USERS' }
  | { type: 'SET_LOADING' }

const githubReducer = (
  state: typeof githubInitialState,
  action: GITHUB_ACTIONTYPE
) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      }
    case 'GET_USER_AND_REPOS':
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      }
    case 'CLEAR_USERS':
      return githubInitialState
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}

export default githubReducer
