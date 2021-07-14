import orders from "./orders";
import { fork } from "@redux-saga/core/effects";

export default function* rootSaga() {
  yield fork(orders);
}
