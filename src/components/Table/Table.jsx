import React from "react";
import { connect } from "react-redux";

import Task from "../Table/Task";

import { toggleCompliteTask } from "../../actions/taskAction";

function Table(props) {
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
            <td>Действие</td>
          </tr>
        </thead>
        <tbody>
          {props.tasks.map(task => (
            <Task
              key={task.id}
              task={task}
              activeCar={props.activeCar}
              toggleCompliteTask={props.toggleCompliteTask}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

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

const mapStateToProps = state => {
  return {
    tasks: getTasks(
      state.tasks[state.settings.activeCarId],
      state.settings.filter
    ),
    accessories: state.accessories,
    filter: state.settings.filter,
    activeCar: state.settings.activeCarId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleCompliteTask: (carid, taskId, taskType) =>
      dispatch(toggleCompliteTask(carid, taskId, taskType))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
