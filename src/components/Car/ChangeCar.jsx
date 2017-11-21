import React from "react";
import { Select } from "antd";

const Option = Select.Option;

function ChangeCar({ cars, changeCar, activeCar }) {
  function handleChange(value) {
    console.log(value);
    changeCar(value);
  }
  return (
    <div>
      <Select
        value={Object.keys(cars).length !== 0 ? String(activeCar) : null}
        onChange={handleChange}
        style={{ width: 120 }}
        disabled={Object.keys(cars).length === 0 ? true : false}
      >
        {Object.keys(cars).map(carKey => (
          <Option key={carKey} value={carKey}>
            {cars[carKey].model}
          </Option>
        ))}
      </Select>
    </div>
  );
}

export default ChangeCar;
