import {
  ADD_ACCESSORY,
  CHANGE_ACCESSORY,
  TOGGLE_ACCESSORY_STATUS
} from "../const/const";

export function addAccessory(accessoryObj) {
  return {
    type: ADD_ACCESSORY,
    id: accessoryObj.id,
    accsessory: accessoryObj
  };
}

export function changeAccessory(taskId, accessoryId, name, cost) {
  return {
    type: CHANGE_ACCESSORY,
    taskId,
    accessoryId,
    name,
    cost
  };
}

export function toggleAccessoryStatus(taskId, accessoryId) {
  return {
    type: TOGGLE_ACCESSORY_STATUS,
    taskId,
    accessoryId
  };
}
