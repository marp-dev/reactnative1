
import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {Container,Text} from 'native-base';
import Header from './header';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import styles from './Styling';
import {store, load} from './Storage';
import Route from './Router';
import { AppLoading } from 'expo';

const App = (props) => {
  const {serverLoaded, fontLoaded} = load();

  const content = () => {
    if(serverLoaded && fontLoaded){
      return (
        <Container>
          <Header/>
          <Route id="HOME">
            <Container style={styles.container}>
              <AddTodo/>
              <TodoList/>
            </Container>
          </Route>
          <Route id="ARCHIVE">
            <Text>Archive</Text>
          </Route>
        </Container>
      );
    }else{
      return ( <AppLoading/> );
    }
  };

  return (
    <View>
      {content()}
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