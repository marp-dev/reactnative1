import React, {useState} from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import styles from './Styling';
import {connect} from 'react-redux';

const AddTodo = function(props){
  const [input, setInput] = useState('');
  const TextChanged = (text) => {
    setInput(text);
  };
  const Pressed = () => {
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

export default connect(mapStateToProps, {
  addTodoItem: (todo) => { return { type:'ADD_TODO', payload:todo } }
})(AddTodo);
  