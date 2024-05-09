import {createContext, useState, useCallback} from 'react'

// Define the initial state and the shape of the context
export const TaskContext = createContext({
  tasks: [],
  addTask: () => {},
  deleteTask: () => {},
  updateTask: () => {},
  toggleTaskCompletion: () => {},
})

export const TaskProvider = ({children}) => {
  const [tasks, setTasks] = useState([])

  // Add a task to the list
  const addTask = useCallback(task => {
    setTasks(currentTasks => [
      ...currentTasks,
      {...task, id: Date.now(), completed: false},
    ])
  }, [])

  // Remove a task by id
  const deleteTask = useCallback(id => {
    setTasks(currentTasks => currentTasks.filter(task => task.id !== id))
  }, [])

  // Update a task by id
  const updateTask = useCallback(updatedTask => {
    setTasks(currentTasks =>
      currentTasks.map(task =>
        task.id === updatedTask.id ? updatedTask : task,
      ),
    )
  }, [])

  // Toggle the completion status of a task
  const toggleTaskCompletion = useCallback(id => {
    setTasks(currentTasks =>
      currentTasks.map(task =>
        task.id === id ? {...task, completed: !task.completed} : task,
      ),
    )
  }, [])

  // Providing the task-related data and functions to the context
  return (
    <TaskContext.Provider
      value={{tasks, addTask, deleteTask, updateTask, toggleTaskCompletion}}
    >
      {children}
    </TaskContext.Provider>
  )
}
