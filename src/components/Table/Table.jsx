import React from "react";
import { connect } from "react-redux";

import Task from "../Table/Task";

import {
  toggleCompliteTask,
  moveToDeleted,
  deleteTask,
  moveToActive
} from "../../actions/taskAction";

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
          {Object.keys(props.tasks).length == 0 ? (
            props.tasks.map(task => (
              <Task
                key={task.id}
                task={task}
                activeCar={props.activeCar}
                toggleCompliteTask={props.toggleCompliteTask}
                filter={props.filter}
                moveToDeleted={props.moveToDeleted}
                deleteTask={props.deleteTask}
                moveToActive={props.moveToActive}
              />
            ))
          ) : (
            <tr>Пока ничего нет</tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function getTasks(tasks, activeCarId, filter) {
  const activeTasks = tasks.active[activeCarId]
    ? tasks.active[activeCarId]
    : {};
  const deleteTasks = tasks.delete[activeCarId]
    ? tasks.delete[activeCarId]
    : {};
  console.log(deleteTasks);

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
      return Object.keys(deleteTasks).map(taskId => {
        return deleteTasks[taskId];
      });
    default:
      return tasks;
  }
}

const mapStateToProps = state => {
  return {
    tasks: getTasks(
      state.tasks,
      state.settings.activeCarId,
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
      dispatch(toggleCompliteTask(carid, taskId, taskType)),
    moveToDeleted: (carid, taskid) => dispatch(moveToDeleted(carid, taskid)),
    deleteTask: (carid, taskid) => dispatch(deleteTask(carid, taskid)),
    moveToActive: (carid, taskid) => dispatch(moveToActive(carid, taskid))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
