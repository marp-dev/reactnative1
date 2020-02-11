
import React, {useState} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import {Provider} from 'react-redux';
import { Text, View, TextInput, Button } from 'react-native';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import styles from './Styling';

const reducers = (state = [], action) => {
  if(action.type=='ADD_TODO'){
    return [...state, action.payload];
  }else{
    return state;
  }
};
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