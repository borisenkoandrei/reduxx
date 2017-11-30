import React from "react";
import { connect } from "react-redux";

import Task from "../Table/Task";

import * as FILTER from "../../const/filter";

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
          {Object.keys(props.tasks).length !== 0 ? (
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
            <tr>
              <td>Пока ничего нет</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function getTasks(tasks, filter) {
  const keyArray = Object.keys(tasks);
  let result = [];
  switch (filter) {
    case FILTER.ALL:
      Object.keys(tasks).forEach(key => {
        if (tasks[key].deleted === false) {
          result.push(tasks[key]);
        }
      });
      break;
    case FILTER.DELETE:
      Object.keys(tasks).forEach(key => {
        if (tasks[key].deleted === true) {
          result.push(tasks[key]);
        }
      });
      break;
    case FILTER.FINISHED:
      Object.keys(tasks).forEach(key => {
        if (tasks[key].complited === true && tasks[key].deleted === false) {
          result.push(tasks[key]);
        }
      });
      break;
    case FILTER.IN_WORK:
      Object.keys(tasks).forEach(key => {
        if (tasks[key].complited === false && tasks[key].deleted === false) {
          result.push(tasks[key]);
        }
      });
    default:
      return Object.keys(tasks).map(key => tasks[key]);
  }
  return result;
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
      dispatch(toggleCompliteTask(carid, taskId, taskType)),
    moveToDeleted: (carid, taskid) => dispatch(moveToDeleted(carid, taskid)),
    deleteTask: (carid, taskid) => dispatch(deleteTask(carid, taskid)),
    moveToActive: (carid, taskid) => dispatch(moveToActive(carid, taskid))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
