import React from "react";

export default function Cell({ column, row }) {
  let value = row[column.key];

  if (column.render) {
    const RenderComponent = column.render;
    value = <RenderComponent row={row} column={column} />;
  }
  
  return <td>{value}</td>;
}
