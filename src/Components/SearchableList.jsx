import React, { useState } from "react";
import Search from "./Search";
import List from "./List";

function byQuery(query) {
  return function (item) {
    return !query || item.name.toLowerCase().includes(query.toLowerCase());
  };
}

const SearchableList = ({ list }) => {
  const [query, setQuery] = useState({ query: "" });
  const onChange = (event) => {
    const { value } = event.target;
    setQuery({ query: value });
  };

  const onSubmit = (event) => {
    console.log(query.query);
    event.preventDefault();
  };
  return (
    <div>
      <Search query={query.query} onChange={onChange}>
        Search List:{" "}
      </Search>
      <List list={(list || []).filter(byQuery(query.query))} />
    </div>
  );
};

export default SearchableList;
