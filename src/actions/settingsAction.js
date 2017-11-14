import { CHANGE_ACTIVE_CAR, CHANGE_FILTER } from "../const/const";

export function changeActiveCar(id) {
  return {
    type: CHANGE_ACTIVE_CAR,
    id
  };
}

export function changeFilter(filter) {
  return {
    type: CHANGE_FILTER,
    filter
  };
}
