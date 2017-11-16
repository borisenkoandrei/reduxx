import React from "react";

function Accessory({ accessory }) {
  const { id, name, cost, finished, changing } = accessory;
  return (
    <li>
      <div>{name}</div>
      <div>{cost}</div>
    </li>
  );
}
export default Accessory;
