import {useState} from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import '../App.css'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = task => {
    setTasks([...tasks, {...task, id: Date.now(), completed: false}])
  }

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const updateTask = updatedTask => {
    setTasks(
      tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)),
    )
  }

  const toggleTaskCompletion = id => {
    setTasks(
      tasks.map(task =>
        task.id === id ? {...task, completed: !task.completed} : task,
      ),
    )
  }

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        updateTask={updateTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    </div>
  )
}

export default App
