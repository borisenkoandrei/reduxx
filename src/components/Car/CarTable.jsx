import React from "react";

function CarTable(props) {
  if (!props.car) {
    return <div>Пока ничего нет</div>;
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Марка</td>
            <td>{props.car.brand}</td>
          </tr>
          <tr>
            <td>Модель</td>
            <td>{props.car.model}</td>
          </tr>
          <tr>
            <td>Год выпуска</td>
            <td>{props.car.year}</td>
          </tr>
          <tr>
            <td>Объем двигателя</td>
            <td>{props.car.engineCapacity}</td>
          </tr>
          <tr>
            <td>Л.С</td>
            <td>{props.car.hp}</td>
          </tr>
          <tr>
            <td>VIN</td>
            <td>{props.car.vin}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CarTable;
