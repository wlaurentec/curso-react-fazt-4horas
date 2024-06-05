export function Greeting({ title, name }) {
  console.log(title, name);
  return <h1>{title}</h1>;
}

export function UserCard({ name, amount, married, address, greet }) {
  console.log(name, amount, married, address, greet);
  return (
    <div>
      <h1>{name}</h1>
      <p>{amount}</p>
      <p>{married ? "Married" : "Not Married"}</p>
      <ul>
        <li>City: {address.city}</li>
        <li>Country: {address.country}:</li>
      </ul>
    </div>
  );
}
