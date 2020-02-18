import React from 'react';
import { View, FlatList } from 'react-native';
import {connect} from 'react-redux';
import _ from 'lodash';
import styles from './Styling';
import Todo from './TodoItem';

const TodoList = function(props){
  return (
    <View style={styles.todolist}>
      <FlatList
        data={props.list}
        renderItem={(item) => <Todo {...item} />}
        keyExtractor={(item) => item.id}/>
    </View>
  );

};

const mapStateToProps = (state, props) => {
  return {
    list: state.list
  };
};
export default connect(mapStateToProps)(TodoList);