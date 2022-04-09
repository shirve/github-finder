import React, { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'

const Alert = () => {
  const { alert } = useContext(AlertContext)

  return (
    <React.Fragment>
      {alert.msg !== null && (
        <div className='flex items-start mb-4 space-x-2'>
          {alert.type === 'error' && (
            <svg
              fill='none'
              viewBox='0 0 22 22'
              className='w-6 h-6 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
              ></path>
            </svg>
          )}
          <p className='flex-1 font-semibold'>
            <strong>{alert?.msg}</strong>
          </p>
        </div>
      )}
    </React.Fragment>
  )
}

export default Alert
