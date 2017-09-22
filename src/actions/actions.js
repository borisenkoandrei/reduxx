import {ADD_NEW_CAR, CHANGE_ACTIVE_CAR, START_ADD_NEW_CARD} from '../const/const';

function addNewCar(carObj){
    return {
        type: ADD_NEW_CAR,
        carObj,
    }
}

function changeActiveCar(id){
    return{
        type: CHANGE_ACTIVE_CAR,
        id,
    }
}

function startAddNewCar(){
    return{
        type: START_ADD_NEW_CARD,
    }   
};


export { addNewCar, changeActiveCar, startAddNewCar};

