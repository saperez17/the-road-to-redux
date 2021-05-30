import store from "../store/index";
import React, { useState, useEffect } from "react";
import { TODO_ADD, TODO_TOGGLE } from "../constants/index";

//In order to ouput the store's state we have
//we've got 2 options.
//Option #1) Manual output -> use store's getState() method
// console.log(store.getState())

//Option #2) Subscribe a callback functions that gets called
//every time the store's state is updated.

//When using option #2 don't forget to unsubscribe
//to avoid memory leaks.
//unsubscribe()
const ReduxPractice = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");

  //Action creator. Not mandatory, but apparently useful
  const doAddTodo = (name) => {
    return {
      type: TODO_ADD,
      todo: { name }
    };
  };
  const unsubscribe = store.subscribe(() => {
    setItems((prevState) => [...prevState, { name: item, completed: false }]);
    // setItems((prevState) => {
    //   [...prevState, ...store.getState()];
    // });
    // console.log("store update, current state:");
  });

  const handleSubmit = (e) => {
    // store.dispatch({
    //   type: TODO_ADD,
    //   todo: { name: item }
    // });

    //Dispatching action using an action creator
    store.dispatch(doAddTodo(item));
    console.log(store.getState());
    setItem("");

    e.preventDefault();
  };
  const cleanup = () => {
    unsubscribe();
  };

  const handleChange = (e) => {
    setItem(e.target.value);
  };
  useEffect(() => {
    return cleanup();
  }, []);
  return (
    <div>
      <div>
        <ul>
          {store.getState().todoState.length != 0 &&
            store.getState().todoState.map((item, idx) => (
              <li key={idx}>
                {item.name} {item.completed ? "✅" : "❎"}{" "}
              </li>
            ))}
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="New todo"
          name="todo"
          value={item}
          type="text"
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ReduxPractice;
