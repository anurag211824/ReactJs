import React, { useState } from "react";
import { useTodo } from "../contexts";

const TodoItem = ({ todo }) => {
  const { updateTodo, toggleComplete, deleteTodo } = useTodo();
  const [updatedTodoText, setUpdatedTodoText] = useState(todo.todo);
  const [isTodoEdit, setIsTodoEdit] = useState(false);

  const handleMarkComplete = () => {
    toggleComplete(todo.id);
  };

  const handleDeleteTodo = () => {
    deleteTodo(todo.id);
  };

  const handleUpdateTodo = () => {
    updateTodo(todo.id, { ...todo, todo: updatedTodoText });
    setIsTodoEdit(false);
  };

  return (
    <div className={`flex items-center justify-between p-4 mb-3 rounded-lg shadow-sm ${todo.completed ? 'bg-green-100' : 'bg-gray-100'}`}>
      {isTodoEdit ? (
        <div className="flex w-full space-x-2">
          <input
            placeholder="Update your todo"
            type="text"
            className="flex-grow p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={updatedTodoText}
            onChange={(e) => setUpdatedTodoText(e.target.value)}
          />
          <button
            onClick={handleUpdateTodo}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Update
          </button>
        </div>
      ) : (
        <div className="flex w-full items-center space-x-3">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleMarkComplete}
            className="form-checkbox h-5 w-5 text-green-600 transition duration-150 ease-in-out cursor-pointer"
          />
          <span className={`flex-grow text-gray-800 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            {todo.todo}
          </span>
          <button
            onClick={() => {
              setIsTodoEdit(true);
              setUpdatedTodoText(todo.todo);
            }}
            className="px-3 py-1 text-sm bg-yellow-400 text-gray-800 rounded-md hover:bg-yellow-500 transition-colors"
          >
            Edit
          </button>
          <button
            onClick={handleDeleteTodo}
            className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;