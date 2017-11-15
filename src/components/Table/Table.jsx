import React from "react";
import { connect } from "react-redux";

import Task from "../Table/Task";

function Table(props) {
  function getTasks(tasks, filter) {
    const activeTasks = tasks.activeTasks ? tasks.activeTasks : [];
    const deleateTasks = tasks.deletedTasks ? tasks.deletedTasks : [];

    let result = [];
    switch (filter) {
      case "ALL":
        return Object.keys(activeTasks).map(taskId => {
          return activeTasks[taskId];
        });
      case "IN_WORK":
        Object.keys(activeTasks).forEach(taskId => {
          if (!activeTasks[taskId].complited) {
            result.push(activeTasks[taskId]);
          }
        });
        return result;
      case "FINISHED":
        Object.keys(activeTasks).forEach(taskId => {
          if (activeTasks[taskId].complited) {
            result.push(activeTasks[taskId]);
          }
        });
        return result;
      case "DELETE":
        return Object.keys(deleateTasks).map(taskId => {
          return deleateTasks[taskId];
        });
      default:
        return tasks;
    }
  }

  const Tasks = getTasks(props.tasks, props.filter);

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
        <tbody>{Tasks.map(task => <Task key={task.id} task={task} />)}</tbody>
      </table>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks[state.settings.activeCarId],
    accessories: state.accessories,
    filter: state.settings.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
