import React, {useState, useRef} from 'react';
import { Animated, TouchableWithoutFeedback, StyleSheet, TextInput } from 'react-native';
import {ChangeStatus, DeleteTodo, UpdateTodo} from './actions';
import styles from './Styling';
import {useDispatch} from 'react-redux';
//from https://www.npmjs.com/package/react-native-swipe-gestures
import GestureRecognizer from 'react-native-swipe-gestures';

const Todo = function(props){
  const nameInput = useRef();

  const dispatch = useDispatch();
  const [name, setName] = useState(props.name);
  const [archived, setArchived] = useState(props.archived);

  const [editing, setEdit] = useState(false);
  const EditMode = (newStatus) => {
    if(editing === false && newStatus === true){
      setEdit(true);
      if(!nameInput.current.isFocused()) nameInput.current.focus();
    }else if(newStatus === false && editing === true){
      setEdit(false);
      if(nameInput.current.isFocused()) nameInput.current.blur();
      dispatch(UpdateTodo({...props, name}));
    }
  }

  const [position] = useState(new Animated.Value(0))

  //styling
  let todoItem, todoDescription;
  if(editing){
    todoItem = StyleSheet.flatten([styles.todoItem, styles.editingTodo]);
    todoDescription = styles.todoDescription;
  }else{
    todoDescription = StyleSheet.flatten([styles.todoDescription, styles.noSelect]);
    if(props.done){
      todoItem = StyleSheet.flatten([styles.todoItemContainer, styles.todoItem, styles.done]);
    }else{
      todoItem = StyleSheet.flatten([styles.todoItemContainer, styles.todoItem, styles.notdone]);
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
  const NameChanged = (text)=>{
    setName(text);
  };
  const SwipedLeft = (gestureState) => {
    Animated.timing(position, {
      toValue: 100,
      duration: 500
    }).start();
  };
  const AnimationCallback = (obj) => {
    if(obj.value == 100 && !archived){
      setArchived(true);
      dispatch(UpdateTodo({...props, archived: true}));
    }
  };
  position.addListener(AnimationCallback);

  return (
    <GestureRecognizer
      onSwipeLeft={SwipedLeft}>
      <TouchableWithoutFeedback
        onPress={Pressed}
        onLongPress={() => EditMode(true)}>
        <Animated.View style={{
          ...todoItem,
          marginLeft: position.interpolate({
            inputRange: [0, 100],
            outputRange: ['0%', '-100%']
          }),
          opacity: position.interpolate({
            inputRange: [0, 100],
            outputRange: [1, 0]
          })
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