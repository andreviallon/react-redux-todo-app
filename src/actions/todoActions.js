import { FETCH_TODOS } from './types';

export const fetchTodos = () => dispatch => {
    const action = {
        type: FETCH_TODOS,
        payload: ['Laundry', 'grocery shopping']
    }
    dispatch(action);
}
