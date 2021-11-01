import millify from 'millify'
import priceStatus from './priceStatus'
import numbro from 'numbro'

export default function parseCryptos(cryptos) {
  const parsedCryptos = cryptos.map(({ RAW, CoinInfo, DISPLAY }) => {
    const { USD: RAW_USD } = RAW
    const { IMAGEURL, PRICE, MKTCAP, CHANGEPCTDAY, OPENDAY, VOLUMEHOUR, LOWDAY, HIGHDAY } = RAW_USD

    const { Name, FullName } = CoinInfo

    const { USD: DISPLAY_USD } = DISPLAY
    const { FROMSYMBOL } = DISPLAY_USD

    const imageUrl = `https://www.cryptocompare.com/${IMAGEURL.slice(1)}`

    const price = numbro(PRICE).formatCurrency({ thousandSeparated: true, currencySymbol: '$' })

    const marketCapital = millify(MKTCAP, { precision: 2, space: true })

    const changeDayPercentage = numbro(CHANGEPCTDAY / 100).format({
      output: 'percent',
      mantissa: 2,
    })

    const changeDayPrice = numbro((CHANGEPCTDAY * PRICE) / 100).format({
      thousandSeparated: true,
      trimMantissa: true,
      mantissa: 2,
      forceSign: true,
    })

    const openDay = OPENDAY.toLocaleString()
    const volumeHour = `${FROMSYMBOL} ${millify(VOLUMEHOUR, {
      precision: 2,
      space: true,
    })}`

    const isUp =
      PRICE > OPENDAY ? priceStatus.PRICE_UP : PRICE === OPENDAY ? priceStatus.PRICE_EQUAL : priceStatus.PRICE_DOWN

    const highDay = `$ ${HIGHDAY.toLocaleString(undefined, {
      maximumFractionDigits: HIGHDAY < 10 ? 2 : 0,
    })}`

    const lowDay = `$ ${LOWDAY.toLocaleString(undefined, {
      maximumFractionDigits: LOWDAY < 10 ? 2 : 0,
    })}`

    return {
      imageUrl,
      price,
      marketCapital,
      changeDayPercentage,
      changeDayPrice,
      openDay,
      volumeHour,
      isUp,
      highDay,
      lowDay,
      name: FullName,
      id: Name,
    }
  })

  return parsedCryptos
}
