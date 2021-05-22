//This is an example of a stateless
//functional component for the Counter example.
//Even though it does have a state object, it can
//inderectly affect the parent component's state
//via the functions passed as props

import React from "react";

const CounterPresenter = (props) => {
  return (
    <div>
      <p>{props.counter1}</p>
      <button type="button" onClick={() => props.onIncrement()}>
        Increment
      </button>
      <button type="button" onClick={() => props.onDecrement()}>
        Decrement
      </button>
    </div>
  );
};

export default CounterPresenter;
