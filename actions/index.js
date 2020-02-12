export const AddTodoItem = function(todo){
    return {
        type:'ADD_TODO',
        payload: todo
    }
}

export const ChangeStatus = function(id){
    return {
        type: 'CHANGE_STATUS',
        payload: id
    }
}

export const UpdateTodo = function({id, name}){
    return {
        type: 'UPDATE_TODO',
        payload: {
            id, name
        }
    }
}