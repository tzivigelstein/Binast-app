import { StyleSheet } from 'react-native'

const styleCreator = theme =>
  StyleSheet.create({
    container: {
      paddingVertical: 0.2 * 16,
      borderRadius: 6,
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 6,
      backgroundColor: theme.background,
    },

    logoContainer: {
      borderRadius: 1000,
      padding: 3,
      backgroundColor: theme.background,
    },

    logo: {
      overflow: 'hidden',
      width: 42,
      height: 42,
      borderRadius: 1000,
    },

    nameInfo: {
      marginVertical: 0,
      marginHorizontal: 0.3 * 16,
    },

    name: {
      color: theme.text,
      fontSize: 18,
      margin: 0,
      marginRight: 0.3 * 16,
    },

    id: {
      color: theme.textTertiary,
      fontSize: 15,
    },

    priceInfo: {
      marginLeft: 'auto',
    },

    price: {
      fontSize: 18,
      textAlign: 'right',
      fontWeight: '600',
      color: theme.text,
    },

    priceDetailInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 'auto',
    },

    changeDayPercentage: {
      fontSize: 14,
    },
  })

export default styleCreator
