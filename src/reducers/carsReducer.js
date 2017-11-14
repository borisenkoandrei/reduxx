import { ADD_CAR } from "../const/const";

export default function carReducer(state = {}, action) {
  switch (action.type) {
    case ADD_CAR:
      return Object.assign({}, state, { [action.id]: action.car });
    default:
      return state;
  }
}
