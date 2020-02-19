import React, {useState} from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from './Styling';
import {useDispatch} from 'react-redux';
import {AddTodoItem} from './actions';

const AddTodo = function(props){
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const TextChanged = (text) => {
    setInput(text);
  };
  const KeyPressed = (event) => {
    if(event.key == 'Enter'){
      Pressed();
    }
  };
  const Pressed = () => {
    dispatch(AddTodoItem(input));
    setInput('');
  };
  return (
    <View style={styles.fieldset}>
      <TextInput
        style={styles.input}
        onChangeText={TextChanged}
        onKeyPress={KeyPressed}
        value={input}/>
      <Button title="ADD" onPress={Pressed}/>
    </View>
  );
};

export default AddTodo;
  