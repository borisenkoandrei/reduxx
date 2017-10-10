import React from "react";
import { Button } from "antd";

function deleteTask(props) {
  return <Button className="deleate-task" icon="delete" type="danger" />;
}

export default deleteTask;
