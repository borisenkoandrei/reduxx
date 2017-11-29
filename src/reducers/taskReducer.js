import {
  ADD_TASK,
  TOGGLE_COMPLITE_TASK,
  MOVE_TO_DELETED,
  DELETE_TASK,
  MOVE_TO_ACTIVE
} from "../const/const";

const initialState = {
  active: {},
  delete: {}
};

export default function taskReducer(state = initialState, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_TASK:
      return Object.assign({}, state, {
        active: Object.assign({}, state.active, {
          [action.activeCarId]: Object.assign(
            {},
            state.active[action.activeCarId],
            { [action.id]: action.task }
          )
        }),
        delete: Object.assign({}, state.delete, {
          [action.activeCarId]: {}
        })
      });

    case TOGGLE_COMPLITE_TASK:
      let status = newState.active[action.activeCarId][action.taskId].complited;
      newState.active[action.activeCarId][action.taskId].complited = !status;
      newState.active[action.activeCarId][action.taskId].pastDate =
        action.compliteDate;
      return newState;
    case MOVE_TO_DELETED:
      const task = newState.active[action.activeCarId][action.taskId];
      delete newState.active[action.activeCarId][action.taskId];
      newState.delete[action.activeCarId][action.taskId] = task;
      return newState;
    case DELETE_TASK:
      delete newState.delete[action.activeCarId][action.taskId];
      return newState;
    case MOVE_TO_ACTIVE:
      let task2 = newState.delete[action.activeCarId][action.taskId];
      delete newState.delete[action.activeCarId][action.taskId];
      newState.active[action.activeCarId][action.taskId] = task2;
      return newState;

    default:
      return state;
  }
}
