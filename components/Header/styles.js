import { StyleSheet } from 'react-native'

const styleCreator = theme =>
  StyleSheet.create({
    header: {
      marginBottom: 16,
    },

    coinInfoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    logoContainer: {
      backgroundColor: theme.background,
      marginRight: 8,
      borderRadius: 1000,
    },

    logo: {
      width: 42,
      height: 42,
    },

    coinInfoName: {
      fontSize: 18,
      color: theme.text,
    },

    coinInfoId: {
      color: theme.textTertiary,
      fontSize: 15,
    },

    price: {
      fontSize: 40,
      fontWeight: 'bold',
      marginVertical: 5,
      color: theme.text,
    },

    dayDifferenceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    dayDifference: {
      fontSize: 14,
      fontWeight: '600',
      marginHorizontal: 3,
    },
  })

export default styleCreator
