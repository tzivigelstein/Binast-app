import React from 'react'
import Svg, { Path, Circle, Rect } from 'react-native-svg'
import theme from '../theme'

export const Bolt = props => (
  <Svg aria-hidden="true" data-prefix="fas" data-icon="bolt" viewBox="0 0 320 512" {...props}>
    <Path
      fill="currentColor"
      d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"
    />
  </Svg>
)

export const Search = props => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    stroke="currentColor"
    strokeWidth={2}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <Circle cx={11} cy={11} r={8} />
    <Path d="M21 21l-4.35-4.35" />
  </Svg>
)

export const ChevronUp = props => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    stroke={theme.lightColors.success}
    strokeWidth={2}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <Path d="M18 15l-6-6-6 6" />
  </Svg>
)

export const ChevronDown = props => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    stroke={theme.lightColors.warning}
    strokeWidth={2}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <Path d="M6 9l6 6 6-6" />
  </Svg>
)

export const Offline = props => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    stroke="currentColor"
    strokeWidth={2}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <Path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0119 12.55M5 12.55a10.94 10.94 0 015.17-2.39M10.71 5.05A16 16 0 0122.58 9M1.42 9a15.91 15.91 0 014.7-2.88M8.53 16.11a6 6 0 016.95 0M12 20h.01" />
  </Svg>
)

export const Error = props => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    stroke="currentColor"
    strokeWidth={2}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <Path d="M18 6L6 18M6 6l12 12" />
  </Svg>
)

export const Dash = props => (
  <Svg
    style={{ margin: 5 }}
    width={18}
    height={18}
    strokeWidth={2}
    fill={theme.lightColors.info}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 492 492"
    {...props}
  >
    <Path d="M465.064 207.562H26.908C12.076 207.562 0 219.698 0 234.53v22.804c0 14.832 12.072 27.104 26.908 27.104h438.156c14.84 0 26.936-12.272 26.936-27.104V234.53c0-14.832-12.096-26.968-26.936-26.968z" />
  </Svg>
)

export const Arrow = props => {
  const { orientation = 'up' } = props

  const orientationStyles = {
    up: {},

    down: {
      transform: [{ rotate: '180deg' }],
    },

    right: {
      transform: [{ rotate: '90deg' }],
    },

    left: {
      transform: [{ rotate: '-90deg' }],
    },
  }

  const orientationStyle = orientationStyles[orientation]

  return (
    <Svg
      width={24}
      height={24}
      stroke="currentColor"
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={orientationStyle}
      {...props}
    >
      <Path d="M12 19V5M5 12l7-7 7 7" />
    </Svg>
  )
}
