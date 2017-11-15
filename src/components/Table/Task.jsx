import React from "react";

function Task(props) {
  const task = props.task;
  const id = task.id;
  return (
    <tr className="test">
      <td>{task.workName}</td>
      <td>{task.cost}</td>
      <td>
        <div>Acsessories</div>
      </td>
      <td>{task.currentDate}</td>
      <td>{task.pastdate}</td>
      <td>
        <div>Buttons</div>
      </td>
    </tr>
  );
}

export default Task;
