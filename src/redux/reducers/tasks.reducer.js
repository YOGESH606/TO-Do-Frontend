import { ActionTypes } from "../constants/action.types";

const intialState = {
    tasks: [],
}

export const tasksReducer = (tasks = [], { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_TASKS:
            {
                //  console.log("reducer gettasks",payload);
                return payload;
            }

        case ActionTypes.CREATE_TASK:
            {
                //console.log("reducer cretetask",[...tasks, payload]);
                return ([...tasks, payload])
            }

        case ActionTypes.EDIT_TASK:
            {
                // console.log("reducer cretetask",[...tasks, payload]);
                return tasks.map((post) => post._id === payload._id ? payload : post);
            }
        case ActionTypes.DELETE_TASK:
            {
                 return tasks.filter((post) =>(post._id !== payload)) 
            }
        default:
            return tasks;
    }
}