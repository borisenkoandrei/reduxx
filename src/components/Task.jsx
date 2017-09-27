import React from 'react';
import Accessories from '../components/Accessories';

function Task({ task, onToggle }) {
    let {workType, cost, accessories, currentDate, pastDate, complited, id} = task;

    return(
        <tr>
            <td>{workType}</td>
            <td>{cost}</td>
            <td><Accessories onToggle={onToggle} accessories={accessories} /></td>
            <td>{currentDate}</td>
            <td>{pastDate}</td>
            <td></td>
        </tr>
    )
}

export default Task;
