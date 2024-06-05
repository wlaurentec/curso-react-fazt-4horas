export function Greeting({ title, name }) {
  console.log(title, name);
  return <h1>{title}</h1>;
}

export function UserCard(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.amount}</p>
      <p>{props.married ? "Married" : "Not Married"}</p>
      <ul>
        <li>City: {props.address.city}</li>
        <li>Country: {props.address.country}:</li>

      </ul>
    
    </div>
  );
}
