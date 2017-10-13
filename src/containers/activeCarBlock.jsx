import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";

import Activecar from "../components/Car/ActiveCar";
import AddNewCar from "../components/Car/AddNewCar";
import ChangeActiveCar from "../components/Car/ChangeActiveCar";
import {
  startAddNewCar,
  changeActiveCar,
  addNewCar,
  deleteCar
} from "../actions/actions";

function ActiveCarBlock(props) {
  let deleateButton =
    props.activeCar === null ? null : (
      <Button onClick={props.deleteCar} icon="delete" type="danger" />
    );

  function test(eveht) {
    let a = document.querySelector(".ant-btn");
    console.log(a);
  }

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
      <Button onClick={test}>Добавить</Button>
      {deleateButton}
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
    },
    deleteCar: () => {
      dispatch(deleteCar());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCarBlock);
