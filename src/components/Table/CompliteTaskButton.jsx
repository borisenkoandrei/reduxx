import React from "react";
import { Button } from "antd";

function CompliteButton({ complited, id, compliteTask }) {
  function duttonText(completed) {
    if (completed) {
      return "Возобновить";
    } else {
      return "Завершить";
    }
  }

  return (
    <Button onClick={() => compliteTask(id)} type="primary">
      {duttonText(complited)}
    </Button>
  );
}

export default CompliteButton;
