import React, { createContext, useContext } from 'react'
import Alert from '../../components/Alert'
import useCrypto from '../../hooks/useCrypto'
import useOnline from '../../hooks/useOnline'
import { Offline, Error } from '../../components/Icons'

const errorContext = createContext()

export const useError = () => useContext(errorContext)

const ErrorState = ({ children }) => {
  const { error } = useCrypto()
  const online = useOnline()
  
  return (
    <errorContext.Provider value={{}}>
      <Alert active={error !== 'null'} Icon={Error} message={error && error} />
      <Alert active={!online} Icon={Offline} message="You are offline" />
      {children}
    </errorContext.Provider>
  )
}

export default ErrorState
