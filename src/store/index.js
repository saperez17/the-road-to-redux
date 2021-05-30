import { createStore, combineReducers } from "redux";
import todoReducer from "../reducer/index";
import filterReducer from "../reducer/filterReducer";

const rootReducer = combineReducers({
  todoState: todoReducer,
  filterState: filterReducer
});

const store = createStore(rootReducer);

export default store;
