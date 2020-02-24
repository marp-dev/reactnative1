
import React from 'react';
import {Provider} from 'react-redux';
import {Container} from 'native-base';
import Header from './header';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import styles from './Styling';
import {store, load} from './Storage';

const App = (props) => {
  load();
  return (
    <Container>
      <Header/>
      <Container style={styles.container}>
        <AddTodo/>
        <TodoList/>
      </Container>
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