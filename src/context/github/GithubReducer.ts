import { RepoViewModel } from '../../models/Repo'
import { UserViewModel } from '../../models/User'

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

type ACTIONTYPE =
  | { type: 'GET_USERS'; payload: UserViewModel[] }
  | { type: 'GET_USER'; payload: UserViewModel }
  | { type: 'GET_USER_REPOS'; payload: RepoViewModel[] }
  | { type: 'CLEAR_USERS' }
  | { type: 'SET_LOADING' }

const githubReducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      }
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        loading: false,
      }
    case 'GET_USER_REPOS':
      return {
        ...state,
        repos: action.payload,
        loading: false,
      }
    case 'CLEAR_USERS':
      return initialState
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
