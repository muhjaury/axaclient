import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "../src/assets/css/App.scss";
import "../src/assets/css/Style.scss";
import App from "./App";
import Context from "./context/Context";
import { persistor, store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Context>
        <App />
      </Context>
    </PersistGate>
  </Provider>
);
