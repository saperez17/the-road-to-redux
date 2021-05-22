import React, { useState } from "react";

const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}> {item.name} </li>
      ))}
    </ul>
  );
};

export default List;
