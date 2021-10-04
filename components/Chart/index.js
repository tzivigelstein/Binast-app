import React, { useEffect, useMemo, useState } from 'react'
import { Dimensions, View, Text, ActivityIndicator } from 'react-native'
import styleCreator from './styles'
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  bSplineInterpolation as interpolator,
  ChartYLabel,
} from '@rainbow-me/animated-charts'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import useTheme from '../../hooks/useTheme'

const { width: WIDTH_SIZE } = Dimensions.get('window')

const aspectRatio = 0.5625

const buttons = [
  { title: 'ONE_YEAR', display: '1Y', time: 365 },
  { title: 'THREE_MONTHS', display: '3M', time: 365 - 93 },
  { title: 'ONE_MONTH', display: '1M', time: 365 - 31 },
  { title: 'ONE_WEEK', display: '1W', time: 365 - 7 },
]

const DEFAULT_BUTTON = buttons[0]

const Chart = ({ chartData = [] }) => {
  if (chartData.length === 0) return <ActivityIndicator />
  const theme = useTheme()
  const { text } = theme
  const styles = styleCreator(theme)

  const [data, setData] = useState(chartData)
  const [activeButton, setActiveButton] = useState(DEFAULT_BUTTON)

  // const [interpolatedData, setInterpolatedData] = useState([])

  useEffect(() => {
    setData(chartData)
    setActiveButton(DEFAULT_BUTTON)
  }, [chartData])

  const interpolateData = data => {
    return interpolator({
      data,
      range: 40,
    })
  }

  const interpolatedData = useMemo(() => interpolateData(data), [data])

  const handleTimeChange = toActiveButton => {
    setActiveButton(toActiveButton)
    const newData = toActiveButton.time === 365 ? chartData : chartData.filter((el, i) => i > toActiveButton.time)
    setData(newData)
  }

  return (
    <View style={styles.chartContainer}>
      <ChartPathProvider data={{ points: interpolatedData, smoothingStrategy: 'bezier' }}>
        <ChartPath
          timingAnimationConfig={100}
          strokeWidth={2}
          height={WIDTH_SIZE * aspectRatio}
          stroke={text}
          width={WIDTH_SIZE}
          selectedOpacity={0.5}
        />
        <ChartDot size={14} style={styles.chartDot} />
        <ChartYLabel
          style={styles.chartLabel}
          key={data[data.length - 1].y}
          format={value => {
            'worklet'

            const val = parseFloat(value)
            const lastPrice = data[data.length - 1].y
            const newVal = Number.isNaN(val) ? lastPrice : val

            const parsedNewVal = `$${newVal.toFixed(2)}`
            return parsedNewVal
          }}
        />
      </ChartPathProvider>
      <View style={styles.buttonsContainer}>
        {buttons.map(button => (
          <TouchableWithoutFeedback
            key={button.title}
            style={[styles.button, activeButton.title === button.title ? styles.activeButtonStyles : {}]}
            onPress={() => handleTimeChange(button)}
          >
            <Text style={[styles.buttonText, activeButton.title === button.title ? styles.activeButtonTextStyles : {}]}>
              {button.display}
            </Text>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </View>
  )
}

export default Chart
