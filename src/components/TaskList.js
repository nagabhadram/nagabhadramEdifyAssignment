import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
import Task from './Task'

function TaskList() {
  const {tasks} = useContext(TaskContext)

  return (
    <div>
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TaskList
