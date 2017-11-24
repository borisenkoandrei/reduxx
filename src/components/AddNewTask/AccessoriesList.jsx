import React from "react";
import AccessoryItem from "./AccessoryItem";

function accessoriesList(props) {
  let accessories = props.accessories;
  let test = Object.keys(accessories);

  if (test.length === 0) {
    return <li>Пока ничего нет</li>;
  }

  return (
    <ul>
      {test.map(key => {
        return (
          <AccessoryItem
            key={key}
            accessory={props.accessories[key]}
            deleteAccessory={props.deleteAccessory}
          />
        );
      })}
    </ul>
  );
}

export default accessoriesList;
