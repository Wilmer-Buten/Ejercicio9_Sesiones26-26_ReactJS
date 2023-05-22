import React, { useContext } from 'react'
import TaskFilter from '../TaskFilter';
import FilterContext from '../../context/contexts/FilterContext';

function TaskFilterContainer() {

    const {addFilter, removeFilter } = useContext(FilterContext);

    const handleCheck = (e) => {
        
        const level = e.target.id
        const isChecked = e.target.checked
        if(isChecked){
            addFilter(level) 
        } else {
            removeFilter(level)
        }   
    }
  
    return (
    <TaskFilter handleCheck={handleCheck}/>
  )
}

export default TaskFilterContainer;