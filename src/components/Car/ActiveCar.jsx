import React from "react";

function ActiveCar(props) {
  if (props.add) {
    return null;
  }

  let car = props.activeCarData;
  if (car === undefined) {
    return <div>Пока ничего нет</div>;
  } else {
    return (
      <table>
        <tbody>
          <tr>
            <td className="row-name">Марка</td>
            <td>{car.brand}</td>
          </tr>
          <tr>
            <td className="row-name">Модель</td>
            <td>{car.model}</td>
          </tr>
          <tr>
            <td className="row-name">Год</td>
            <td>{car.year}</td>
          </tr>
          <tr>
            <td className="row-name">Объем двигалеля</td>
            <td>{car.engineCapacity}</td>
          </tr>
          <tr>
            <td className="row-name">Мощьность двигателя</td>
            <td>{car.hp}</td>
          </tr>
          <tr>
            <td className="row-name">VIN</td>
            <td>{car.vin}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default ActiveCar;
