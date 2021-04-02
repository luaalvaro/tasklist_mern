import * as services from '../services/Tasks';

// Actions
export const getTasks = () => async (dispatch) => {
    try {
        const { data } = await services.fetchTasks();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createTask = (task) => async (dispatch) => {
    try {
        const { data } = await services.createTask(task);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}