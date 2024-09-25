import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { random_action } from "../redux/actions/randomAction";

export default function Random() {
  const random = useSelector((state) => state.random);
  const dispatch = useDispatch();

  const handleRandom = () => {
    dispatch(random_action());
  };

  return (
    <div>
      <h1>Random: {JSON.stringify(random)}</h1>
      <button onClick={handleRandom}>Random</button>
    </div>
  );
}
