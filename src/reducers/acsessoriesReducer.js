import {
  ADD_ACCESSORY,
  CHANGE_ACCESSORY,
  TOGGLE_ACCESSORY_STATUS
} from "../const/const";

export default function accessoriesReducer(state = {}, action) {
  switch (action.type) {
    case ADD_ACCESSORY:
      const newObject3 = Object.assign({}, state, {
        [action.taskId]: Object.assign({}, state[action.taskId], {
          [action.id]: action.accsessory
        })
      });

      return newObject3;

    case CHANGE_ACCESSORY:
      let newObject = Object.assign({}, state);
      newObject[action.taskId][action.accessoryId].name = action.name;
      newObject[action.taskId][action.accessoryId].cost = action.cost;
      console.log(newObject === state);
      return newObject;
    case TOGGLE_ACCESSORY_STATUS:
      let newObject2 = Object.assign({}, state);
      newObject2[action.taskId][action.accessoryId].finished = !newObject2[
        action.taskId
      ][action.accessoryId].finished;
      return newObject2;
    default:
      return state;
  }
}
