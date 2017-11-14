import { DELETE_TASK } from "../const/const";

export function deleateTask(taskObj) {
  return {
    type: DELETE_TASK,
    id: taskObj.id,
    task: taskObj
  };
}
