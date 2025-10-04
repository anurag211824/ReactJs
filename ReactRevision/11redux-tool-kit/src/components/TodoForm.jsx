import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function TodoForm() {
    const dispatch = useDispatch()
    const [todo, setTodo] = useState("");


    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo(todo))
        setTodo("");
    };

    return (
        <form onSubmit={handleAddTodo} className="flex space-x-2 w-full  p-4 bg-gray-900 rounded-lg shadow-md">
            <input
                type="text"
                placeholder='Enter your todo'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className="flex-grow p-3 border text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            />
            <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
            >
                Add Todo
            </button>
        </form>
    );
}

export default TodoForm;