import { TODO_ADD, TODO_TOGGLE } from "../constants/index";

const doAddTodo = (id, name) => {
  return {
    type: TODO_ADD,
    todo: { id, name }
  };
};

const doToggleTodo = (id) => {
  return {
    type: TODO_TOGGLE,
    todo: { id }
  };
};

export { doAddTodo, doToggleTodo };
