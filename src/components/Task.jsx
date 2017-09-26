import React from 'react';
import Accessories from '../components/Accessories';

function Task({ task }) {
    console.log(task)
    let {workType, cost, accessories, currentDate, pastDate } = task;

    return(
        <tr>
            <td>{workType}</td>
            <td>{cost}</td>
            <td><Accessories accessories={accessories} /></td>
            <td>{currentDate}</td>
            <td>{pastDate}</td>
        </tr>
    )
}

export default Task;
