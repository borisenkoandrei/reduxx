import React from "react";
import Task from "./Task";

function Tasks({ tasks, onToggle, filter, compliteTask }) {
  function filterTasks(tasks, filter) {
    switch (filter) {
      case "ALL":
        return tasks;
      case "CCOMPLITED":
        return tasks.filter(task => task.complited);
      case "INWORK":
        return tasks.filter(task => !task.complited);
      default:
        return tasks;
    }
  }

  if (!tasks) {
    return null;
  }

  return (
    <div className="tasks-block">
      <table className="tasks-block_table">
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
          {filterTasks(tasks, filter).map(function(task, index) {
            return (
              <Task
                compliteTask={compliteTask}
                key={index}
                onToggle={onToggle}
                task={task}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Tasks;
