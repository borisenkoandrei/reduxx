import React from "react";
import Accessories from "../components/Accessories";
import CompliteButton from "../components/CompliteTaskButton";

function Task({ task, onToggle, compliteTask }) {
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
        <Accessories onToggle={onToggle} accessories={accessories} />
      </td>
      <td>{currentDate}</td>
      <td>{pastDate}</td>
      <td>
        <CompliteButton
          compliteTask={compliteTask}
          complited={complited}
          id={id}
        />
      </td>
    </tr>
  );
}

export default Task;
