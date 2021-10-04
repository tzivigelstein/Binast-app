import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import useTheme from '../../hooks/useTheme'

const Container = ({ children }) => {
  const { background } = useTheme()
  return <View style={[styles.container, { backgroundColor: background }]}>{children}</View>
}

export default Container
