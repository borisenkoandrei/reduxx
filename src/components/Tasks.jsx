import React from 'react';
import Task from './Task';


function Tasks(props){
    return(
        <table>
            <thead>
                <tr>
                    <td>Вид работы</td>
                    <td>Стоимость</td>
                    <td>Комплектующие</td>
                    <td>Запланированная дата</td>
                    <td>Дата последней работы</td>
                </tr>
            </thead>
            <tbody>
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
            </tbody>
        </table>
    )
}

export default Tasks;
