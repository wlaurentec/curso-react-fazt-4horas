export function Greeting({ title}) {
  console.log(title);
  return <h1>{title}</h1>;
}

export function UserCard({ name, amount, married, points, address, greet }) {
  console.log(greet);
  return (
    <div>
      <h1>{name}</h1>
      <p>Balance: ${amount}</p>
      <p>Married: {married ? "Yes" : "No"}</p>
      <p>Points: {points.join(", ")}</p>
      <p>
        Address: {address.street}, {address.city}, {address.state}
      </p>

      <button onClick={greet}>Greet</button>
    </div>
  );
}
