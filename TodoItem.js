import React, {useState, useRef} from 'react';
import { TouchableOpacity, StyleSheet, View, TextInput, Button } from 'react-native';
import {ChangeStatus, DeleteTodo, UpdateTodo} from './actions';
import styles from './Styling';
import {useDispatch} from 'react-redux';

const Todo = function(props){
  const nameInput = useRef();

  const dispatch = useDispatch();
  const [name, setName] = useState(props.name);

  const [editing, setEdit] = useState(false);
  const EditMode = (newStatus) => {
    if(editing === false && newStatus === true){
      setEdit(true);
      if(!nameInput.current.isFocused()) nameInput.current.focus();
    }else if(newStatus === false && editing === true){
      setEdit(false);
      if(nameInput.current.isFocused()) nameInput.current.blur();
      dispatch(UpdateTodo({id:props.id, name:name}));
    }
  }

  //events
  const TextEnter = (event) => {
    if(event.key == 'Enter'){
      EditMode(false);
    }
  };
  const Pressed = () => {
    if(!editing) dispatch(ChangeStatus(props.id));
  };
  const nameChanged = (text)=>{
    setName(text);
  };

  //styling
  let todoItem;
  if(editing){
    todoItem = StyleSheet.flatten([styles.todoItem, styles.editingTodo]);
  }else if(props.done){
    todoItem = StyleSheet.flatten([styles.todoItem, styles.done]);
  }else{
    todoItem = StyleSheet.flatten([styles.todoItem, styles.notdone]);
  }

  return (
    <TouchableOpacity
      style={todoItem}
      onPress={Pressed}
      onLongPress={() => EditMode(true)}>
      <View style={styles.todoItemContainer}>
        <TextInput
          ref={nameInput}
          style={styles.todoDescription}
          editable={editing}
          onChangeText={nameChanged}
          onKeyPress={TextEnter}
          onBlur={() => EditMode(false)}
          value={name}/>
        <View style={styles.todoActions}>
          <Button
            title="remove"
            onPress={() => dispatch(DeleteTodo(props.id))}/>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Todo;