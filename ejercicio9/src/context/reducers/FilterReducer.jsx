import { ADD_FILTER, REMOVE_FILTER } from '../types/filterTypes';

function FilterReducer(state, action) {
  const {type, payload} = action;
  switch (type) {
    case ADD_FILTER:
        return {
            filtersList: payload
        } 
    case REMOVE_FILTER:
        return {
            filtersList: payload
        }   
    default:
        return state;
  }
}

export default FilterReducer