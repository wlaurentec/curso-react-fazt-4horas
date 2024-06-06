import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    console.log("useEffect");
  });

  return (
    <div>
      <input onChange={(e) => setMensaje(e.target.value)}/>
      <button onClick={() => alert(mensaje)}>save</button>
    </div>
  );
}
root.render(
  <>
    <Counter />
  </>
);
