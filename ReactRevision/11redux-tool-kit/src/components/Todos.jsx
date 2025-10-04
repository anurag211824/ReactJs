import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';

function Todos() {
    const todos = useSelector((state)=>state.todos)
    console.log(todos);
    
  return (
    <div className='flex flex-col gap-4 mt-4'>
        {
            todos.todoList.map((todo)=>{
                return <TodoItem key={todo.id} id={todo.id} todo={todo}/>
            })
        }
    </div>
  )
}

export default Todos