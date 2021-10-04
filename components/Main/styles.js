import { StyleSheet } from 'react-native'

const styleCreator = theme =>
  StyleSheet.create({
    headingTextContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
    },

    headingText: {
      fontWeight: 'bold',
      fontSize: 26,
      color: theme.text,
    },

    bottomSheetWrapper: {
      borderTopLeftRadius: 999,
      borderTopRightRadius: 999,
      elevation: 5,
    },

    bottomSheetContainer: {
      borderTopLeftRadius: 36,
      borderTopRightRadius: 36,
      backgroundColor: theme.lightBackground,
    },

    image: {
      marginBottom: 5,
    },

    price: {
      fontSize: 21,
      fontWeight: 'bold',
      color: theme.text,
    },

    name: {
      fontSize: 18,
      color: theme.textTertiary,
    },

    headingInformation: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },

    changeDayContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    changeDayPrice: {
      fontWeight: 'bold',
      fontSize: 21,
    },

    infoRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 5,
    },

    rowTextTitle: {
      color: theme.textSecondary,
      fontSize: 17,
    },

    rowTextData: {
      color: theme.text,
      fontWeight: 'bold',
      fontSize: 17,
    },
  })

export default styleCreator
