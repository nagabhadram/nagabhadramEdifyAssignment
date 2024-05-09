import {useState} from 'react'

function TaskForm({addTask}) {
  const [task, setTask] = useState({
    title: '',
    description: '',
    priority: '',
    dueDate: '',
  })

  const handleSubmit = event => {
    event.preventDefault()
    addTask(task)
    setTask({title: '', description: '', priority: '', dueDate: ''}) // Reset form
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={task.title}
        onChange={e => setTask({...task, title: e.target.value})}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={e => setTask({...task, description: e.target.value})}
      />
      <input
        type="text"
        name="priority"
        placeholder="Priority"
        value={task.priority}
        onChange={e => setTask({...task, priority: e.target.value})}
      />
      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={e => setTask({...task, dueDate: e.target.value})}
      />
      <button type="submit">Add Task</button>
    </form>
  )
}

export default TaskForm
