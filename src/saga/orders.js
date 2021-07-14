import { call, put, takeLatest } from "redux-saga/effects";
import { failed, fetch, fetched } from "../reducers/orders";
import axios from "axios";
function* doFetch() {
  try {
    // Base url is defined in the package.json proxy to workaround the CORS issue
    // @todo use enviroment variable for url
    const response = yield axios.get("/api/orders");

    yield put(fetched(response.data[""]));
  } catch (error) {
    yield put(failed());
  }
}
export default function* rootSaga() {
  yield takeLatest(fetch, doFetch);
}
