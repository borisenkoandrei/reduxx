import React from 'react';
import DeleteButton from './AcsessoriesDeleteButton';

function AcsessoriesItem({name, amount, id}){
    return(
        <li id={id}>{name + ' X ' + amount}<DeleteButton /></li>
    )
}

export default AcsessoriesItem;