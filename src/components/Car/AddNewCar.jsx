import React from "react";
import "../../style/AddNevCarS.css";
import { Input, Button } from "antd";

function AddNewCar(props) {
  if (!props.add) {
    return null;
  }

  function createCarObj(event) {
    event.preventDefault();
    let id = Date.now();
    let newCar = {
      id: id,
      brand: event.target.brand.value,
      model: event.target.model.value,
      year: event.target.year.value,
      engineCapacity: event.target.engineCapacity.value,
      hp: event.target.hp.value,
      vin: event.target.vin.value,
      workItems: []
    };

    props.addNewCar(newCar);
    props.openAddWindow();
    props.changeActiveCar(id);
  }

  return (
    <form
      id="add-new-car_form"
      className="add-new-car"
      action="submite"
      onSubmit={createCarObj}
    >
      <label className="add-new-car_label" htmlFor="brand">
        Марка<Input
          className="new-car_input"
          type="text"
          id="brand"
          name="brand"
        />
      </label>
      <label className="add-new-car_label" htmlFor="model">
        Модель<Input
          className="new-car_input"
          type="text"
          id="model"
          name="model"
        />
      </label>
      <label className="add-new-car_label" htmlFor="year">
        Год<Input className="new-car_input" type="text" id="year" name="year" />
      </label>
      <label className="add-new-car_label" htmlFor="engine-capacity">
        Объем двигалеля<Input
          className="new-car_input"
          type="text"
          id="engineCapacity"
          name="engineCapacity"
        />
      </label>
      <label className="add-new-car_label" htmlFor="hp">
        Мощьность двигателя
        <Input className="new-car_input" type="text" id="hp" name="hp" />
      </label>
      <label className="add-new-car_label" htmlFor="vin">
        VIN
        <Input className="new-car_input" type="text" id="vin" name="vin" />
      </label>
      <Button
        type="submit"
        htmlType="submit"
        name="Submit"
        form="add-new-car_form"
        icon="save"
      >
        Сохранить
      </Button>
      <Button icon="close" onClick={() => props.openAddWindow()}>
        Отмена
      </Button>
    </form>
  );
}

export default AddNewCar;
