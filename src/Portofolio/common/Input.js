import React from 'react';
import TextField from '@material-ui/core/TextField';

const Input = ({ name, value, label, onChange, inputId, error }) => {
    return (
        <div className="containerFillWidth">
            <TextField
                id={inputId}
                name={name}
                value={value}
                onChange={onChange}
                label={label}
                placeholder="Enter name"
                className="datatextField"
                margin="normal"
                variant="outlined"
            />
            {error && <span className="errorFont">{ error }</span> }
        </div>        
    );
}
 
export default Input;