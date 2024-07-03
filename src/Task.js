import "./Task.css";

const TaskCard = ({ready}) => {

  return (
    <div className="card">
      <h1 className="title" >Mi primera tarea</h1>
      <span className={ready? "bg-green" : "bg-red"}>{ready? "Tarea realizada" : " Tarea pendiente"}</span>
    </div>
  )
}

export default TaskCard
