import React from "react";
import { Button } from "antd";

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
          <label htmlFor="brand">
            Марка:<input id="brand" type="text" />
          </label>
          <label htmlFor="model">
            Модель:<input id="model" type="text" />
          </label>
          <label htmlFor="year">
            Год выпуска:<input id="year" type="text" />
          </label>
          <label htmlFor="engine">
            Объем двигателя:<input id="engine" type="text" />
          </label>
          <label htmlFor="hp">
            Л.С:<input id="hp" type="text" />
          </label>
          <label htmlFor="vin">
            VIN: <input id="vin" type="text" />
          </label>
          <Button htmlType="submit">OK</Button>
          <Button onClick={cancelHandler}>Cancel</Button>
        </form>
      </div>
    </div>
  );
}

export default addNewCarForm;
