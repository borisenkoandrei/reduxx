import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";

import Activecar from "../components/Car/ActiveCar";
import AddNewCar from "../components/Car/AddNewCar";
import ChangeActiveCar from "../components/Car/ChangeActiveCar";
import { startAddNewCar, changeActiveCar, addNewCar } from "../actions/actions";

function ActiveCarBlock(props) {
  return (
    <div className="active-car">
      <Activecar add={props.add} activeCarData={props.activeCarData} />
      <AddNewCar
        add={props.add}
        addNewCar={props.addNewCar}
        openAddWindow={props.openAddWindow}
        changeActiveCar={props.changeActiveCar}
      />
      <ChangeActiveCar
        changeActiveCar={props.changeActiveCar}
        cars={props.cars}
        activeCar={props.activeCar}
      />
      <Button onClick={props.openAddWindow}>Добавить</Button>
    </div>
  );
}

function getActiveCarData(id, cars) {
  let result;

  cars.forEach(function(car) {
    if (car.id === +id) {
      result = car;
    }
  });

  return result;
}

const mapStateToProps = state => {
  return {
    state: state,
    activeCar: state.activeCarId,
    activeCarData: getActiveCarData(state.activeCarId, state.cars),
    add: state.add,
    cars: state.cars
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openAddWindow: () => {
      dispatch(startAddNewCar());
    },
    changeActiveCar: id => {
      dispatch(changeActiveCar(id));
    },
    addNewCar: newCar => {
      dispatch(addNewCar(newCar));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCarBlock);
