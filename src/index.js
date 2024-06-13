import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [mensaje, setMensaje] = useState("");
  const [cont, setCont] = useState(0);
  useEffect(() => {
    console.log(
      "El aspecto más importante de mi personalidad en cuanto a determinar mi éxito ha sido mi cuestionamiento de la sabiduría convencional, la duda de los expertos y la autoridad de interrogación"
    );
  },[cont]);

  return (
    <>
      <input onChange={(e) => setMensaje(e.target.value)} />
      <button onClick={() => alert(mensaje)}>Save</button>
      <hr />
      <h1>Counter: {cont}</h1>
      <button onClick={() => setCont(cont + 1)}>Incrementar</button>
    </>
  );
}

root.render(
  <>
    <Counter />
  </>
);
