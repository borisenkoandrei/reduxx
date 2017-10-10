import React from "react";
import { Button } from "antd";

function DeleteButton({ id, deleate }) {
  function handleDeleate(event) {
    const id = event.target.id;

    deleate(id);
  }

  return (
    <Button
      id={id}
      onClick={handleDeleate}
      type="danger"
      icon="delete"
      size="small"
    />
  );
}

export default DeleteButton;
