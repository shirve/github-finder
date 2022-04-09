import { createContext, ReactNode, useReducer } from 'react'
import { AlertViewModel } from '../../models/Alert'
import alertReducer from './AlertReducer'

interface IAlertContext {
  alert: AlertViewModel
  setAlert: (msg: string, type: string) => void
}

const AlertContext = createContext({} as IAlertContext)

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const initialState: AlertViewModel = {
    msg: '',
    type: '',
  }

  const [state, dispatch] = useReducer(alertReducer, initialState)

  const setAlert = (msg: string, type: string) => {
    dispatch({
      type: 'SET_ALERT',
      payload: { msg, type },
    })
    setTimeout(
      () =>
        dispatch({
          type: 'REMOVE_ALERT',
        }),
      3000
    )
  }

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  )
}

export default AlertContext
