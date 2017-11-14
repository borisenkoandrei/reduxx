import { ADD_ACCESSORY } from "../const/const";

export default function accessoriesReducer(state = {}, action) {
  switch (action.type) {
    case ADD_ACCESSORY:
      return Object.assign({}, state, { [action.id]: action.accessory });
    default:
      return state;
  }
}
