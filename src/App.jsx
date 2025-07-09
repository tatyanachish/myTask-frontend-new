
import { useEffect, useState } from 'react'
import './App.css'
import { AddCardForm } from './AddCardForm'
import { TaskCard } from './TaskCard'
import { useGetTaskQuery, useAddTaskMutation, useDeleteTaskMutation, useEditTaskMutation } from './redux/apiTask'


function App() {
  
  const [myTask, setMyTask] = useState([])
  
  const { data, isLoading } = useGetTaskQuery();
  const [addTask] = useAddTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  const [editTask] = useEditTaskMutation();

  
  useEffect(()=> {
    if(data)  {
       console.log("Mongo response:", data);
      setMyTask(data)
    }
  }, [data])

  if (isLoading) return <div>Loading...</div>;



  return (    
      <div>
        <div className='headliner'>
          <h1>MY TO-DO LIST</h1>
        </div>  
          <AddCardForm onSubmit={addTask}/>
          <div className='cardList'>
            {data?.map((task) => (
              <div key={task._id} className='cardWapper'>
              <TaskCard                   
                  task={task}  
                  onDelete={deleteTask}
                  onEdit={editTask}                  
              />
              </div>
            ))}
          </div>
      </div>
  )
}      
    
      
  
export default App
