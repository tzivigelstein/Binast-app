import React from 'react'
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native'
import styleCreator from './styles'
import useCrypto from '../../hooks/useCrypto'
import priceStatus from '../../helpers/priceStatus'
import useTheme from '../../hooks/useTheme'

const CryptoChip = ({ data, index, setBottomSheetStatus, bottomSheetRef }) => {
  const { background } = useTheme()
  const { imageUrl, name, price, isUp, id, changeDayPercentage } = data
  const theme = useTheme()
  const styles = styleCreator(theme)
  const { setSelectedCrypto } = useCrypto()

  const isFirstItem = index === 0 ? { marginTop: 0 } : {}

  const handlePress = () => {
    setSelectedCrypto(id)
    bottomSheetRef.current?.snapToIndex(1)
  }

  const getPriceColor = status => {
    if (status === priceStatus.PRICE_UP) return theme.success
    else if (status === priceStatus.PRICE_DOWN) return theme.warning
    else return theme.info
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={[styles.container, isFirstItem]}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={{ uri: imageUrl }} />
        </View>
        <View style={styles.nameInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.id}>{id}</Text>
        </View>
        <View style={styles.priceInfo}>
          <Text style={styles.price}>{price}</Text>

          <View style={styles.priceDetailInfo}>
            <Text style={[styles.changeDayPercentage, { color: getPriceColor(isUp) }]}>{changeDayPercentage}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default CryptoChip
