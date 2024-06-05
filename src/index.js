import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserCard
      name="John"
      amount={1000}
      married={true}
      points={[99, 22, 32]}
      address={{ city: "New York", country: "USA" }}
      greet={function () {
        alert("Hello");
      }}
    />
    <UserCard
      name="Joe"
      amount={2000}
      married={false}
      points={[99, 22, 32]}
      address={{ city: "California", country: "USA" }}
      
    />
    
  </React.StrictMode>
);
