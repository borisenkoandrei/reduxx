import React from "react";
import Accessories from "../Accessories/Accessories";
import { Button } from "antd";

function Task(props) {
  const task = props.task;
  const id = task.id;
  const activeCar = props.activeCar;
  const taskType = props.task.deleted ? "deletedTasks" : "activeTasks";

  function compliteHandler(event) {
    props.toggleCompliteTask(activeCar, id, taskType);
  }

  function compliteButtonText(task) {
    if (task.complited) {
      return "Возобновить";
    } else {
      return "Завершить";
    }
  }

  return (
    <tr className="test">
      <td>{task.workName}</td>
      <td>{task.cost}</td>
      <td>
        <Accessories taskId={id} />
      </td>
      <td>{task.currentDate}</td>
      <td>{task.pastDate}</td>
      <td>
        <Button onClick={compliteHandler}>{compliteButtonText(task)}</Button>
        <Button type="danger" icon="delete" />
      </td>
    </tr>
  );
}

export default Task;
