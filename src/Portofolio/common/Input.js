import React from 'react';
import TextField from '@material-ui/core/TextField';

const Input = ({ name, value, label, onChange, inputId }) => {
    return (
        <div className="containerFillWidth">
            <TextField
                id={inputId}
                name={name}
                value={value}
                onChange={onChange}
                label={label}
                placeholder="Enter name"
                className="contacttextField"
                margin="normal"
                variant="outlined"
            />
        </div>        
    );
}
 
export default Input;