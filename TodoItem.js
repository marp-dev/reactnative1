import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import {ChangeStatus} from './actions';
import styles from './Styling';
import {connect} from 'react-redux';

const Todo = function(props){
    let todoItem;
    if(props.done){
      todoItem = StyleSheet.flatten([styles.todoItem, styles.done]);
    }else{
      todoItem = StyleSheet.flatten([styles.todoItem, styles.notdone]);
    }
    const markDone = () => {
        props.ChangeStatus(props.id);
    };
    const remove = () => {
        console.log('removing');
    };
    return (
      <View style={todoItem}>
        <Text
          style={styles.todoDescription}
          data-id={props.id}
          data-name={props.name}>
            {props.name}
        </Text>
        <View style={styles.todoActions}>
          <View style={{marginRight:5}}><Button title="mark as done" onPress={markDone}/></View>
          <Button title="remove" onPress={remove}/>
        </View>
      </View>
    );
}

export default connect(null, {
    ChangeStatus
})(Todo);