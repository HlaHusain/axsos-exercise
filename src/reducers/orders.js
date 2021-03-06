import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  filteredData: [],
  isFetching: false,
  selectedSeller: null,
  isFailed: false,
};

const slice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    fetch(state) {
      state.isFetching = true;
    },

    fetched(state, action) {
      state.isFetching = false;
      state.data = action.payload;
      state.filteredData = state.data;
    },
    failed(state) {
      state.isFailed = true;
      state.isFetching = false;
    },

    filterBySeller(state, action) {
      state.selectedSeller = action.payload;
      if (!action.payload) {
        state.filteredData = state.data;
      } else {
        state.filteredData = state.data.filter(
          (order) => order.seller_name === action.payload
        );
      }
    },
  },
});

export const { fetch, fetched, filterBySeller, failed } = slice.actions;
export default slice.reducer;

export const selectUniqueSellers = (state) => {
  return state.orders.data.reduce((sellers, order) => {
    if (!sellers.includes(order.seller_name)) {
      sellers.push(order.seller_name);
    }
    return sellers;
  }, []);
};
export const selectData = (state) => state.orders.filteredData;
export const selectedSelectedSeller = (state) => state.orders.selectedSeller;
export const selectIsFetching = (state) => state.orders.isFetching;
export const selectIsFailed = (state) => state.orders.isFailed;
