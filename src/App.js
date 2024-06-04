import "./App.css";

function App() {
  function Greeting() {
    const user = {
      name: "John",
      age: 30,
    }

    return <h1>{JSON.stringify(user)}</h1> // <h1>Hello, {user}</h1>;
  }
  return (
    <div className="App">
      <Greeting />
    </div>
  );
}

export default App;
