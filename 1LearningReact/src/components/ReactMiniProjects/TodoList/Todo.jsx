import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoContents from "./TodoContents";

const Todo = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Complete the React project",
      completed: false,
      dueDate: "2024-10-01",
    },
    {
      id: 2,
      task: "Read 30 pages of a book",
      completed: true,
      dueDate: "2024-09-30",
    },
  ]);

  const handleAddTodo = (task, dueDate) => {
    const newTodo = {
      id: Date.now(),
      task,
      completed: false,
      dueDate,
    };
    setTodos([...todos, newTodo]);
  };
  const handleDeleteTodo = (id) => {
    console.log("anurag");

    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  const handleCompleteTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow-lg font-playwrite">
      <h1 className="text-2xl font-bold text-center mb-4">Todo List App</h1>
      <TodoForm handleAddTodo={handleAddTodo} />
      <TodoContents
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
      />
    </div>
  );
};

export default Todo;
