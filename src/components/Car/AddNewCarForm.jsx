import React from "react";
import { Button, Input } from "antd";
import "../../style/AddNevCarS.css";

function addNewCarForm(props) {
  function cancelhandler(event) {
    // props.closemodal();
  }

  function submitHandler(event) {
    event.preventDefault();
    const newCar = {
      id: +Date.now(),
      brand: event.target.brand.value,
      model: event.target.model.value,
      year: event.target.year.value,
      engine: event.target.engine.value,
      hp: event.target.hp.value,
      vin: event.target.vin.value
    };

    console.log(newCar);

    props.addNewCar(newCar);
  }

  function cancelHandler(event) {
    props.modalHandler();
  }

  return (
    <div className="modal">
      <div className="add-new-car">
        <form action="submit" onSubmit={submitHandler}>
          <label className="add-new-car_label" htmlFor="brand">
            Марка:<Input className="add-new-car_input" id="brand" type="text" />
          </label>
          <label className="add-new-car_label" htmlFor="model">
            Модель:<Input
              className="add-new-car_input"
              id="model"
              type="text"
            />
          </label>
          <label className="add-new-car_label" htmlFor="year">
            Год выпуска:<Input
              className="add-new-car_input"
              id="year"
              type="text"
            />
          </label>
          <label className="add-new-car_label" htmlFor="engine">
            Объем двигателя:<Input
              className="add-new-car_input"
              id="engine"
              type="text"
            />
          </label>
          <label className="add-new-car_label" htmlFor="hp">
            Л.С:<Input className="add-new-car_input" id="hp" type="text" />
          </label>
          <label className="add-new-car_label" htmlFor="vin">
            VIN: <Input className="add-new-car_input" id="vin" type="text" />
          </label>
          <div className="add-new-car_buttons">
            <Button className="add-new-car_button" htmlType="submit">
              OK
            </Button>
            <Button className="add-new-car_button" onClick={cancelHandler}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default addNewCarForm;
