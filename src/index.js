import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [mensaje, setMensaje] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("useEffect");
  }, [ counter ]);

  return (
    <div>
      <input onChange={(e) => setMensaje(e.target.value)}/>
      <button onClick={() => alert(mensaje)}>save</button>
      <hr />
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Sumar</button>
    </div>
  );
}
root.render(
  <>
    <Counter />
  </>
);
