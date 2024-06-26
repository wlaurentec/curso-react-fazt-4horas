import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Boom from "./Product";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <>
    <Greeting />
    <UserCard />
    <Boom />
  </>
);
