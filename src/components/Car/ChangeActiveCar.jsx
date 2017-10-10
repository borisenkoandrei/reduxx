import React from "react";
import { Select } from "antd";
const Option = Select.Option;

function ChangeActiveCar({ cars, changeActiveCar, activeCar }) {
  function handleChange(value) {
    console.log(value);
    changeActiveCar(value);
  }

  return (
    <Select
      value={activeCar.toString()}
      style={{ width: 120 }}
      onChange={handleChange}
    >
      {cars.map((car, index) => (
        <Option key={index} value={car.id.toString()}>
          {car.model}
        </Option>
      ))}
    </Select>
  );
}

export default ChangeActiveCar;
