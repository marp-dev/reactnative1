
import React, {useState} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import {Provider, connect} from 'react-redux';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const reducers = (state, action) => {
  return state;
};
const store = createStore(reducers);

const AddTodo = function(props){
  const [input, setInput] = useState('');
  const TextChanged = (text) => {
    setInput(text);
  };
  const Pressed = () => {
    console.log('pressed');
    props.addTodoItem(input);
    setInput('');
  };
  return (
    <View style={styles.fieldset}>
      <TextInput style={styles.input} onChangeText={TextChanged} value={input}/>
      <Button title="ADD" onPress={Pressed}/>
    </View>
  );
};

const mapStateToProps = (state, props) => {
  return {
    state: state
  };
};
const ConAddTodo = connect(mapStateToProps, {
  addTodoItem: (todo) => { return { type:'ADD_TODO', payload:todo } }
})(AddTodo);

const TodoList = function(props){
  return (
    <View>
      <Text>TodoList</Text>
    </View>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <ConAddTodo/>
        <TodoList/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
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
    flexGrow:3,
    borderWidth:1,
    borderColor:'#000s',
    borderStyle: 'solid'
  },
  button: {
    padding:5,
    marginRight:5,
    marginLeft:5,
    flexGrow:1
  }
});
