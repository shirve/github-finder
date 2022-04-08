import { UserViewModel } from '../../models/User'

const initialState: { users: UserViewModel[]; loading: boolean } = {
  users: [],
  loading: false,
}

type ACTIONTYPE =
  | { type: 'GET_USERS'; payload: UserViewModel[] }
  | { type: 'SET_LOADING' }

const githubReducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      }
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
