import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import CounterPresenter from "./Components/CounterPresenter";
import Search from "./Components/Search";
import SearchableList from "./Components/SearchableList";

const App = () => {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     family: [
  //       { id: 1, name: "Alejandro" },
  //       { id: 2, name: "Santiago" },
  //       { id: 3, name: "Karen" }
  //     ]
  //   };
  // }

  return (
    <Grid>
      <Row>
        <Col>{/* <Counter /> */}</Col>
        <Col>{/* <Search /> */}</Col>
      </Row>
      <Row>
        <Col>{/* <SearchableList list={this.state.family} /> */}</Col>
      </Row>
    </Grid>
  );
};

ReactDOM.render(<App />, document.getElementById("container"));
