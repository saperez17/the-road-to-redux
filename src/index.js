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

const App = () => {
  return (
    <Grid>
      {/* <Row>
        <Col>{ <SearchableList list={this.state.family} /> }</Col>
      </Row> */}
    </Grid>
  );
};

const render = () => {
  ReactDOM.render(
    <TodoApp
      todos={store.getState().todoState}
      onToggleTodo={(id) => store.dispatch(doToggleTodo(id))}
    />,
    document.getElementById("container")
  );
};

store.subscribe(render);
render();
