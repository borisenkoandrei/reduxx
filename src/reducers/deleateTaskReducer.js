import { DELETE_TASK } from "../const/const";

export default function deleateReducer(state = {}, action) {
  switch (action.type) {
    case DELETE_TASK:
      return Object.assign({}, state, { [action.id]: action });
    default:
      return state;
  }
}
