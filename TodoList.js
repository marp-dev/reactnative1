import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import {connect} from 'react-redux';
import _ from 'lodash';
import styles from './Styling';

const Todo = function(props){
  let todoItem;
  if(props.data.done){
    todoItem = StyleSheet.flatten([styles.todoItem, styles.done]);
  }else{
    todoItem = StyleSheet.flatten([styles.todoItem, styles.notdone]);
  }
  return (
    <View style={todoItem}>
      <Text
        style={styles.todoDescription}
        data-id={props.data.id}
        data-name={props.data.name}>
          {props.data.name}
      </Text>
      <View style={styles.todoActions}>
        <View style={{marginRight:5}}><Button title="mark as done" onPress={()=>null}/></View>
        <Button title="remove" onPress={()=>null}/>
      </View>
    </View>
  );
}

const TodoList = function(props){

  return (
    <View style={styles.todolist}>
        {_.map(props.list, (item) => <Todo key={item.id} data={item} /> )}
    </View>
  );

};

const mapStateToProps = (state, props) => {
    return {
        list: state.list
    };
};
export default connect(mapStateToProps)(TodoList);