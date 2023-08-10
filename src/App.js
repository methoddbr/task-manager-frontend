import './App.css';
import { useState, useRef, useEffect } from 'react'
import TaskItem from './components/TaskItem';

const App = () => {
  const mounted = useRef(false)
  useEffect(() => {
    if (mounted.current === false) {
      mounted.current = true
    } else {
      console.log('component was updated!')
    }
  })
  const [tasks, setTasks] = useState(
    [
      {
        id: '1',
        description: 'study',
        isCompleted: false
      },
      {
        id: '2',
        description: 'work',
        isCompleted: true
      },
      {
        id: '3',
        description: 'gym',
        isCompleted: true
      },
      {
        id: '4',
        description: 'shower',
        isCompleted: false
      },
      {
        id: '5',
        description: 'sleep',
        isCompleted: false
      }
    ]
  )

  const handleClaenTasks = () => {
    setTasks([])
  }
  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
      <button onClick={handleClaenTasks}>Limpar tarefas</button>
    </>
  );
}

export default App;
