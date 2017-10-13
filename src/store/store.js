import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import carApp from "../reducers/reduser";
import testStore from "../testStoreObj/testStore";
// import   from "../testStoreObj/initialStore";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  carApp,
  testStore,
  composeEnhancers(applyMiddleware(logger), applyMiddleware(thunk))
);

export default store;
