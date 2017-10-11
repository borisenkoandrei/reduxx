import React from "react";
import Accessories from "../Acsessories/Accessories";
import CompliteButton from "./CompliteTaskButton";
import DeleteButton from "../DeleteTaskButton/index";

function Task({
  task,
  onToggle,
  compliteTask,
  acsessoriesChanging,
  deleteTask
}) {
  let {
    workType,
    cost,
    accessories,
    currentDate,
    pastDate,
    complited,
    id
  } = task;

  return (
    <tr className={complited ? "compleate-task" : null}>
      <td>{workType}</td>
      <td>{cost}</td>
      <td>
        <Accessories
          onToggle={onToggle}
          accessories={accessories}
          acsessoriesChanging={acsessoriesChanging}
        />
      </td>
      <td>{currentDate}</td>
      <td>{pastDate}</td>
      <td>
        <CompliteButton
          compliteTask={compliteTask}
          complited={complited}
          id={id}
        />
        <DeleteButton id={id} deleateTask={deleteTask} />
      </td>
    </tr>
  );
}

export default Task;
