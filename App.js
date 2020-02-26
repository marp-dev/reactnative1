
import React from 'react';
import {Provider} from 'react-redux';
import {Container,Text} from 'native-base';
import Header from './header';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import styles from './Styling';
import {store, load} from './Storage';
import Route from './Router';

const App = (props) => {
  load();
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
}

export default () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
}