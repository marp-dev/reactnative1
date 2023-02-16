import React from 'react'
import {Provider} from 'react-redux'
import {Container,Text, NativeBaseProvider} from 'native-base'
import Header from './header'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import DataSourceForm from './dataSourceForm'
import styles from './Styling'
import {store, useLoadData} from './Storage'
import Route from './Router'
import Notifier from './Notifier'

const Main = (props) => {
  const {data_loaded, fontLoaded} = useLoadData();

  if(data_loaded===false || fontLoaded===false){
    return (
      <NativeBaseProvider>
        <Container style={styles.body}>
          <Route id="HOME" key="HOME" order="1" label="To-Dos">
            <Text>Loading...</Text>
          </Route>
          <Route id="SETTINGS" key="SETTINGS" order="3" label="Settings">
            <DataSourceForm/>
          </Route>
        </Container>
        <Header/>
        <Notifier/>
      </NativeBaseProvider>
    );
  }

  return (
    <NativeBaseProvider>
      <Container style={styles.body}>
        <Route id="HOME" key="HOME" order="1" label="To-Dos">
          <AddTodo/>
          <TodoList/>
        </Route>
        <Route id="ARCHIVE" key="ARCHIVE" order="2" label="Archive">
          <Text>Archive</Text>
        </Route>
        <Route id="SETTINGS" key="SETTINGS" order="3" label="Settings">
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
