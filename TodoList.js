import React from 'react';
import { View, FlatList } from 'react-native';
import {useSelector} from 'react-redux';
import _ from 'lodash';
import styles from './Styling';
import Todo from './TodoItem';

const TodoList = function(props){
  const todos = useSelector((state) => state.list);
  return (
    <View style={styles.todolist}>
      <FlatList
        data={todos}
        renderItem={({item}) => <Todo {...item} />}
        keyExtractor={(item) => item.id}/>
    </View>
  );

};

export default TodoList;