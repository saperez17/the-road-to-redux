import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggleTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggleTodo={onToggleTodo} />
      ))}
    </div>
  );
};

export default TodoList;
