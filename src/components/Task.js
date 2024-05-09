function Task({task, deleteTask, toggleTaskCompletion}) {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Due Date: {task.dueDate}</p>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      <button type="button" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  )
}

export default Task
