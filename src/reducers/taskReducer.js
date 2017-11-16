import { ADD_TASK, TOGGLE_COMPLITE_TASK } from "../const/const";

export default function taskReducer(state = {}, action) {
  switch (action.type) {
    case ADD_TASK:
      return Object.assign({}, state, { [action.id]: action.task });
    case TOGGLE_COMPLITE_TASK:
      const newState = Object.assign({}, state);
      let status =
        newState[action.activeCarId][action.taskType][action.taskId].complited;
      newState[action.activeCarId][action.taskType][
        action.taskId
      ].complited = !status;
      return newState;
    default:
      return state;
  }
}
