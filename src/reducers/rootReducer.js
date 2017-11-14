import { combineReducers } from "redux";

import CarReducer from "./carsReducer";
import TaskReducer from "./taskReducer";
import AccessoryReducer from "./acsessoriesReducer";
import SettingsReducer from "./settingsReducer";
import DeleateTaskReducer from "./deleateTaskReducer";

export default combineReducers({
  cars: CarReducer,
  tasks: TaskReducer,
  acsessories: AccessoryReducer,
  settings: SettingsReducer,
  deleteTasks: DeleateTaskReducer
});
