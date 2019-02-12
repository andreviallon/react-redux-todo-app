import { FETCH_TODOS, ADD_TODO, REMOVE_TODO, CLEAR_ALL_TODOS, GO_BACK_TODOS } from './types';

export const fetchTodos = () => dispatch => {
    const action = {
        type: FETCH_TODOS,
        payload: ['Laundry', 'Grocery shopping', 'Wash car']
    }
    dispatch(action);
}

export const addTodo = newTodosList => dispatch => {
    const action = {
        type: ADD_TODO,
        payload: newTodosList
    }
    dispatch(action);
}

export const removeTodo = newTodosList => dispatch => {
    const action = {
        type: REMOVE_TODO,
        payload: newTodosList
    }
    dispatch(action);
}

export const clearAllTodos = newTodosList => dispatch => {
    const action = {
        type: CLEAR_ALL_TODOS,
        payload: newTodosList
    }
    dispatch(action);
}

export const goBackTodos = newTodosList => dispatch => {
    const action = {
        type: GO_BACK_TODOS,
        payload: newTodosList
    }
    dispatch(action);
}
