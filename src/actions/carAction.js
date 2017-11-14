import { ADD_CAR } from "../const/const";

export function addCar(carObj) {
  return {
    type: ADD_CAR,
    id: carObj.id,
    car: carObj
  };
}
