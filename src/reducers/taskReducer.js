import {
  ADD_TASK,
  TOGGLE_COMPLITE_TASK,
  MOVE_TO_DELETED,
  DELETE_TASK,
  MOVE_TO_ACTIVE
} from "../const/const";

export default function taskReducer(state = {}, action) {
  switch (action.type) {
    case ADD_TASK:
      return Object.assign({}, state, { [action.id]: action.task });
    case TOGGLE_COMPLITE_TASK:
      const newState = Object.assign({}, state);
      let status = newState.active[action.activeCarId][action.taskId].complited;
      newState.active[action.activeCarId][action.taskId].complited = !status;
      return newState;
    case MOVE_TO_DELETED:
      let newState2 = Object.assign({}, state);
      const task = newState2.active[action.activeCarId][action.taskId];
      delete newState2.active[action.activeCarId][action.taskId];
      newState2.delete[action.activeCarId][action.taskId] = task;
      return newState2;
    case DELETE_TASK:
      let newState3 = Object.assign({}, state);
      delete newState3.delete[action.activeCarId][action.taskId];
      return newState3;
    case MOVE_TO_ACTIVE:
      let newState4 = Object.assign({}, state);
      let task2 = newState4.delete[action.activeCarId][action.taskId];
      delete newState4.delete[action.activeCarId][action.taskId];
      newState4.active[action.activeCarId][action.taskId] = task2;
      return newState4;

    default:
      return state;
  }
}
