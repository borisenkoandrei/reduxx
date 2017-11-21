import { ADD_CAR, DELETE_CAR } from "../const/const";

export function addCar(carObj) {
  return {
    type: ADD_CAR,
    id: carObj.id,
    car: carObj
  };
}

export function deleteCar(carId) {
  return {
    type: DELETE_CAR,
    carId
  };
}
