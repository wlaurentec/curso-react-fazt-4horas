import "./task.css"
export function TaskCard({ready}) {
  

  return (
    <div className="card">
      <h1 >Mi primera tarea</h1>
      <span
      style={{color: ready ? "green" : "red", fontWeight: "bold"}}
      >{ready ? "Tarea realizada" : "Tarea pendiente"}</span>
    </div>
  );
}