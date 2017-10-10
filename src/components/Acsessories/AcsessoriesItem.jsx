import React from "react";
import { Checkbox, Button, Input } from "antd";

function AcsessoriesItem({ item, toggle, acsessoriesChanging }) {
  function chaining(event) {
    acsessoriesChanging(item);
  }

  if (!item.changing) {
    return (
      <div>
        <Checkbox id={item.id} checked={item.finished} onChange={toggle}>
          {item.name}
        </Checkbox>
        <Button icon="edit" onClick={chaining} />
      </div>
    );
  } else {
    return (
      <div>
        <Input defaultValue={item.name} />
        <Input defaultValue={item.amount} />
        <Button icon="edit" onClick={chaining} />
      </div>
    );
  }
}

export default AcsessoriesItem;
