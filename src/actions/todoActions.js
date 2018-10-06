import { FETCH_TODOS, ADD_TODO } from './types';

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
