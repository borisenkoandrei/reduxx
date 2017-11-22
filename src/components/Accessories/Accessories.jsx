import React from "react";
import { connect } from "react-redux";
import Accessory from "./Accessory";

import {
  changeAccessory,
  toggleAccessoryStatus
} from "../../actions/accessoriesAction";

function Accessories(props) {
  const { taskId, accessories, changeAccessory, toggleAccessoryStatus } = props;
  const currentAccessories = accessories(taskId);

  return (
    <ul>
      {Object.keys(currentAccessories).map(key => {
        let accessories = currentAccessories[key];
        return (
          <Accessory
            key={key}
            taskId={props.taskId}
            accessory={accessories}
            changeAccessory={changeAccessory}
            toggleAccessoryStatus={toggleAccessoryStatus}
          />
        );
      })}
    </ul>
  );
}

const mapStateToProps = state => {
  return {
    accessories: id => state.accessories[id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeAccessory: (taskId, accessoriesId, name, cost) =>
      dispatch(changeAccessory(taskId, accessoriesId, name, cost)),
    toggleAccessoryStatus: (taskId, accessoriesId) =>
      dispatch(toggleAccessoryStatus(taskId, accessoriesId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Accessories);
