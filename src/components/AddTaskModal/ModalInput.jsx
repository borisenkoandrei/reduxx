import React from 'react';

function Input({label, id}){
    return(
        <label className='new-task-modal_input' htmlFor={id}>{label}<input id={id} type="text"/></label>
    )
}

export default Input;