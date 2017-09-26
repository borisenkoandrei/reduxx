import React from 'react';
import Task from './Task';


function Tasks({tasks}){
    console.log(tasks)
    return(
        <div className='tasks-block'>        
            <table className='tasks-block_table'>
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
                    {tasks.map(function(task){return(<Task task={task} />) })}
                </tbody>
            </table>
        </div>
    )
}

export default Tasks;
