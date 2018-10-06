import { FETCH_TODOS, ADD_TODO } from '../actions/types';

const initialState = {
    todosList: [],
    newTodo: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_TODOS:
            return {
                ...state,
                todosList: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todosList: action.payload
            }
        default:
            return state;
    }
}
