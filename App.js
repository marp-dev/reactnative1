
import React from 'react';
import {Provider, useSelector} from 'react-redux';
import {Container,Text} from 'native-base';
import Header from './header';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import styles from './Styling';
import {store, load} from './Storage';
import Route from './Router';
import { AppLoading } from 'expo';
import Notifier from './Notifier';

const App = (props) => {
  const {serverLoaded, fontLoaded} = load();

  if(serverLoaded===false || fontLoaded===false){
    return (
      <>
        <AppLoading/>
        <Notifier/>
      </>
    );
  }

  return (
    <>
      <Container style={styles.body}>
        <Route id="HOME">
          <AddTodo/>
          <TodoList/>
        </Route>
        <Route id="ARCHIVE">
          <Text>Archive</Text>
        </Route>
      </Container>
      <Header/>
      <Notifier/>
    </>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
}