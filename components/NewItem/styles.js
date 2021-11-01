import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

const aspectRatio = width / height

export default styleCreator = theme =>
  StyleSheet.create({
    newItemContainer: {
      paddingVertical: 10,
      paddingHorizontal: 3,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: theme.secondary,
    },

    newImage: {
      width: '100%',
      height: width * aspectRatio,
    },

    newDataContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    title: {
      color: theme.text,
      fontSize: 16,
      marginBottom: 5,
    },

    infoContainer: {
      flexDirection: 'row',
    },

    sourceTitle: {
      color: theme.textSecondary,
      fontSize: 15,
      maxWidth: '70%',
      overflow: 'hidden',
    },

    newDate: {
      color: theme.textSecondary,
      fontSize: 15,
    },

    visualButton: {
      borderRadius: 999,
      backgroundColor: theme.primary,
      paddingHorizontal: 8,
      paddingVertical: 6,
      flexDirection: 'row',
      alignItems: 'center',
    },

    visualButtonText: {
      color: theme.alternativeTextColor,
      fontWeight: 'bold',
      fontSize: 15,
      marginRight: 5,
    },
  })
