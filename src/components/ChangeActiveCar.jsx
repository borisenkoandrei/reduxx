import React from 'react';


function ChangeActiveCar(props){
    const cars = props.cars;
      

    return (
        <select onChange={props.changeActiveCar()} value={props.activecar}>
            {cars.map((car) => <option value={car.model} id={car.id}>{car.model}</option>)}
        </select>
    )
}

export default ChangeActiveCar;
