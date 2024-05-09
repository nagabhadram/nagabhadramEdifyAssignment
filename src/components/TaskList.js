import Task from './Task'

function TaskList({tasks, deleteTask, updateTask, toggleTaskCompletion}) {
  return (
    <div>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          updateTask={updateTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </div>
  )
}

export default TaskList
