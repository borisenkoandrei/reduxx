import React from "react";
import { connect } from "react-redux";

import Filter from "./components/Filter/Filter";
import Car from "./components/Car/Car";
import ChangeCar from "./components/Car/ChangeCar";
import Table from "./components/Table/Table";

import { changeActiveCar } from "./actions/settingsAction";

import "./style/style.css";

function App(props) {
  return (
    <div className="app-wrapper">
      <div className="car">
        <Car car={props.car} />
        <ChangeCar
          cars={props.cars}
          changeCar={props.changeActiveCar}
          activeCar={props.activeCar}
        />
      </div>
      <div className="main-section">
        <Filter />
        <Table activeCar={props.activeCar} />
      </div>
      <div className="add-new-task" />
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
