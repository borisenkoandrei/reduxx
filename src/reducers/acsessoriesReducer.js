import {
  ADD_ACCESSORY,
  CHANGE_ACCESSORY,
  TOGGLE_ACCESSORY_STATUS,
  DELETE_ACCESSORY
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
    case DELETE_ACCESSORY:
      const newObject4 = Object.assign({}, state);
      const accessory = Object.assign({}, newObject4[action.taskId]);
      delete accessory[action.accessoryId];
      const resultObject = Object.assign({}, newObject4, {
        [action.taskId]: accessory
      });
      return resultObject;

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
