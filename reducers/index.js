import {combineReducers} from 'redux';
import {generateID, timestamp} from '../utils';
import _ from 'lodash';

const todos = (state = [], action) => {
  if(action.type=='ADD_TODO'){
    let now = timestamp();
    let todo = {
      id: generateID('todo_'),
      name: action.payload,
      done: false,
      createdAt: now,
      modifiedAt: [now],
      archived: false
    };
    return [...state, todo];
  }else if(action.type == 'CHANGE_STATUS'){
    return _.map(state, (todo) => {
      if(todo.id == action.payload){
        let response = todo
        response.done = !response.done;
        response.modifiedAt = [...response.modifiedAt, timestamp()];
        return response;
      }else return todo;
    });
  }else{
    return state;
  }
};

export default combineReducers({
    list: todos
})