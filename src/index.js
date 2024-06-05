import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TaskCard } from "./Task.js";
import { Saludar } from "./Saludar.js";
import Button from "./Button.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const handleChange = (e) => console.log(e.target.value);

root.render(
  <>
    <TaskCard ready={true} />
    <Saludar />
    <Button text="Hola" />
    <input type="text" onChange={handleChange} />
    <form onSubmit={(e) => {
      e.preventDefault();
      console.log("Enviado");
    }}>
      <h1>Registro de usuario</h1>
      <button>Enviar</button>
    </form>
  </>
);
