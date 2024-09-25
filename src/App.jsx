import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./views/Counter";
import Random from "./views/Random";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Counter />
      <Random />
    </>
  );
}

export default App;
