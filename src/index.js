import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TaskCard } from "./Task.js";
import { Saludar } from "./Saludar.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<>
  <TaskCard ready={true}/>
  <Saludar />
</>);
