import {combineReducers} from 'redux';
import _ from 'lodash';

const todos = (state = [], action) => {
  if(action.type=='ADD_TODO'){
    let todo = {
      id: _.uniqueId('todo_'),
      name: action.payload,
      done: false
    };
    return [...state, todo];
  }else{
    return state;
  }
};

export default combineReducers({
    list: todos
})