import React from 'react';

const TodoContents = ({ todos }) => {
  return (
    <div className="mt-6">
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li key={todo.id} className={`p-4 border rounded ${todo.completed ? 'bg-green-100' : 'bg-red-100'}`}>
            <h2 className="font-semibold">Task: {todo.task}</h2>
            <p>Status: {todo.completed ? "Done" : "Not Done"}</p>
            <p>Due Date: {todo.dueDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoContents;
