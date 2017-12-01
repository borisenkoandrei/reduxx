import React from "react";
import Accessories from "../Accessories/Accessories";
import { Button } from "antd";

function Task(props) {
  const task = props.task;
  const id = task.id;
  const activeCar = props.activeCar;

  function compliteHandler(event) {
    props.toggleCompliteTask(activeCar, id);
  }

  function moveToDeletedHandler(event) {
    props.moveToDeleted(activeCar, id);
  }

  function deleteTaskHandler(event) {
    props.deleteTask(activeCar, id);
  }

  function moveToActiveHandler(event) {
    props.moveToActive(activeCar, id);
  }

  function compliteButtonText(task) {
    if (task.complited) {
      return "Возобновить";
    } else {
      return "Завершить";
    }
  }

  return (
    <tr>
      <td>{task.workName}</td>
      <td>{task.cost}</td>
      <td>
        <Accessories taskId={id} />
      </td>
      <td>{task.currentDate}</td>
      <td>{task.pastDate}</td>
      <td>
        {props.filter !== "DELETE" ? (
          <div>
            <Button onClick={compliteHandler}>
              {compliteButtonText(task)}
            </Button>
            <Button
              type="danger"
              icon="delete"
              onClick={moveToDeletedHandler}
            />
          </div>
        ) : (
          <div>
            <Button disabled onClick={compliteHandler}>
              {compliteButtonText(task)}
            </Button>
            <Button type="danger" icon="delete" onClick={deleteTaskHandler} />
            <Button icon="reload" onClick={moveToActiveHandler} />
          </div>
        )}
      </td>
    </tr>
  );
}

export default Task;
