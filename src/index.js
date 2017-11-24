import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/store";

import { LocaleProvider } from "antd";
import ruRU from "antd/lib/locale-provider/ru_RU";

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={ruRU}>
      <App />
    </LocaleProvider>
  </Provider>,
  document.getElementById("root")
);
