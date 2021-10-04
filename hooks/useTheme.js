import { useState, useEffect } from 'react'
import { Appearance, useColorScheme } from 'react-native-appearance'
import theme from '../theme'

const useTheme = () => {
  const colorScheme = useColorScheme()
  
  return colorScheme === 'dark' ? theme.darkColors : theme.lightColors
}

export default useTheme
