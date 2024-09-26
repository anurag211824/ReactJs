import React from "react";
import { MdDelete } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
const TodoContents = ({ todos, handleDeleteTodo,handleCompleteTodo }) => {
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
            <h2 className="font-semibold">Task: {todo.task}</h2>
            <p>Status: {todo.completed ? "Done" : "Not Done"}</p>
            <p>Due Date: {todo.dueDate}</p>
            <div className="flex">
            <MdDelete
              className="text-red-600 cursor-pointer mt-2"
              onClick={() => handleDeleteTodo(todo.id)}
            />
            <IoIosCheckmarkCircle
              className="text-green-600 cursor-pointer mt-2"
              onClick={() => {
                handleCompleteTodo(todo.id);
              }}
            />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoContents;
