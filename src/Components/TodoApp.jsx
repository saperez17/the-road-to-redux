import React from "react";
import TodoList from "./TodoList";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    todos: state.todoState
  };
}

const ConnectedTodoList = connect(mapStateToProps)(TodoList);

const TodoApp = () => {
  return <ConnectedTodoList />;
};

export default TodoApp;
