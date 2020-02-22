import axios from 'axios';
import _ from 'lodash';
import {generateID, timestamp} from '../utils';

const ajax = axios.create({
    baseURL: 'http://127.0.0.1:3000/'
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
                    payload: error
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
            (error)=>dispatch({type: 'ERROR', payload: error})
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
                    id, name
                }
            });
        }, (error)=>{
            dispatch({
                type: 'ERROR',
                payload: error
            });    
        });
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
                    payload: error
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
                payload: error
            });
        });
    };
}