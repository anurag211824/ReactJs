import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoStatus, updateTodo } from "../features/todo/todoSlice";

function TodoItem({ todo, id }) {
  const dispatch = useDispatch();
  const [isTodoUpdate, setIsTodoUpdate] = useState(false);
  const [updatedTodoText, setUpdatedTodoText] = useState("");
  return (
    <div>
      {isTodoUpdate === true ? (
        <div className=" flex flex-row bg-gray-900 gap-4 p-3">
          <input
            className="flex-1 border-2 border-gray-400 rounded-md"
            type="text"
            value={updatedTodoText}
            onChange={(e) => setUpdatedTodoText(e.target.value)}
          />
          <button
            className="text-blue-500"
            onClick={() =>{ setIsTodoUpdate(!isTodoUpdate)

                 dispatch(updateTodo({id,updatedTodoText}))
            }}
          >
            Edit
          </button>
        </div>
      ) : (
        <div className="p-3 flex row gap-3 bg-gray-900 shadow-md rounded-md">
          <p className={`text-white flex-1 ${todo.completed === true ? 'line-through':""}`}>{todo.text}</p>
          <div className="flex flex-row gap-2">
            <input type="checkbox" checked={todo.completd} onChange={()=>dispatch(toggleTodoStatus(id))} />
            <button
              className="text-yellow-300"
              onClick={() => {setIsTodoUpdate(!isTodoUpdate)
               
              }}
            >
              Update
            </button>
            <button
              onClick={() => {
                dispatch(removeTodo(id));
              }}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
