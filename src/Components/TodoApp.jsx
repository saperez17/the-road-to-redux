import React from "react";
import TodoList from "./TodoList";

const TodoApp = ({ todos, onToggleTodo }) => {
  return <TodoList todos={todos} onToggleTodo={onToggleTodo} />;
};

export default TodoApp;
