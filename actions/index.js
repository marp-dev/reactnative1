import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import _ from 'lodash';
import {generateID, timestamp} from '../utils';
import {DATA_SOURCE_URL, ALLOWED_DATA_SOURCES} from '../global'

const ajax = axios.create({
    baseURL: `${DATA_SOURCE_URL}`
});

export const AddTodoItem = function(name){
    return (dispatch) => {
        let now = timestamp();
        let todo = {
          id: generateID('todo_'),
          name: name,
          done: false,
          createdAt: now,
          modifiedAt: [now],
          archived: false
        };    
        ajax
            .post('/todos', todo)
            .then(() => {
                dispatch({
                    type:'ADD_TODO',
                    payload: todo
                });
            })
            .catch((error) => {
                dispatch({
                    type: 'ERROR',
                    payload: {action_name: 'AddTodoItem', error:error}
                });
            });
    };
}

const getTodo = (list, id) => _.filter(list, (item) => item.id == id)[0];

const update = (todo, callback, errorcallback) => {
    ajax
    .patch(`/todos/${todo.id}`, todo)
    .then((response) => callback(response))
    .catch((error) => errorcallback(error));
};

export const ChangeStatus = function(id){
    return (dispatch, getState) => {
        const todo = getTodo(getState().list, id);
        update(
            {...todo, ...{done:!todo.done} },
            (res)=>dispatch({type:'CHANGE_STATUS',payload: id}),
            (error)=>dispatch({
                type: 'ERROR',
                payload: {action_name: 'ChangeStatus', error:error}
            })
        );
    };
}

export const UpdateTodo = function({id, name, archived}){
    return (dispatch, getState) => {
        const todo = getTodo(getState().list, id);
        update(
            {...todo, ...{name, archived} },
            (res)=>{
                dispatch({
                    type: 'UPDATE_TODO',
                    payload: {
                        id, name, archived
                    }
                });
            },
            (error)=>{
                dispatch({
                    type: 'ERROR',
                    payload: {action_name: 'UpdateTodo', error:error}
                });
            }
        );
    };
}

export const DeleteTodo = function(id){
    return (dispatch, getState) => {
        ajax
            .delete(`/todos/${id}`)
            .then(()=>{
                dispatch({
                    type: 'DELETE_TODO',
                    payload: id
                });
            })
            .catch((error) => {
                dispatch({
                    type: 'ERROR',
                    payload: {action_name: 'DeleteTodo', error:error}
                });
            });
    };
}

export const Load = function(data){
    return {
        type: 'LOAD',
        payload: data
    }
}

export const LoadFromServer = function(){
    return (dispatch, getState) => {
        ajax
        .get('/todos')
        .then((response) => {
            dispatch({
                type: 'LOAD',
                payload: response.data
            });
        }).catch((error) => {
            dispatch({
                type: 'ERROR',
                payload: {
                    action_name: 'LoadFromServer',
                    description: 'There was an error while getting the data from the server',
                    error:error
                }
            });
        });
    };
}

export const LoadDataSource = function(){
    return async (dispatch, getState) => {
        try {
            const source = await AsyncStorage.getItem('@data_source')
                dispatch({
                    type: 'DATA_SOURCE',
                    payload: source
                })
        }catch(error){
            dispatch({
                type: 'ERROR',
                payload: {
                    timestamp: timestamp(),
                    action_name: 'LoadDataSource',
                    description: `There was an error while loading data_source with AsyncStorage`,
                    error:error
                }
            })
        }
    }
}

export const SetDataSource = function(new_data_source){
    return async (dispatch, getState) => {

        try {
            if(ALLOWED_DATA_SOURCES.includes(new_data_source)){
                dispatch({
                    type: 'ERROR',
                    payload: {
                        timestamp: timestamp(),
                        action_name: 'SetDataSource',
                        description: `data_source is eather 'server' or 'device', not '${new_data_source}'`,
                    }
                })
            }
    
            await AsyncStorage.setItem('@data_source', new_data_source)
            dispatch({
                type: 'DATA_SOURCE',
                payload: new_data_source
            })
        }catch(error){
            dispatch({
                type: 'ERROR',
                payload: {
                    timestamp: timestamp(),
                    action_name: 'SetDataSource',
                    description: `There was an error while setting data_source with AsyncStorage`,
                    error:error
                }
            })
        }
    
    }
}

export const LoadRoute = function(route){
    return {
        type: 'ROUTER',
        payload: route
    };
}

export const AddRoute = function(route){
    return {
        type: 'ADD_ROUTE',
        payload: route
    };
}

export const RemoveRoute = function(route_id){
    return {
        type: 'REMOVE_ROUTE',
        payload: route_id
    };
}

export const Error = function({title, description}, error){
    return {
        type: 'ERROR',
        payload: {
            timestamp: timestamp(),
            action_name: 'Error',
            title: title,
            description: `There was an error. ${description}`,
            error:error
        }
    };
}

export const CreateNotification = function({timestamp, title, description, type}){
    let notificationType, notificationTimestamp;
    switch(type){
        case 'danger':
            notificationType = 'danger';
            break;
        case 'warning':
            notificationType = 'warning';
            break;
        case 'notice':
        default:
            notificationType = 'notice';
    }
    notificationTimestamp = timestamp || timestamp();
    return {
        type: 'CREATE_NOTIFICATION',
        payload: {
            timestamp: notificationTimestamp,
            title,
            description,
            type, notificationType
        }
    };
}

export const CloseNotification = function(timestamp){
    return {
        type: 'REMOVE_NOTIFICATION',
        payload: {
            timestamp
        }
    }
}