
import React, {useState} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import {Provider} from 'react-redux';
import { View } from 'react-native';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import styles from './Styling';
import reducers from './reducers';

const store = createStore(reducers);

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