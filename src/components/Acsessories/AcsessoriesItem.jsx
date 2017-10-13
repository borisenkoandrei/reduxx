import React from "react";
import { Checkbox, Button, Input } from "antd";

function AcsessoriesItem({ item, toggle, acsessoriesChanging }) {
  function chaining(event) {
    acsessoriesChanging(item);
  }

  function changeItem(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const amount = event.target.amount.value;
    const id = item.id;

    console.log(event.target);
  }

  if (!item.changing) {
    return (
      <div className="acsessories-item">
        <Checkbox id={item.id} checked={item.finished} onChange={toggle}>
          {`${item.name} ${item.amount ? item.amount : ""}`}
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
        <form
          onSubmit={e => {
            changeItem(e);
          }}
        >
          <label>
            Название:
            <Input
              name="name"
              placeholder="Название"
              defaultValue={item.name}
            />
          </label>
          <label>
            Количество:
            <Input
              name="amount"
              placeholder="Количество"
              defaultValue={item.amount}
            />
          </label>
          <Button
            className="acsessories-item_button active"
            icon="edit"
            htmlType="submit"
          />
        </form>
      </div>
    );
  }
}

export default AcsessoriesItem;
