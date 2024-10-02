import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoContents from "./TodoContents";

const Todo = () => {
  const todokey="reactTodo"
  const [todos, setTodos] = useState(() => {
    // Load initial todos from local storage, if any
    const storedTodos = localStorage.getItem("todokey");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  
  const [dateAndTime, setTimeAndDate] = useState("");

  // Add Todo
  const handleAddTodo = (task, dueDate) => {
    const taskList = todos.map((todo) => todo.task);
    if (taskList.includes(task)) {
      alert("Task already exists in the todo list!");
      return;
    }
    const newTodo = {
      id: Date.now(),
      task,
      completed: false,
      dueDate,
    };
    setTodos([...todos, newTodo]);
  };

  // Delete Todo
  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  const handleEditTodo = (id, newTask) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask } : todo
      )
    );
  };
  
  // Complete Todo
  const handleCompleteTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  // Date and time
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setTimeAndDate(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("todokey", JSON.stringify(todos));
  }, [todos]);

  // Delete All Todos
  const handleClearAllTodo = () => {
    setTodos([]);
  };

  // Handle reset (clearing all todos)
  const handleReset = () => {
    handleClearAllTodo();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow-lg font-playwrite">
      <h1 className="text-2xl font-bold text-center mb-4">Todo List App</h1>
      <h2 className="text-xl font-medium text-gray-600 text-center mt-2 mb-4">
        {dateAndTime}
      </h2>
      <TodoForm handleAddTodo={handleAddTodo} />
      <TodoContents
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
        handleEditTodo={handleEditTodo}
      />
      <div className="flex gap-4 mt-4">
        <button
          onClick={handleClearAllTodo}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-md"
        >
          Clear All Todos
        </button>
        <button
          onClick={handleReset}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Todo;
