import React from 'react'
import './index.css'
import ReactDOM from 'react-dom'
import {TaskProvider} from './context/TaskContext'
import App from './components/App'

ReactDOM.render(
  <React.StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
