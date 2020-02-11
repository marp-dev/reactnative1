import React, { useState } from 'react';
import { View, Text } from 'react-native';
import {connect} from 'react-redux';
import _ from 'lodash';

const TodoList = function(props){

  let count = 0;

  const RenderItem = function(item){
    let response = <Text key={count}>{item}</Text>;
    count +=1;
    return response;
  };

  return (
    <View>
        {_.map(props.list, RenderItem)}
    </View>
  );
};

const mapStateToProps = (state, props) => {
    return {
        list: state
    };
};
export default connect(mapStateToProps)(TodoList);