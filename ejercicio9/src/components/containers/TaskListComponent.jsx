import React, { useContext, useEffect, useState } from "react";

import '../../styles/task.scss';
import TaskForm from "../forms/TaskForm";
import TaskContext from "../../context/contexts/TaskContext";
import TaskFilterContainer from "./TaskFilterContainer";
import TasksTable from "../TasksTable";
import FilterContext from "../../context/contexts/FilterContext";


const TaskListComponent = () => {
    
    const {tasks, addTask, deleteTask, completeTask } = useContext(TaskContext);
    const {filters} = useContext(FilterContext)

    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500)
    }, [tasks])

    const tasksFilterByCheckbox = (task) => {
        if(filters.length === 0 || filters.includes(task.level)){
            return task
        }
        return null
    }

    return (
        <div>
            <div className="col-12 ">
                <div className="card">
                    <div className='card-header p-3'>
                        <div>
                            <h5>
                                Your Tasks:
                            </h5>
                        </div>
                        <div>
                        <TaskFilterContainer></TaskFilterContainer>
                        </div>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbat='true' style={{
                        position: 'relative',
                        height: '400rpx'
                    }}>
                        {loading
                            ? <div>LOADING...</div>
                            : <TasksTable tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} taskFilter={tasksFilterByCheckbox}></TasksTable>
                        }
                    </div>
                </div>
            </div>
            <TaskForm add={addTask} length={tasks.length}></TaskForm>
        </div>
    )

}

export default TaskListComponent;