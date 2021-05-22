import React, { useState } from "react";

const List = ({ list, onArchive }) => {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          {" "}
          {item.name}
          <span>
            <button type="button" onClick={() => onArchive(item.id)}>
              Archive
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default List;
