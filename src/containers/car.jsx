import React from "react";
import { connect } from "react-redux";

import { Button } from "antd";
import { changeActiveCar } from "../actions/settingsAction";
import { deleteCar, addCar } from "../actions/carAction";

import CarTable from "../components/Car/CarTable";
import ChangeCar from "../components/Car/ChangeCar";
import Modal from "../components/Modal/NewModal";
import AddNewCarForm from "../components/Car/AddNewCarForm";

class rootCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };
  }

  deleteCarHandler = function(id) {
    const activeCar = this.props.activeCar;
    this.props.deleteCar(this.props.activeCar);
    for (let car in this.props.cars) {
      if (this.props.cars[car].id !== activeCar) {
        this.props.changeActiveCar(+car);
      }
    }
  }.bind(this);

  modalHandler = function(event) {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  }.bind(this);

  addNewCar = function(carObject) {
    this.props.addNewCar(carObject);
    this.modalHandler();
    this.props.changeActiveCar(carObject.id);
  }.bind(this);

  render() {
    return (
      <div>
        <CarTable car={this.props.car} />
        <div className="car-settings">
          <ChangeCar
            cars={this.props.cars}
            changeCar={this.props.changeActiveCar}
            activeCar={this.props.activeCar}
          />
          {Object.keys(this.props.cars).length !== 0 ? (
            <Button
              className="delete"
              icon="delete"
              type="danger"
              onClick={this.deleteCarHandler}
            />
          ) : null}
          <Button icon="plus" onClick={this.modalHandler} />
          <Modal isOpen={this.state.modalIsOpen} mountTo="#modal">
            <AddNewCarForm
              modalHandler={this.modalHandler}
              addNewCar={this.addNewCar}
            />
          </Modal>
        </div>
      </div>
    );
  }
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
    deleteCar: id => dispatch(deleteCar(id)),
    addNewCar: carObject => dispatch(addCar(carObject))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(rootCar);
