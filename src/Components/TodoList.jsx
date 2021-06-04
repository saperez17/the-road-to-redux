import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { doToggleTodo } from "../actions/todoActions";

function mapDispatchToProps(dispatch) {
  return {
    onToggleTodo: (id) => dispatch(doToggleTodo(id))
  };
}

const ConnectedTodoItem = connect(null, mapDispatchToProps)(TodoItem);

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <ConnectedTodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
