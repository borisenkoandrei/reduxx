import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers/rootReducer";
import testStore from "../testStoreObj/testStore";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  testStore,
  composeEnhancers(applyMiddleware(logger), applyMiddleware(thunk))
);

export default store;
