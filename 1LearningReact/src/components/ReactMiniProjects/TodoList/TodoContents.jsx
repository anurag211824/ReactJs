import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";

const TodoContents = ({ todos, handleDeleteTodo, handleCompleteTodo, handleEditTodo }) => {
  // State to track the todo being edited and the new value
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  // Function to start editing a todo
  const startEditing = (todo) => {
    setEditingTodoId(todo.id); // Set the editing state
    setEditedTask(todo.task);  // Initialize the input with the current task value
  };

  // Function to save the edited todo
  const saveEditedTodo = (id) => {
    handleEditTodo(id, editedTask); // Pass the updated task to the parent handler
    setEditingTodoId(null); // Clear editing state
    setEditedTask("");      // Clear the input field
  };

  return (
    <div className="mt-6">
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`p-4 border rounded ${
              todo.completed ? "bg-green-100" : "bg-red-100"
            }`}
          >
            {editingTodoId === todo.id ? (
              <div>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                  className="border p-1"
                />
                <button
                  onClick={() => saveEditedTodo(todo.id)}
                  className="ml-2 bg-blue-500 text-white p-1 rounded"
                >
                  Save
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-semibold">Task: {todo.task}</h2>
                <p>Status: {todo.completed ? "Done" : "Not Done"}</p>
                <p>Due Date: {todo.dueDate}</p>
                <div className="flex gap-5">
                  <MdDelete
                    className="text-red-600 cursor-pointer mt-2"
                    onClick={() => handleDeleteTodo(todo.id)}
                  />
                  <IoIosCheckmarkCircle
                    className="text-green-600 cursor-pointer mt-2"
                    onClick={() => handleCompleteTodo(todo.id)}
                  />
                  <FaRegEdit
                    className="text-blue-600 cursor-pointer mt-2"
                    onClick={() => startEditing(todo)}
                  />
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoContents;
