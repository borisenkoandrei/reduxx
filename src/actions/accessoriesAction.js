import {
  ADD_ACCESSORY,
  CHANGE_ACCESSORY,
  TOGGLE_ACCESSORY_STATUS,
  DELETE_ACCESSORY
} from "../const/const";

export function addAccessory(taskId, accessoryObj) {
  return {
    type: ADD_ACCESSORY,
    taskId,
    id: accessoryObj.id,
    accsessory: accessoryObj
  };
}

export function deleteAccessory(taskId, accessoryId) {
  return {
    type: DELETE_ACCESSORY,
    taskId,
    accessoryId
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
