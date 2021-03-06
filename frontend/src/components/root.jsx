import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistedStore } from "../store/store";

import App from "./app";

const Root = ({ store }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <HashRouter>
        <App />
      </HashRouter>
    </PersistGate>
  </Provider>
);

export default Root;
