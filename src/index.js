import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("render");
  }, [count]);

  return (
    <div>
      <input onChange={(e) => setMessage(e.target.value)} />
      <button onClick={(e) => alert(message)}>Save</button>
      <h1>{message}</h1>

      <hr />

      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

root.render(
  <>
    <Counter />
  </>
);
