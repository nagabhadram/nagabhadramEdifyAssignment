import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function Task({task}) {
  const {deleteTask, toggleTaskCompletion} = useContext(TaskContext)

  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
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
