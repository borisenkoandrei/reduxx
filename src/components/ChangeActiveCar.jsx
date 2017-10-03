import React from "react";

function ChangeActiveCar(props) {
  const cars = props.cars;

  return (
    <select
      onChange={e => {
        props.changeActiveCar(e.target.value);
      }}
      value={props.activecar}
    >
      {cars.map((car, index) => (
        <option key={index} value={car.id}>
          {car.model}
        </option>
      ))}
    </select>
  );
}

export default ChangeActiveCar;
