import React from "react";
import { Button } from "antd";

function accessoryItem(props) {
  return (
    <li>
      <div>{props.accessory.name}</div>
      <div>{props.accessory.cost}</div>
      <Button
        icon="delete"
        onClick={event => props.deleteAccessory(props.accessory.id)}
      />
    </li>
  );
}

export default accessoryItem;
