import {
  ADD_TASK,
  TOGGLE_COMPLITE_TASK,
  MOVE_TO_DELETED,
  DELETE_TASK,
  MOVE_TO_ACTIVE
} from "../const/const";

const initialState = {};

export default function taskReducer(state = initialState, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_TASK:
      return Object.assign({}, state, {
        [action.activeCarId]: Object.assign({}, state[action.activeCarId], {
          [action.id]: action.task
        })
      });

    case TOGGLE_COMPLITE_TASK:
      let status = newState[action.activeCarId][action.taskId].complited;
      newState[action.activeCarId][action.taskId].complited = !status;
      newState[action.activeCarId][action.taskId].pastDate =
        action.compliteDate;
      return newState;
    case MOVE_TO_DELETED:
      newState[action.activeCarId][action.taskId].deleted = true;
      return newState;
    case DELETE_TASK:
      delete newState[action.activeCarId][action.taskId];
      return newState;
    case MOVE_TO_ACTIVE:
      newState[action.activeCarId][action.taskId].deleted = false;
      return newState;

    default:
      return state;
  }
}
