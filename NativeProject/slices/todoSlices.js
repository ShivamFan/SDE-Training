import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
      todos: []
  },
  reducers: {
      fetchTodos: (state, payload) => {

          const data = payload.payload
          if(data) {
              state.todos = data
          }

      },
      addTodo: (state, payload) => {
          const { id, title, description, is_complete, created_at } = payload.payload
       
          state.todos.push({ id, title, description, is_complete, created_at })
      },
      markComplete: (state, payload) => {
          const { id, is_complete }  = payload.payload

        //   console.log(id, is_complete)
          state.todos.forEach((todo, i) => {
              if (todo.id === id) {
                    // console.log("ID Matches")
                  todo.is_complete = is_complete
              }
          })
      },
      updateTodo: (state, payload) => {
          const { id, title, description } = payload.payload
          state.todos.forEach((todo, i) => {
              if (todo.id === id) {
                  todo.title = title
                  todo.description = description
              }
          })
      },
      deleteTodo: (state, payload) => {
          const {id}  = payload.payload
          state.todos = state.todos.filter((todo, i) => {
              return todo.id !== id
          })
      }
  }
})
export const { addTodo, updateTodo, deleteTodo, markComplete, fetchTodos } = todoSlice.actions
export default todoSlice.reducer;
