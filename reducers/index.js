import {combineReducers} from 'redux';
import _ from 'lodash';
import {timestamp} from '../utils';


const todos = (state = [], action) => {
  if(action.type == 'LOAD'){
    return [...action.payload];
  }else if(action.type=='ADD_TODO'){
    return [...state, action.payload];
  }else if(action.type == 'CHANGE_STATUS'){
    console.log('change status');
    console.log(`action.payload: ${action.payload}`);
    return _.map(state, (todo) => {
      console.log(todo);
      if(todo.id == action.payload){
        let response = {...todo}
        response.done = !response.done;
        response.modifiedAt = [...response.modifiedAt, timestamp()];
        return response;
      }else return todo;
    });
  }else if(action.type == 'DELETE_TODO'){
    return _.filter(state, (todo) => todo.id != action.payload);    
  }else{
    return state;
  }
};

const lastUpdate = (state = false, action) => {
  switch(action.type){
    case 'ADD_TODO':
    case 'DELETE_TODO':
    case 'CHANGE_STATUS':
      return timestamp();
    default:
      return state;
  }
};

export default combineReducers({
    list: todos,
    lastUpdate 
})