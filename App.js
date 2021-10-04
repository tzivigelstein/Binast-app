import React from 'react'
import { StatusBar } from 'react-native'

import CryptoState from './context/cryptoState'

import useTheme from './hooks/useTheme'
import { AppearanceProvider } from 'react-native-appearance'
import Main from './components/Main'

const App = () => {
  const { background, barStyle } = useTheme()

  return (
    <AppearanceProvider>
      <CryptoState>
        <StatusBar backgroundColor={background} barStyle={barStyle} />
        <Main />
      </CryptoState>
    </AppearanceProvider>
  )
}

export default App
