export function Greeting() {
  const user = {
    firstName: "Dima",
    lastName: "Kozlov",
  }

  function add(a, b) {
    return a + b
  }

  return (
    <>
      <h1>Hello, {user.firstName} {user.lastName}!</h1>
      <p>It is {new Date().toLocaleTimeString()}.</p>
      <p>It is {new Date().toLocaleDateString()}.</p>
      <p>It is {new Date().toLocaleTimeString()}.</p> 
      <p>Sum = {add(1, 2)}</p>
    </>
  )
}

export function UserCard () {
  return (
    <>
      <h1>User Card</h1>
 
    </>
  )
}