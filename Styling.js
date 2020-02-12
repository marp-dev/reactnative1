import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: '5%',
      paddingRight: '5%'
    },
    fieldset: {
      flexDirection: 'row',
      width:'100%',
      //justifyContent:'stretch',
      alignItems:'center'
    },
    input: {
      padding:5,
      marginRight:5,
      marginLeft:5,
      flexGrow:3
    },
    button: {
      padding:5,
      marginRight:5,
      marginLeft:5,
      flexGrow:1
    }
  });
  