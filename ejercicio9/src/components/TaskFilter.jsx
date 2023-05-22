import React, { useState } from 'react'
import { InputLabel, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import PropTypes from 'prop-types'
import LEVELS from '../models/levels.enum';

function TaskFilter({handleCheck}) {
    

    return (
        <FormGroup style={{ display: 'flex', flexDirection: 'row' }}>
            <FormControlLabel control={<Checkbox id={LEVELS.NORMAL} onClick={handleCheck} />} label="Normal" />
            <FormControlLabel control={<Checkbox id={LEVELS.URGENT} onClick={handleCheck} />} label="Urgent" />
            <FormControlLabel control={<Checkbox id={LEVELS.BLOCKING} onClick={handleCheck} />} label="Blocking" />
        </FormGroup>
    )
}

TaskFilter.propTypes = {
    handleCheck: PropTypes.func.isRequired
}

export default TaskFilter;