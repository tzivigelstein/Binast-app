import React from 'react'
import { Image, View, Text } from 'react-native'
import styleCreator from './styles'
import useCrypto from '../../hooks/useCrypto'
import useTheme from '../../hooks/useTheme'

const Header = () => {
  const { selectedCrypto, loading } = useCrypto()

  const theme = useTheme()
  const styles = styleCreator(theme)

  const { id, name, imageUrl, price, changeDayPrice, changeDayPercentage } = selectedCrypto

  const dayDifferenceStyles = parseInt(changeDayPrice) < 0 ? { color: theme.warning } : { color: theme.success }

  return (
    <View style={styles.header}>
      <View style={styles.coinInfoContainer}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={{ uri: imageUrl }} />
        </View>
        <View style={styles.coinInfo}>
          <Text style={styles.coinInfoName}>{name}</Text>
          <Text style={styles.coinInfoId}>{id}</Text>
        </View>
      </View>
      <Text style={styles.price}>{price}</Text>
      <View style={styles.dayDifferenceContainer}>
        <Text style={[styles.dayDifference, dayDifferenceStyles]}>{changeDayPrice}</Text>
        <Text style={[styles.dayDifference, dayDifferenceStyles]}>{!loading && `(${changeDayPercentage})`}</Text>
      </View>
    </View>
  )
}

export default Header
