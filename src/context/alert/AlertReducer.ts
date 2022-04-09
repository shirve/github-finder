import { AlertViewModel } from '../../models/Alert'

const initialState: AlertViewModel = {
  msg: '',
  type: '',
}

type ACTIONTYPE =
  | { type: 'SET_ALERT'; payload: { msg: string; type: string } }
  | { type: 'REMOVE_ALERT' }

const alertReducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'SET_ALERT':
      return action.payload
    case 'REMOVE_ALERT':
      return initialState
    default:
      return state
  }
}

export default alertReducer
