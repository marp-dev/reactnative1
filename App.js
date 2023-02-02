
import React from 'react'
import {Provider, useSelector} from 'react-redux'
import {Container,Text, NativeBaseProvider} from 'native-base'
import Header from './header'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import DataSourceForm from './dataSourceForm'
import styles from './Styling'
import {store, load} from './Storage'
import Route from './Router'
import { AppLoading } from 'expo'
import Notifier from './Notifier'

const Main = (props) => {
  const {serverLoaded, fontLoaded} = load();

  if(serverLoaded===false || fontLoaded===false){
    return (
      <NativeBaseProvider>
        <AppLoading/>
        <Notifier/>
      </NativeBaseProvider>
    );
  }

  return (
    <NativeBaseProvider>
      <Container style={styles.body}>
        <Route id="HOME">
          <AddTodo/>
          <TodoList/>
        </Route>
        <Route id="ARCHIVE">
          <Text>Archive</Text>
        </Route>
        <Route id="SETTINGS">
          <DataSourceForm/>
        </Route>
      </Container>
      <Header/>
      <Notifier/>
    </NativeBaseProvider>
  );
}

export default function App(){
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
}
