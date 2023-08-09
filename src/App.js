import './App.css';
import { useState } from 'react'
import TaskItem from './components/TaskItem';

const App = () => {
  // eslint-disable-next-line no-unused-vars
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

  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
}

export default App;
