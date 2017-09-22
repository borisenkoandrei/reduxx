import React from 'react';
import '../style/AddNevCarS.css';


function AddNewCar(props){
    if (!props.add){
        return null;
    }
    return (
        <form className="add-new-car" action="submite">
            <label className ="add-new-car_label"  htmlFor="brand">Марка<input type="text" id="brand" id="brand"/></label>
            <label className ="add-new-car_label" htmlFor="model">Модель<input type="text" id="model"/></label>
            <label className ="add-new-car_label" htmlFor="year">Год<input type="text" id="year"/></label>
            <label className ="add-new-car_label" htmlFor="engine-capacity">Объем двигалеля<input type="text" id="engine-capacity"/></label>
            <label className ="add-new-car_label" htmlFor="hp">Мощьность двигателя<input type="text" id="hp"/></label>
            <label className ="add-new-car_label" htmlFor="vin">VIN<input type="text" id="vin"/></label>
            <input className ="add-new-car_label" type="button" name="Submit" value="Сохранить" />
        </form>
    )
}

export default AddNewCar;
