import CounterPresenter from "./Components/CounterPresenter";
import React, { useState } from "react";
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

export default Counter;
