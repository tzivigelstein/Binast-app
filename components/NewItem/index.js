import React from 'react'
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native'
import * as Link from 'expo-linking'
import styleCreator from './styles'
import useTheme from '../../hooks/useTheme'
import { Web } from '../Icons'

const NewItem = ({ item }) => {
  const { id, title, description, publisher, url, thumbnail, date } = item

  const theme = useTheme()

  const styles = styleCreator(theme)

  const handleItemPress = () => {
    Link.openURL(url)
  }

  return (
    <TouchableWithoutFeedback onPress={handleItemPress}>
      <View style={styles.newItemContainer}>
        {thumbnail && <Image style={styles.newImage} source={{ uri: thumbnail }} />}
        <Text style={styles.title}>{title}</Text>
        <View style={styles.newDataContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.sourceTitle} numberOfLines={1}>
              {publisher}
            </Text>
            <Text style={styles.newDate}> - {date}</Text>
          </View>
          <View style={styles.visualButton}>
            <Text style={styles.visualButtonText}>Open</Text>
            <Web width={16} height={16} fill="#fff" />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default NewItem
