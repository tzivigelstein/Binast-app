import { StyleSheet } from 'react-native'

const styleCreator = theme =>
  StyleSheet.create({
    chartContainer: {
      backgroundColor: theme.lightBackground,
      marginVertical: 16,
    },

    chartDot: {
      backgroundColor: theme.text,
    },

    chartLabel: {
      position: 'absolute',
      color: theme.text,
      fontWeight: 'bold',
      left: 0,
      top: 0,
      fontSize: 21,
      paddingVertical: 2,
      paddingHorizontal: 10,
      backgroundColor: theme.lightBackground,
      borderRadius: 999,
    },

    buttonsContainer: {
      borderRadius: 999,
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 16,
    },

    button: {
      borderRadius: 999,
      paddingVertical: 6,
      paddingHorizontal: 12,
    },

    activeButtonStyles: {
      backgroundColor: theme.textQuaternary,
    },

    buttonText: {
      fontWeight: 'bold',
      color: theme.textSecondary,
    },

    activeButtonTextStyles: {
      color: theme.text,
    },
  })

export default styleCreator
