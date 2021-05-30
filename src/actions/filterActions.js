import { FILTER_SET } from "../constants/index";

const doSetFilter = (filter) => {
  return {
    type: FILTER_SET,
    filter
  };
};

export default doSetFilter;
