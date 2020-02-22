import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 30,
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
      paddingLeft:5,
      paddingRight:5,
      height:35,
      marginRight:5,
      marginLeft:5,
      flexGrow:3,
      borderWidth:1,
      borderColor:'#333',
      borderRadius: 4
    },
    button: {
      padding:5,
      marginRight:5,
      marginLeft:5,
      flexGrow:1
    },
    todolist: {
      width:'100%'
    },
    todoItem: {
      flexDirection: 'row',
      marginTop: 10,
      width: '100%',
      height: 40,
      padding: '10 20',
      borderRadius: 10,
      //justifyContent:'stretch',
      alignItems:'center',
    },
    todoItemContainer: {
      flexDirection: 'row',
      width: '100%',
      height: 40,
      alignItems:'center',
    },
    todoDescription: {
      flexGrow:6,
      textAlign:'center'
    },
    todoActions: {
      flexGrow:1,
      paddingRight: 10,
      flexDirection: 'row',
      justifyContent:'flex-end',
    },
    done: {
      backgroundColor: 'green'
    },
    notdone: {
      backgroundColor: 'red'
    },
    editingTodo: {
      backgroundColor: 'white',
      borderWidth:1,
      borderColor:'#333'
    },
    noSelect: {
      userSelect: 'none'
    }
  });
  