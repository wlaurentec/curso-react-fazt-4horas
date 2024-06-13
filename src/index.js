import React from "react";
import ReactDOM from "react-dom/client";
import { UserCard } from "./Greeting";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <UserCard 
      amount={100}
      married={true}
      points={[10, 20, 30]}
      address={{
        street: "123 Main St",
        city: "New York",
        state: "NY",
      }}
      greet = {() => console.log("Hello")}
    />
    
  </>
);
