import { ADD_TASK, TOGGLE_COMPLITE_TASK } from "../const/const";

export function addTask(taskObj) {
  return {
    type: ADD_TASK,
    id: taskObj.id,
    task: taskObj
  };
}

export function toggleCompliteTask(activeCarId, taskId, taskType) {
  return {
    type: TOGGLE_COMPLITE_TASK,
    activeCarId,
    taskId,
    taskType
  };
}
