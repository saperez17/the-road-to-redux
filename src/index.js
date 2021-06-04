import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-flexbox-grid";

import CounterPresenter from "./Components/CounterPresenter";
import Search from "./Components/Search";
import SearchableList from "./Components/SearchableList";
import ReduxPractcie from "./Components/ReduxPractice";

import TodoApp from "./Components/TodoApp";

import store from "./store/index";
import { doAddTodo, doToggleTodo } from "./actions/todoActions";

import { Provider, connect } from "react-redux";

//react-redux. A library to wire up Redux with React.
//Provider cmpnt: Gives access to the Redux store. Should
//be at the top level of the app

const App = () => {
  return (
    <Grid>
      {/* <Row>
        <Col>{ <SearchableList list={this.state.family} /> }</Col>
      </Row> */}
    </Grid>
  );
};

//This exposes the props to the TodoApp component by using the
//connect higher-order component. Thus, the TodoApp cmpnt becomes a
//connectedTodoApp component.

function mapStateToProps(state) {
  return {
    todos: state.todoState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onToggleTodo: (id) => dispatch(doToggleTodo(id))
  };
}

const ConnectedTodoApp = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedTodoApp
    // todos={store.getState().todoState}
    // onToggleTodo={(id) => store.dispatch(doToggleTodo(id))}
    />
  </Provider>,
  document.getElementById("container")
);

// store.subscribe(render);
// render();
