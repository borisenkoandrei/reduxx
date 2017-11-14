import { CHANGE_ACTIVE_CAR, CHANGE_FILTER } from "../const/const";

export default function changeActiveCar(state = {}, action) {
  switch (action.type) {
    case CHANGE_ACTIVE_CAR:
      return Object.assign({}, state, { activeCarId: action.id });
    case CHANGE_FILTER:
      return Object.assign({}, state, { filter: action.filter });
    default:
      return state;
  }
}
