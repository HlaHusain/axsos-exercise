import React, { useEffect } from "react";
import Table from "./components/Table";
import Header from "./components/Header";
import Filters from "./components/Filters";

import columns from "./data/ordersColumns";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetch, selectData } from "./reducers/orders";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch());
  }, []);

  const data = useSelector(selectData);

  return (
    <div>
      <Header />

      <Filters />
      <div className="container">
        <Table data={data} columns={columns} />
      </div>
    </div>
  );
}

export default App;
