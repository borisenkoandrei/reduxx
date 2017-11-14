import { ADD_TASK } from "../const/const";

export function addTask(taskObj) {
  return {
    type: ADD_TASK,
    id: taskObj.id,
    task: taskObj
  };
}
