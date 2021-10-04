import React from 'react'
import { FlatList } from 'react-native'
import styles from './styles'
import CryptoChip from '../CryptoChip'
import useCrypto from '../../hooks/useCrypto'

const CryptoList = ({ setBottomSheetStatus, bottomSheetRef }) => {
  const { cryptos, selectedCrypto, loading } = useCrypto()

  const filterCryptosBySelected = ({ id }) => id !== selectedCrypto.id

  return (
    <FlatList
      style={styles.list}
      data={cryptos && cryptos}
      renderItem={({ item, index }) => (
        <CryptoChip setBottomSheetStatus={setBottomSheetStatus} bottomSheetRef={bottomSheetRef} index={index} key={item.id} data={item} />
      )}
    />
  )
}

export default CryptoList
