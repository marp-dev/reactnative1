import React, { useState } from 'react';
import { View, Text } from 'react-native';
import {connect} from 'react-redux';
import _ from 'lodash';

const TodoList = function(props){

  return (
    <View>
        {_.map(props.list, (item) => <Text key={item.id}>{item.id}|{item.name}; {item.done?'done':'not done yet'}</Text> )}
    </View>
  );

};

const mapStateToProps = (state, props) => {
    return {
        list: state.list
    };
};
export default connect(mapStateToProps)(TodoList);