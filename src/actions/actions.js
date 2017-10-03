import {ADD_NEW_CAR,
         CHANGE_ACTIVE_CAR,
         START_ADD_NEW_CARD,
         TOGGLE_ACCESSORIES,
         CHANGE_FILTER,
         ADD_NEW_TASK,
         COMPLITE_TASK,
        
        } from '../const/const';

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

function toggleAccessories(id){
    return {
        type: TOGGLE_ACCESSORIES,
        id,
    }

}

function changeFilter(filter){
    return{
        type: CHANGE_FILTER,
        filter,
    }

}

function addNewTask(task){
    return {
        type: ADD_NEW_TASK,
        task,
    }
}

function compliteTask(id){
    return{
        type: COMPLITE_TASK,
        id,
    }
}


export { addNewCar, changeActiveCar, startAddNewCar, toggleAccessories, changeFilter, addNewTask, compliteTask};

