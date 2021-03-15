import React, { Router, Route } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./slices";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: rootReducer });

store.subscribe(() => {
  const state = store.getState();
  console.log("I dispatched successfully: ", state);
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Router basename={"MoneyFreedom"}>
        <Route component={App} />
      </Router> */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
