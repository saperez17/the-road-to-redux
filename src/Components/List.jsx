import React, { useState } from "react";

const List = ({ list }) => {
  const [archivedItems, setArchivedItems] = useState([]);

  const onArchive = (id) => {
    setArchivedItems((preVal) => [...preVal, id]);
  };
  return (
    <ul>
      {list.map((item) =>
        !archivedItems.includes(item.id) ? (
          <li key={item.id}>
            {" "}
            {item.name}
            <span>
              <button type="button" onClick={() => onArchive(item.id)}>
                Archive
              </button>
            </span>
          </li>
        ) : null
      )}
    </ul>
  );
};

export default List;
