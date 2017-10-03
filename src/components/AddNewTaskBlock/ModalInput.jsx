import React from 'react';

function Input({label, id, change, val}){
    function handleChange(event){
        let value=event.target.value;
        change(value);
    }

    return(
        <label className='new-task-modal_input' htmlFor={id}>{label}
            <input className="ant-input" id={id} type="text" onChange={handleChange} />
        </label>
    )
}

export default Input;