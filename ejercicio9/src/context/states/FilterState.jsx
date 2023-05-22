import React, { useReducer } from 'react'
import FilterContext from '../contexts/FilterContext'
import FilterReducer from '../reducers/FilterReducer'
import { ADD_FILTER, REMOVE_FILTER } from '../types/filterTypes'

function FilterState(props) {
    
    const initialState = {
        filtersList: []
    }

    const [state, dispatch] = useReducer(FilterReducer, initialState)

    const addFilter = (filter) => {

        let tempFilters = [...state.filtersList];
        tempFilters.push(filter)
        dispatch({
            type: ADD_FILTER,
            payload: tempFilters
        })
    }   

    const removeFilter = (filter) => {
        const index = state.filtersList.indexOf(filter)
        let tempFilters = [...state.filtersList];
        tempFilters.splice(index, 1)  
        dispatch({
            type: REMOVE_FILTER,
            payload: tempFilters
        })  
    }

    return (
    <FilterContext.Provider value={{
            filters: state.filtersList,
            addFilter,
            removeFilter
    }}>
        {props.children}
    </FilterContext.Provider>
  )
}

export default FilterState