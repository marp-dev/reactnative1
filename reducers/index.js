import {combineReducers} from 'redux';

const todos = (state = [], action) => {
  if(action.type=='ADD_TODO'){
    return [...state, action.payload];
  }else{
    return state;
  }
};

export default combineReducers({
    list: todos
})