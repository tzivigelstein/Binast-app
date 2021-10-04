import React, { useState, useRef, useMemo, useEffect, useCallback } from 'react'
import { View, Text, Image, TouchableWithoutFeedback, ScrollView } from 'react-native'
import styleCreator from './styles'

import useCrypto from '../../hooks/useCrypto'
import useCoinHistory from '../../hooks/useCoinHistory'
import useTheme from '../../hooks/useTheme'

import Container from '../Container'

import CryptoList from '../CryptoList'

import BottomSheet, { BottomSheetBackdrop, BottomSheetFlatList, BottomSheetScrollView } from '@gorhom/bottom-sheet'
import Chart from '../Chart'
import { Shadow } from 'react-native-shadow-2'
import { Arrow, Dash } from '../Icons'
import priceStatus from '../../helpers/priceStatus'
import useCoinNews from '../../hooks/useCoinNews'
import NewItem from '../NewItem'

const Main = () => {
  const theme = useTheme()
  const styles = styleCreator(theme)
  const { selectedCrypto } = useCrypto()

  const {
    id,
    isUp,
    changeDayPrice,
    changeDayPercentage,
    imageUrl,
    name,
    lowDay,
    highDay,
    openDay,
    marketCapital,
    volumeHour,
    price,
  } = selectedCrypto

  const bottomSheetRef = useRef(null)
  const chartData = useCoinHistory(id)
  const [coinNews, getData] = useCoinNews(id)

  const [priceArrowOrientation, setPriceArrowOrientation] = useState('flat')
  const [priceColor, setPriceColor] = useState(theme.success)

  useEffect(() => {
    setPriceArrowOrientation(() => getPriceOrientation(isUp))
    setPriceColor(() => getPriceColor(isUp))
  }, [isUp])

  const handleBottomSheetClose = () => {
    bottomSheetRef.current?.close()
  }

  const handleBottomSheetChange = useCallback(
    index => {
      if (index === 2) {
        getData(id)
      } else {
        console.log('ya hay info, o no se abrio el sheet al lvl 2')
      }
    },
    [id]
  )

  console.log('main', { coinNews })

  const snapPoints = useMemo(() => ['25%', '60%', '90%'], [])

  const getPriceColor = status => {
    if (status === priceStatus.PRICE_UP) return theme.success
    else if (status === priceStatus.PRICE_DOWN) return theme.warning
    else return theme.info
  }

  const getPriceOrientation = status => {
    if (status === priceStatus.PRICE_UP) return 'up'
    else if (status === priceStatus.PRICE_DOWN) return 'down'
    else return 'flat'
  }

  // console.log({ coinNews })

  return (
    <Container>
      <View style={styles.headingTextContainer}>
        <Text style={styles.headingText}>Crypto</Text>
      </View>
      <CryptoList bottomSheetRef={bottomSheetRef} />

      <BottomSheet
        onChange={handleBottomSheetChange}
        backdropComponent={props => <BottomSheetBackdrop {...props} appearsOnIndex={1} />}
        backgroundStyle={styles.bottomSheetContainer}
        style={styles.bottomSheetWrapper}
        handleIndicatorStyle={{ backgroundColor: '#ddd' }}
        enablePanDownToClose={true}
        snapPoints={snapPoints}
        ref={bottomSheetRef}
        detached={true}
        onClose={handleBottomSheetClose}
      >
        <View style={{ paddingHorizontal: 16 }}>
          <Shadow
            viewStyle={styles.image}
            safeRender={true}
            startColor="rgba(0,0,0,0.05)"
            distance={12}
            getChildRadius={true}
          >
            <Image style={{ width: 42, height: 42, borderRadius: 999 }} source={{ uri: imageUrl }} />
          </Shadow>
          <View style={styles.headingInformation}>
            <View>
              <Text style={styles.price}>{price}</Text>
              <Text style={styles.name}>{name}</Text>
            </View>
            <View style={styles.changeDayContainer}>
              {priceArrowOrientation === 'flat' ? (
                <Dash />
              ) : (
                <Arrow orientation={priceArrowOrientation} stroke={priceColor} />
              )}
              <Text style={[styles.changeDayPrice, { color: priceColor }]}>{changeDayPercentage}</Text>
            </View>
          </View>
        </View>
        <BottomSheetScrollView contentContainerStyle={{ paddingBottom: 32 }}>
          <Chart chartData={chartData} />
          <View style={{ padding: 16 }}>
            <View style={styles.infoRow}>
              <Text style={styles.rowTextTitle}>Change day</Text>
              <Text style={[styles.rowTextData, { color: priceColor }]}>
                {changeDayPrice} ({changeDayPercentage})
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.rowTextTitle}>High day</Text>
              <Text style={styles.rowTextData}>{highDay}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.rowTextTitle}>Low day</Text>
              <Text style={styles.rowTextData}>{lowDay}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.rowTextTitle}>Open day</Text>
              <Text style={styles.rowTextData}>{openDay}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.rowTextTitle}>Market capital</Text>
              <Text style={styles.rowTextData}>{marketCapital}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.rowTextTitle}>Volume hour</Text>
              <Text style={styles.rowTextData}>{volumeHour}</Text>
            </View>
          </View>
          <BottomSheetFlatList
            data={coinNews}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => <NewItem item={item} />}
            contentContainerStyle={{}}
          />
        </BottomSheetScrollView>
      </BottomSheet>
    </Container>
  )
}

export default Main
