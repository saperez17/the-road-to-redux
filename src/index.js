import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import CounterPresenter from "./Components/CounterPresenter";

//Local state in react
const Counter = () => {
  const [counter1, setCounter1] = useState(0);

  const onIncrement = () => {
    setCounter1((preVal) => preVal + 1);
  };
  const onDecrement = () => {
    setCounter1((preVal) => preVal - 1);
  };

  return (
    <div>
      <CounterPresenter
        counter1={counter1}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <Counter />
          </Col>
        </Row>
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));