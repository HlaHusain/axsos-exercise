import React, { useEffect } from "react";
import Table from "./components/Table";
import Header from "./components/Header";
import Filters from "./components/Filters";

import columns from "./data/ordersColumns";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetch,
  selectData,
  selectIsFailed,
  selectIsFetching,
} from "./reducers/orders";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch());
  }, []);

  const isFetching = useSelector(selectIsFetching);
  const isFailed = useSelector(selectIsFailed);
  const data = useSelector(selectData);

  return (
    <div>
      <Header />
      <Filters />
      <div className="container">
        {!isFetching && !isFailed && <Table data={data} columns={columns} />}
        {!isFetching && isFailed && (
          <div>
            <h2>Unable to load orders</h2>
            <button onClick={() => dispatch(fetch())}>Reload</button>
          </div>
        )}
        {isFetching && <div className="loading">Please wait </div>}
      </div>
    </div>
  );
}

export default App;
