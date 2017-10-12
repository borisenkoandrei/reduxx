import React from "react";
import { Checkbox, Button, Input } from "antd";

function AcsessoriesItem({ item, toggle, acsessoriesChanging }) {
  function chaining(event) {
    acsessoriesChanging(item);
  }

  if (!item.changing) {
    return (
      <div className="acsessories-item">
        <Checkbox id={item.id} checked={item.finished} onChange={toggle}>
          {item.name}
        </Checkbox>
        <Button
          className="acsessories-item_button"
          icon="edit"
          onClick={chaining}
        />
      </div>
    );
  } else {
    return (
      <div className="acsessories-item">
        <form>
          <label>
            Название:
            <Input placeholder="Название" defaultValue={item.name} />
          </label>
          <label>
            Количество:
            <Input placeholder="Количество" defaultValue={item.amount} />
          </label>
          <label>
            Соимость:
            <Input placeholder="Стоимость" />
          </label>
        </form>
        <Button
          className="acsessories-item_button active"
          icon="edit"
          onClick={chaining}
        />
      </div>
    );
  }
}

export default AcsessoriesItem;
