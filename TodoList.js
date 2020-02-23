import React from 'react';
import { View, FlatList } from 'react-native';
import {useSelector} from 'react-redux';
import _ from 'lodash';
import styles from './Styling';
import Todo from './TodoItem';

const TodoList = function(props){
  const todos = useSelector((state) => _.filter(state.list, (todo)=>todo.archived === false));
  const renderTodo = ({item}) => {
    return (
      <Todo
        data={item}
        onSwipeLeft={(archiveTodo, deleleTodo) => archiveTodo()} />
    );
  };
  return (
    <View style={styles.todolist}>
      <FlatList
        data={todos}
        renderItem={renderTodo}
        keyExtractor={(item) => item.id}/>
    </View>
  );
};

export default TodoList;