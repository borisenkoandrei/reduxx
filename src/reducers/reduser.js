import { addNewCar, changeActiveCar, startAddNewCar} from '../actions/actions'
import { ADD_NEW_CAR, CHANGE_ACTIVE_CAR, START_ADD_NEW_CARD } from "../const/const";

function carApp(state = [], action) {
    switch (action.type) {
      case ADD_NEW_CAR:
        return Object.assign({},
             state,
              {
                  cars: [...state.cars, action.carObj]

        })
      case CHANGE_ACTIVE_CAR:
        return Object.assign({}, state, {activeCar: action.id})
      case START_ADD_NEW_CARD:
        return Object.assign({}, state, {add: !state.add})
      default:
        return state
    }
  }

export default carApp;