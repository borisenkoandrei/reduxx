import { ADD_TASK } from "../const/const";

export default function taskReducer(state = {}, action) {
  switch (action.type) {
    case ADD_TASK:
      return Object.assign({}, state, { [action.id]: action.task });
    default:
      return state;
  }
}
