import {combineReducers} from 'redux';
import _ from 'lodash';
import {timestamp, test_url} from '../utils';
import {DEFAULT_DATA_SOURCE, ALLOWED_DATA_SOURCES, DATA_SOURCE_URL} from '../global'


const todos = (state = [], action) => {
  if(action.type == 'LOAD'){
    return [...action.payload];
  }else if(action.type=='ADD_TODO'){
    return [...state, action.payload];
  }else if(action.type == 'CHANGE_STATUS'){
    return _.map(state, (todo) => {
      if(todo.id == action.payload){
        let response = {...todo}
        response.done = !response.done;
        response.modifiedAt = [...response.modifiedAt, timestamp()];
        return response;
      }else return todo;
    });
  }else if(action.type == 'UPDATE_TODO'){
    return _.map(state, (todo) => {
      if(todo.id == action.payload.id){
        return {...todo, ...action.payload};
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
    case 'UPDATE_TODO':
    case 'DELETE_TODO':
    case 'CHANGE_STATUS':
      return timestamp();
    default:
      return state;
  }
};
const defaultRoute = {
  id: 'HOME',
  label: 'To-Dos',
  order: 0,
  params: {}
};
const router = (state = defaultRoute, action) => {
  if(action.type == 'ROUTER' && action.payload.id != state.id){
    return _.cloneDeep(action.payload);
  }
  return state;
};
const routes = (state = [defaultRoute], action) => {
  if(action.type == 'ADD_ROUTE'){
    return [
      ..._.filter(state, (route) => route.id != action.payload.id),
      action.payload
    ];
  }
  if(action.type == 'REMOVE_ROUTE'){
    return _.filter(state, (route) => route.id != action.payload.id);
  }
  return state;
}

const handleErrors = (state = [], action) => {
  if(action.type == 'ERROR'){
    return [
      ...state,
      {
        timestamp: action.payload.timestamp || timestamp(),
        ...action.payload,
      }
    ];
  }
  return state;
};

const notifications = (state = [], action) => {
  if(action.type == 'CREATE_NOTIFICATION'){
    return [
      ...state,
      {
        ...action.payload
      }
    ];
  }
  if(action.type == 'REMOVE_NOTIFICATION'){
    return _.filter(state, (item) => item.timestamp != action.payload.timestamp);    
  }
  if(action.type == 'ERROR'){
    return [
      ...state,
      {
        timestamp: action.payload.timestamp || timestamp(),
        title: action.payload.title || `ERROR`,
        description: action.payload.description || `there was an error ${action.payload.error.message}`,
        type: 'danger'
      }
    ]
  }
  return state;
};

const data_source = (state = DEFAULT_DATA_SOURCE, action) => {
  if(
    action.type == 'DATA_SOURCE' &&
    ALLOWED_DATA_SOURCES.includes(action.payload)
    ){
    return _.cloneDeep(action.payload)
  }
  return state
}

const data_source_url = (state = DATA_SOURCE_URL, action) => {
  if( action.type == 'DATA_SOURCE_URL' && test_url(action.payload) ){
    return _.cloneDeep(action.payload)
  }
  return state
}

const data_loaded = (state = false, action) => {
  if(action.type == 'LOAD') return true
  return state
}

export default combineReducers({
    list: todos,
    lastUpdate,
    currentRoute: router,
    routes: routes,
    errors: handleErrors,
    notifications: notifications,
    data_source: data_source,
    data_source_url: data_source_url,
    data_loaded: data_loaded
})