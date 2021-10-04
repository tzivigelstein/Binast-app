import React, { useEffect } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import * as Link from 'expo-linking'
import styleCreator from './styles'
import theme from '../../theme'

const NewItem = ({ item }) => {
  const { id, title, url, source, published_at } = item

  const styles = styleCreator(theme)

  const handleItemPress = () => {
    Link.openURL(url)
  }

  return (
    <TouchableWithoutFeedback onFocus={() => console.log('focus')} onPress={handleItemPress}>
      <View style={styles.newItemContainer}>
        <Text>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default NewItem
