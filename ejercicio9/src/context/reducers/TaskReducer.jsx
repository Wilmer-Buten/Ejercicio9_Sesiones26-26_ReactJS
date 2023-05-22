import { ADD_TASK, COMPLETE_TASK, DELETE_TASK } from "../types/taskTypes";


function TaskReducer(state, action) {
  
const {payload, type} = action;     
switch (type) {
    case ADD_TASK:
        return {
            
            tasksList: payload
        }
    case DELETE_TASK:
        return {
            tasksList: payload
        }
    case COMPLETE_TASK:
        return {
                tasksList: payload
            }    
    default:
        return state;
}
}

export default TaskReducer