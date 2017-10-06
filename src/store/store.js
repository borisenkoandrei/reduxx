import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import carApp from "../reducers/reduser";
import Dev from "../components/DevTool/ReduxDevTool";
import testStore from "../testStoreObj/testStore";

let store = createStore(
  carApp,
  testStore,
  compose(applyMiddleware(logger), applyMiddleware(thunk))
);

export default store;
// const enhancer = compose(
//   // Required! Enable Redux DevTools with the monitors you chose
//   Dev.instrument()
// );

// export default function configureStore(testStore) {
//   // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
//   // See https://github.com/reactjs/redux/releases/tag/v3.1.0
//   const store = createStore(carApp, testStore, enhancer);

//   // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
//   if (module.hot) {
//     module.hot.accept("../reducers/reduser", () =>
//       store.replaceReducer(
//         require("../reducers/reduser") /*.default if you use Babel 6+ */
//       )
//     );
//   }

//   return store;
// }
