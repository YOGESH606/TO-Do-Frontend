import { ActionTypes } from '../redux/constants/action.types';
import * as api from '../api/index';

export const getTasks = () => async (dispatch) => {
    try {
        const { data } = await api.getTasks();
        //console.log(data);
        dispatch({ type: ActionTypes.GET_TASKS, payload: data })
    }
    catch (error) {
        console.log(error);
    }
}

export const createTask = (data) => async (dispatch) => {
    try {
        const res = await api.createTask(data);
         dispatch({type:ActionTypes.CREATE_TASK,payload:res.data})
       // console.log(res.data);

    }
    catch (error) {
        console.log(error);
    }
}
export const editTask = (id, updatedTask) => async (dispatch) => {
    try {
        const res = await api.editTask(id, updatedTask);
        dispatch({ type: ActionTypes.EDIT_TASK, payload:res.data });
        //console.log("responce ",res);
    }
    catch (error) {
        console.log(error);
    }
}
export const deleteTask = (id) => async (dispatch) => {
    try {
        dispatch({ type: ActionTypes.DELETE_TASK, payload:id });
       // console.log("deleteTask  action and dispached delete to reducer",id);
    }
    catch (error) {
        console.log(error);
    }
}