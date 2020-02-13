import React from 'react';
import { View } from 'react-native';
import {connect} from 'react-redux';
import _ from 'lodash';
import styles from './Styling';
import Todo from './TodoItem';

const TodoList = function(props){
  console.log(props.list);
  return (
    <View style={styles.todolist}>
        {_.map(props.list, (item) => <Todo key={item.id} {...item} /> )}
    </View>
  );

};

const mapStateToProps = (state, props) => {
  return {
    list: state.list
  };
};
export default connect(mapStateToProps)(TodoList);