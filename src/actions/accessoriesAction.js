import { ADD_ACCESSORY } from "../const/const";

export function addAccessory(accessoryObj) {
  return {
    type: ADD_ACCESSORY,
    id: accessoryObj.id,
    accsessory: accessoryObj
  };
}
