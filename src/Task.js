export function TaskCard() {
  const cardStyles = {
    background: "#202020",
    color: "#fff",
    padding: "20px",
  };
  
  const titleStyles = {
    fontWeight: "lighter",
  };

  return (
    <div style={cardStyles}>
      <h1 style={titleStyles}>Mi primera tarea</h1>
      <p>Tarea realizada</p>
    </div>
  );
}