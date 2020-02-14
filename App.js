
import React from 'react';
import {Provider} from 'react-redux';
import { View } from 'react-native';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import styles from './Styling';
import store from './Storage';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AddTodo/>
        <TodoList/>
      </View>
    </Provider>
  );
}