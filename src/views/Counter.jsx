import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../redux/constants/actionTypes";

export default function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({
      type: types.INCREMENT,
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: types.DECREMENT,
    });
  };

  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
