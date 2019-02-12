import { FETCH_TODOS, ADD_TODO, REMOVE_TODO, CLEAR_ALL_TODOS, GO_BACK_TODOS } from '../actions/types';

const initialState = {
    todosList: []
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
        case REMOVE_TODO:
            return {
                ...state,
                todosList: action.payload
            }
        case CLEAR_ALL_TODOS:
            return {
                ...state,
                todosList: action.payload
            }
        case GO_BACK_TODOS: {
            return {
                ...state,
                todosList: action.payload
            }
        }
        default:
            return state;
    }
}
