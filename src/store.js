import { configureStore } from "@reduxjs/toolkit";
import orders from "./reducers/orders";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    orders,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);
