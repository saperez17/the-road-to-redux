import { TODO_ADD, TODO_TOGGLE } from "../constants/index";

const todos = [
  { id: 0, name: "Learn Redux" },
  { id: 1, name: "Learn Advanced React" }
];

function todoReducer(state = todos, action) {
  switch (action.type) {
    case TODO_ADD: {
      return applyAddTodo(state, action);
    }
    case TODO_TOGGLE: {
      return applyToggleTodo(state, action);
    }
    default:
      return state;
  }
}

function applyAddTodo(state, action) {
  //Minimum Action Payload. The completed property is defined in the reducer
  //in order to reduce the action payload to its minimum.
  const todo = Object.assign({}, action.todo, { completed: false });
  return state.concat(todo);
}

function applyToggleTodo(state, action) {
  return state.map((todo) =>
    todo.id === action.todo.id
      ? Object.assign({}, todo, { completed: !todo.completed })
      : todo
  );
}

export default todoReducer;
