import React from "react";
import { connect } from "react-redux";

import Filter from "./components/Filter/Filter";
import ChangeCar from "./components/Car/ChangeCar";
import Table from "./components/Table/Table";
import Car from "./containers/car";
import NewTask from "./containers/AddTask";

import { Button } from "antd";
import { changeActiveCar } from "./actions/settingsAction";
import { deleteCar } from "./actions/carAction";

import "./style/style.css";

function App(props) {
  return (
    <div className="app-wrapper">
      <div className="car">
        <Car />
      </div>
      <div className="main-section">
        <Filter />
        <Table />
      </div>
      <div className="add-new-task">
        <NewTask />
      </div>
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
