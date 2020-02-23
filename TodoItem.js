import React, {useState, useRef} from 'react';
import { Animated, TouchableWithoutFeedback, StyleSheet, TextInput } from 'react-native';
import {ChangeStatus, DeleteTodo, UpdateTodo} from './actions';
import styles from './Styling';
import {useDispatch} from 'react-redux';
import AnimationUtils from './animation-utils';
//from https://www.npmjs.com/package/react-native-swipe-gestures
import GestureRecognizer from 'react-native-swipe-gestures';

const Todo = function(props){
  const data = props.data;
  const nameInput = useRef();

  const dispatch = useDispatch();
  const [name, setName] = useState(data.name);
  const [archived, setArchived] = useState(data.archived);

  const [editing, setEdit] = useState(false);
  const EditMode = (newStatus) => {
    if(editing === false && newStatus === true){
      setEdit(true);
      if(!nameInput.current.isFocused()) nameInput.current.focus();
    }else if(newStatus === false && editing === true){
      setEdit(false);
      if(nameInput.current.isFocused()) nameInput.current.blur();
      dispatch(UpdateTodo({...data, name}));
    }
  }
  const archiveTodo = () => {
    if(!archived){
      setArchived(true);
      dispatch(UpdateTodo({...data, archived: true}));
    }
  };
  const deleteTodo = () => {
    dispatch(DeleteTodo(data.id));
  };


  //styling
  let todoItem, todoDescription;
  if(editing){
    todoItem = StyleSheet.flatten([styles.todoItem, styles.editingTodo]);
    todoDescription = styles.todoDescription;
  }else{
    todoDescription = StyleSheet.flatten([styles.todoDescription, styles.noSelect]);
    if(data.done){
      todoItem = StyleSheet.flatten([styles.todoItemContainer, styles.todoItem, styles.done]);
    }else{
      todoItem = StyleSheet.flatten([styles.todoItemContainer, styles.todoItem, styles.notdone]);
    }
  }

  //animation
  const [animatedObj, animations] = AnimationUtils();

  //events
  const TextEnter = (event) => {
    if(event.key == 'Enter'){
      EditMode(false);
    }
  };
  const Pressed = () => {
    if(!editing) dispatch(ChangeStatus(data.id));
  };
  const NameChanged = (text)=>{
    setName(text);
  };
  const SwipedLeft = (gestureState) => {
    if(props.onSwipeLeft){
      animations.hideToLeft(() => {
        props.onSwipeLeft(archiveTodo, deleteTodo);
      });
    }
  };

  return (
    <GestureRecognizer
      onSwipeLeft={SwipedLeft}>
      <TouchableWithoutFeedback
        onPress={Pressed}
        onLongPress={() => EditMode(true)}>
        <Animated.View style={{
          ...todoItem,
          ...animatedObj.styles
        }}>
          <TextInput
            ref={nameInput}
            style={todoDescription}
            editable={editing}
            onChangeText={NameChanged}
            onKeyPress={TextEnter}
            onBlur={() => EditMode(false)}
            value={name}/>
        </Animated.View>
      </TouchableWithoutFeedback>
    </GestureRecognizer>
  );
}

export default Todo;