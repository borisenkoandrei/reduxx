import React from "react";
import { connect } from "react-redux";

import Filter from "./components/Filter/Filter";
import ChangeCar from "./components/Car/ChangeCar";
import Table from "./components/Table/Table";
import Car from "./containers/car";

import { Button } from "antd";
import { changeActiveCar } from "./actions/settingsAction";
import { deleteCar } from "./actions/carAction";

import "./style/style.css";

function App(props) {
  // function deleteCarHandler(id) {
  //   const activeCar = props.activeCar;
  //   props.deleteCar(activeCar);
  //   for (let car in props.cars) {
  //     if (props.cars[car].id !== activeCar) {
  //       props.changeActiveCar(+car);
  //     }
  //   }
  // }
  // // if (Object.keys(props.cars).length == 0) {
  // //   props.changeActiveCar("");
  // // }

  return (
    <div className="app-wrapper">
      <div className="car">
        <Car />
        {/* <Car car={props.car} />
        <ChangeCar
          cars={props.cars}
          changeCar={props.changeActiveCar}
          activeCar={props.activeCar}
        />
        {Object.keys(props.cars).length !== 0 ? (
          <Button
            className="delete"
            icon="delete"
            type="danger"
            onClick={deleteCarHandler}
          />
        ) : null} */}
      </div>
      <div className="main-section">
        <Filter />
        <Table />
      </div>
      <div className="add-new-task" />
      <div id="Modal" />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    car: state.cars[state.settings.activeCarId],
    cars: state.cars,
    activeCar: state.settings.activeCarId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeActiveCar: id => {
      dispatch(changeActiveCar(id));
    },
    deleteCar: id => dispatch(deleteCar(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
