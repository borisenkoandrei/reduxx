import React from 'react';

function DeleteButton({id, deleate}){
    function handleDeleate(event){
        const id = event.target.id;

        deleate(id);

    }


    return(
        <button id={id} onClick={handleDeleate}>Удалить</button>
    )
}

export default DeleteButton;