import React from "react";
import { useSelector } from "react-redux";

export default function Random() {
  const counter = useSelector((state) => state);
  return <div>{/* <h1>Random: {counter}</h1> */}</div>;
}
