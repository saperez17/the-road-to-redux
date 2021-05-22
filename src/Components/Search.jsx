import React, { useState } from "react";

const Search = ({ query, onChange, children }) => {
  return (
    <div>
      {children}
      <input onChange={onChange} value={query} type="text" />
    </div>
  );
};

export default Search;
