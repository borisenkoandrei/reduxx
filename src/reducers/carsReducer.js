import { ADD_CAR, DELETE_CAR } from "../const/const";

export default function carReducer(state = {}, action) {
  switch (action.type) {
    case ADD_CAR:
      return Object.assign({}, state, { [action.id]: action.car });
    case DELETE_CAR:
      let newState = Object.assign({}, state);
      delete newState[action.carId];
      return newState;
    default:
      return state;
  }
}
