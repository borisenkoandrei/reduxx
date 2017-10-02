import React from 'react';
import DeleteButton from './AcsessoriesDeleteButton';


function AcsessoriesItem({name, amount, id, deleate}){
    return(
        <li id={id}>{name + ' X ' + amount}<DeleteButton id={id} deleate={deleate} /></li>
    )
}

export default AcsessoriesItem;