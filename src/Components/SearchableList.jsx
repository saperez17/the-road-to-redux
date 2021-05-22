import React, { useState } from "react";
import Search from "./Search";
import List from "./List";

function byQuery(query) {
  return function (item) {
    return !query || item.name.toLowerCase().includes(query.toLowerCase());
  };
}

const SearchableList = ({ list }) => {
  const [query, setQuery] = useState({
    query: "",
    filteredList: [],
    archivedItems: []
  });
  const onChange = (event) => {
    const { value } = event.target;
    setQuery((preVal) => ({
      ...preVal,
      query: value
    }));
  };

  const onSubmit = (event) => {
    console.log(query.query);
    event.preventDefault();
  };

  const onArchive = (id) => {
    let archivedItemsCopy = query.archivedItems.slice();
    archivedItemsCopy.push(id);
    console.log(archivedItemsCopy);
    setQuery((preVal) => ({
      ...preVal,
      archivedItems: archivedItemsCopy
    }));
    // console.log(query.archivedItems);
  };

  const byArchived = (archivedItems1) => {
    return function (item) {
      console.log("ar", archivedItems1);
      return !archivedItems1.includes(item.id);
    };
  };

  return (
    <div>
      <Search query={query.query} onChange={onChange}>
        Search List:{" "}
      </Search>
      <List
        list={(list || [])
          .filter(byQuery(query.query))
          .filter(byArchived(query.archivedItems))}
        onArchive={onArchive}
      />
    </div>
  );
};

export default SearchableList;
