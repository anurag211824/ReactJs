import { createSlice, nanoid } from "@reduxjs/toolkit";





const todoArray  = localStorage.getItem('todoredux')
if(todoArray ==="undefined"){
    localStorage.setItem('todoredux',JSON.stringify([]))
}
const initialState = {
    todoList:  JSON.parse(localStorage.getItem("todoredux"))
}


export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed:false
      };
     
      state.todoList.push(todo);
       localStorage.setItem("todoredux",JSON.stringify(state.todoList))
    },
    removeTodo(state, action) {
        console.log(action);
        
      state.todoList = state.todoList.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todoredux",JSON.stringify(state.todoList))

    },
    updateTodo: (state, action) => {
        console.log(action);
        
      state.todoList = state.todoList.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.updatedTodoText }
          : todo
      );
      localStorage.setItem("todoredux",JSON.stringify(state.todoList))

    },
    toggleTodoStatus: (state, action) => {
     state.todoList = state.todoList.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      localStorage.setItem("todoredux",JSON.stringify(state.todoList))
    },
  },
});

export const { addTodo, removeTodo, updateTodo,toggleTodoStatus } = todoSlice.actions;

export default todoSlice.reducer;
