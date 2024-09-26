import React, { useState } from 'react';

const TodoForm = ({ handleAddTodo }) => {
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task || !dueDate) return;

    handleAddTodo(task, dueDate);
    setTask(""); 
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        className='border border-blue-400 p-2 rounded focus:outline-none focus:border-blue-600'
        type="text"
        placeholder='Enter Your Todo'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        className='border border-blue-400 p-2 rounded focus:outline-none focus:border-blue-600'
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button className='bg-orange-600 text-white p-2 rounded hover:bg-orange-500 transition' type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
