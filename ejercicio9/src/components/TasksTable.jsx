import React from 'react'
import TaskComponent from './TaskComponent'
import { Task } from '../models/task.class'
import { PropTypes } from 'prop-types'

const TasksTable = ({tasks, completeTask, deleteTask, taskFilter}) => {
    return (
       <>
       {tasks.length === 0 
         ? <h3>NO TASKS TO DISPLAY</h3>
         :
         <table>
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, index) => {
                    const filteredTask = taskFilter(task)
                    if (filteredTask) {
                        return (
                            <TaskComponent key={index} task={filteredTask} completed={completeTask} deleteTask={deleteTask}></TaskComponent>

                        )
                    }
                    return null
                })}
            </tbody>
        </table>
       }
       </>
    )
}
TasksTable.propTypes = {
    completeTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    taskFilter: PropTypes.func.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.instanceOf(Task).isRequired).isRequired

}


export default TasksTable;