import { useEffect, useState } from "react";
import { Todoprovider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
function App() {
  const [todos, SetTodos] = useState([]);

  const addTodo = (todo) => {
    SetTodos(function (prev) {
      return [...prev, todo];
    });
  };
  const updateTodo = (id, todo) => {
    SetTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };
  const deleteTodo = (id) => {
    SetTodos((prev) => prev.filter((prevTodo) => prevTodo.id != id));
  };
  useEffect(() => {
    const todos = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(todos)

    if (parsedTodos && parsedTodos.length > 0) {
      SetTodos(parsedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const toggleComplete = (id) => {
    SetTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };
  return (
    <Todoprovider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
   <TodoForm/>
    {
      todos.map((todo)=>{
        return <TodoItem todo = {todo}/>
      })
    }

    </Todoprovider>
  );
}

export default App;
