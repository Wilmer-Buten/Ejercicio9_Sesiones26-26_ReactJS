import { useReducer } from 'react'
import LEVELS from '../../models/levels.enum'
import TaskReducer from '../reducers/TaskReducer'
import TaskContext from '../contexts/TaskContext'
import { ADD_TASK, COMPLETE_TASK, DELETE_TASK } from '../types/taskTypes'
import { Task } from '../../models/task.class'


function TaskState(props) {

    const defaultClass1 = new Task('Task #1', 'Insert your description', false, LEVELS.NORMAL)
    const defaultClass2 = new Task('Task #2', 'Insert your description', true, LEVELS.URGENT)
    const defaultClass3 = new Task('Task #3', 'Insert your description', false, LEVELS.BLOCKING)


    const initialState = {
        tasksList: [
            defaultClass1,
            defaultClass2,
            defaultClass3
        ]
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState)


    const addTask = (task) => {
        const tempTasks = [...state.tasksList];
        tempTasks.push(task)
        dispatch({
            type: ADD_TASK,
            payload: tempTasks
        })
    }

    const deleteTask = (task) => {
        const index = state.tasksList.indexOf(task);
        const tempTasks = [...state.tasksList];
        tempTasks.splice(index, 1)
        dispatch({
            type: DELETE_TASK,
            payload: tempTasks
        })
    }

    const completeTask = (task) => {

        const index = state.tasksList.indexOf(task);
        const tempTasks = [...state.tasksList];
        tempTasks[index].completed = !tempTasks[index].completed;

        dispatch({
            type: COMPLETE_TASK,
            payload: tempTasks
        })
    }


    return (
        <TaskContext.Provider value={{
            tasks: state.tasksList,
            addTask,
            deleteTask,
            completeTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState