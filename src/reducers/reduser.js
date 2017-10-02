import { ADD_NEW_CAR, CHANGE_ACTIVE_CAR, START_ADD_NEW_CARD, TOGGLE_ACCESSORIES, CHANGE_FILTER, ADD_NEW_TASK } from "../const/const";

function carApp(state = [], action) {
    switch (action.type) {
      case ADD_NEW_CAR:
        return Object.assign({},
             state,
              {
                  cars: [...state.cars, action.carObj]

        })
      case CHANGE_ACTIVE_CAR:
        return Object.assign({}, state, {activeCarId: action.id})
      case START_ADD_NEW_CARD:
        return Object.assign({}, state, {add: !state.add})
      case TOGGLE_ACCESSORIES:
        return Object.assign({}, state, {cars: state.cars.map(function(car){
          if (car.id !== +state.activeCarId){
              return car;
          } else {
               return Object.assign({}, car, {workItems: car.workItems.map(function(workItem){
                   return Object.assign({}, workItem, {accessories:workItem.accessories.map(function(item){
                      if (item.id !== +action.id){
                          return item;
                      } else {
                          return Object.assign({}, item, {finished : !item.finished})                                                                                                                                                                        
                      }
                  })});
              })})
          }
      })})
      case CHANGE_FILTER:
        return Object.assign({}, state, {filter: action.filter})
      case ADD_NEW_TASK:
        return Object.assign({}, state, {cars: state.cars.map(function(car){
          if (car.id === +state.activeCarId){
            Object.assign({}, car, {workItems: [...car.workItems, action.task]})
          } else {
            return car;
          }
        })})  
      default:
        return state
    }
  }

export default carApp;