import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: '#fff'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center'
    },
    legendContainer: {
      marginTop: 20,
      padding: 10,
      backgroundColor: '#f9f9f9',
      borderRadius: 8
    },
    legendTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10
    },
    legendItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8
    },
    colorBox: {
      width: 20,
      height: 20,
      borderRadius: 4,
      marginRight: 10
    },
    legendText: {
      fontSize: 14
    }
  });