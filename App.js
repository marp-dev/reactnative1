
import React from 'react';
import {Provider} from 'react-redux';
import { View } from 'react-native';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import styles from './Styling';
import {store, load} from './Storage';

const App = (props) => {
  load();
  return (
    <View style={styles.container}>
      <AddTodo/>
      <TodoList/>
    </View>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
}