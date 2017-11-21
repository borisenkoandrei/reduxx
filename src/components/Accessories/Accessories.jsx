import React from "react";
import { connect } from "react-redux";
import Accessory from "./Accessory";

function Accessories(props) {
  const { taskId, accessories } = props;
  const currentAccessories = accessories(taskId);

  return (
    <ul>
      {Object.keys(currentAccessories).map(key => (
        <Accessory key={key} accessory={currentAccessories[key]} />
      ))}
    </ul>
  );
}

const mapStateToProps = state => {
  return {
    accessories: id => state.accessories[id]
  };
};

export default connect(mapStateToProps)(Accessories);
