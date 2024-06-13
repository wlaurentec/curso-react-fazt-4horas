import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  return <div>
  <h1>Hello, Cusco!</h1>
 
 
  
  </div>
}

root.render(<>
  { Greeting()}
  { Greeting()}
  { Greeting()}
  { Greeting()}


  </>
);
