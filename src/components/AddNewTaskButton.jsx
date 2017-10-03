import React from "react";

function AddNewTaskButton(props) {
  return (
    <button className="add-new-task-button" onClick={props.Click}>
      Добавить
    </button>
  );
}

export default AddNewTaskButton;
