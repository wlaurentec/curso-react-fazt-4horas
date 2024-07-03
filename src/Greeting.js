export function Greeting({title, name = "User"}) {
  console.log(title, name)
  return (
    <>
      <h1>It is {title} {name}.</h1>
      <p>It is {new Date().toLocaleDateString()}.</p>
    </>
  )
}

export function UserCard (props) {
  console.log(props)
  return (
    <>
      <h1>User Card</h1>
 
    </>
  )
}