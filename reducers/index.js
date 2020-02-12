import {combineReducers} from 'redux';
import {generateID} from '../utils';

const todos = (state = [], action) => {
  if(action.type=='ADD_TODO'){
    let todo = {
      id: generateID('todo_'),
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