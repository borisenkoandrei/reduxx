import {ADD_NEW_CAR, CHANGE_ACTIVE_CAR, START_ADD_NEW_CARD, CHECK_ACCESSORIES} from '../const/const';

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

function checkAccessories(id, finishStatus){
    return {
        type: CHECK_ACCESSORIES,
        id,
        finishStatus,
    }

}


export { addNewCar, changeActiveCar, startAddNewCar, checkAccessories};

