import React from "react";

const TodoItem = ({ todo, onToggleTodo }) => {
  const { id, name, completed } = todo;
  return (
    <div>
      {name}
      <button type="button" onClick={() => onToggleTodo(id)}>
        {completed ? "Incomplete" : "Complete"}
      </button>
    </div>
  );
};

export default TodoItem;
