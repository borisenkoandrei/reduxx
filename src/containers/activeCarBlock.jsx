import React from 'react';
import { connect } from 'react-redux'

import Activecar from '../components/ActiveCar';
import AddNewCar from '../components/AddNewCar';
import ChangeActiveCar from '../components/ChangeActiveCar';
import AddNewCarButton from '../components/AddNewCarButton';
import { startAddNewCar, changeActiveCar } from '../actions/actions';

function ActiveCarBlock(props){
    return(
        <div>
            <Activecar add={props.add} />
            <AddNewCar add={props.add} />
            <ChangeActiveCar changeActiveCar = {props.changeActiveCar}  cars={props.cars} activeCar = {props.activeCar}/>
            <AddNewCarButton openAddWindow={props.openAddWindow}/>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
  return {
    activeCar:state.activeCarId,
    add: state.add,
    cars: state.cars, 
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openAddWindow: () => {
      dispatch(startAddNewCar());
    },
    changeActiveCar: () => {
        dispatch(changeActiveCar());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ActiveCarBlock)


