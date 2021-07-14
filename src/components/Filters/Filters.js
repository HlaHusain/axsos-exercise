import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterBySeller,
  selectedSelectedSeller,
  selectUniqueSellers,
} from "../../reducers/orders";
import "./Filters.css";
export default function Filters() {
  const selectedSeller = useSelector(selectedSelectedSeller);
  const sellers = useSelector(selectUniqueSellers);
  const dispatch = useDispatch();

  return (
    <div className="filters">
      <div className="container filters__container">
        <div className="filters__heading">Seller</div>
        <div className="filters__inputs-container">
          <select
            value={selectedSeller}
            onChange={(e) => {
              dispatch(filterBySeller(e.target.value));
            }}
            className="filters__input"
          >
            <option value="">All sellers</option>
            {sellers.map((seller) => (
              <option
                selected={seller === selectedSeller}
                key={seller}
                value={seller}
              >
                {seller}
              </option>
            ))}
          </select>

          {!!selectedSeller && (
            <button
              onClick={() => dispatch(filterBySeller())}
              className="filters__button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="filters__button-reset"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Reset filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
