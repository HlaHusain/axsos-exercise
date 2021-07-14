import formatDate from "date-fns/format";
import React, {  useMemo } from "react";

const RenderStatus = ({ row }) => {
  const style = {};

  if (row.status === "PAID") {
    style.color = "#065F46";
    style.background = "#A7F3D0";
  } else if (row.status === "DELIVERED") {
    style.background = "#D8B4FE";
    style.color = "#6D28D9";
  }

  return (
    <div className={"badge"} style={style}>
      {row.status}
    </div>
  );
};

const RenderSellerName = ({ row }) => {
  return (
    <span>
      {row.seller_name}
      {row.is_first && <span className="first_badge">1st</span>}
    </span>
  );
};
const RenderFormattedDate = ({ row, column }) => {
  const date = row[column.key];

  const formattedDate = useMemo(() => {
    if (!date) {
      return;
    }
    return formatDate(new Date(date), "MMM. d. yyyy");
  }, [date]);

  return <span>{formattedDate}</span>;
};
const RenderFormattedMoney = ({ row, column }) => {
  const total = row[column.key];

  if (!total) {
    return "";
  }

  return `$${total}`;
};

const columns = [
  {
    key: "status",
    label: "Status",
    render: RenderStatus,
  },
  {
    key: "delivery_day",
    label: "Delivery day",
    render: RenderFormattedDate,
  },
  {
    key: "seller_name",
    label: "Seller name",
    render: RenderSellerName,
  },
  {
    key: "total",
    label: "Total",
    render: RenderFormattedMoney,
  },
];

export default columns;
