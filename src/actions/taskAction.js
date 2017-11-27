import {
  ADD_TASK,
  TOGGLE_COMPLITE_TASK,
  MOVE_TO_DELETED,
  DELETE_TASK,
  MOVE_TO_ACTIVE
} from "../const/const";

export function addTask(activecar, taskObj) {
  return {
    type: ADD_TASK,
    activeCarId: activecar,
    id: taskObj.id,
    task: taskObj
  };
}

export function toggleCompliteTask(activeCarId, taskId) {
  return {
    type: TOGGLE_COMPLITE_TASK,
    activeCarId,
    taskId
  };
}

export function moveToDeleted(activeCarId, taskId) {
  return {
    type: MOVE_TO_DELETED,
    activeCarId,
    taskId
  };
}

export function deleteTask(activeCarId, taskId) {
  return {
    type: DELETE_TASK,
    activeCarId,
    taskId
  };
}

export function moveToActive(activeCarId, taskId) {
  return {
    type: MOVE_TO_ACTIVE,
    activeCarId,
    taskId
  };
}
