import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
    body: {
      //please keep comment bellow
      //...Platform.select({web: { zIndex:1 }, android: { zIndex:1,elevation:1 }}),position: 'absolute',top:0, left:0,width:'100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 70,
      paddingBottom: 10,
      paddingLeft: '5%',
      paddingRight: '5%'
    },
    headerContainer: {
      ...Platform.select({
        android: { zIndex: 10,elevation: 10 },
        web: {zIndex: 10}
      }),
      width:'100%',
      maxHeight:50,
      position: 'absolute',
      top:0,
      left:0
    },
    header: {
      height:50,
      paddingLeft: 10,
      paddingRight: 10,
    },
    menu: {
      position: 'absolute',
      top:50,
      right:0,
      width:'100%',
      paddingLeft:0,
      paddingRight:0,
      backgroundColor: 'transparent',
      ...Platform.select({
        web: {zIndex: 10},
        android: {zIndex: 10,elevation: 10},
      })
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
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
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
      ...Platform.select({
        android: { },
        web: { userSelect: 'none' }
      })
    }
  });
  