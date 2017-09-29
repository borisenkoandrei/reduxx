import React from 'react';

function NameInput(props){
    return(
        <input onChange={(event)=> {props.change(event.target.value)}} type="text" placeholder="значение"/>
    )
}

export default NameInput;