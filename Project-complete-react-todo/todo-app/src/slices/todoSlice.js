import { createSlice } from "@reduxjs/toolkit";

// const getInitialTodo = () => {
//   const localTodoList = window.localStorage.getItem("todoList");

//   if (localTodoList) {
//     return JSON.parse(localTodoList);
//   }
//   window.localStorage.setItem("todoList", JSON.stringify([]));
//   return [];
// };

// const initialValue = {
//   todoList: getInitialTodo(),
// };

// export const todoSlice = createSlice({
//   name: "todo",
//   initialState: initialValue,
//   reducers: {
//     addTodo: (state, action) => {
//       state.todoList.push(action.payload);
//       const todoList = window.localStorage.getItem("todoList");
//       if (todoList) {
//         const todoListArr = JSON.parse(todoList);
//         todoListArr.push({ ...action.payload });
//         window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
//       } else {
//         window.localStorage.setItem(
//           "todoList",
//           JSON.stringify([...action.payload])
//         );
//       }
//     },

//     deleteTodo: (state, action) => {
//       const todoList = window.localStorage.getItem("todoList");
//       if (todoList) {
//         const todoListArr = JSON.parse(todoList);
//         todoListArr.forEach((todo, index) => {
//           if (todo.id === action.payload) {
//             todoListArr.splice(index, 1);
//           }
//         });
//         window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
//         state.todoList = todoListArr;
//       }
//     },

//     updateTodo: (state, action) => {
//       // console.log("Update Clicked");
//       const todoList = window.localStorage.getItem("todoList");
//       if (todoList) {
//         const todoListArr = JSON.parse(todoList);
//         todoListArr.forEach((todo, index) => {
//           if (todo.id === action.payload.id) {
//             todo.title = action.payload.title;
//             todo.desc = action.payload.desc;
//           }
//         });
//         window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
//         state.todoList = todoListArr;
//       }
//     },

//     markComplete: (state, action) => {
//       // console.log("Complete Clicked");
//       const todoList = window.localStorage.getItem("todoList");
//       if (todoList) {
//         const todoListArr = JSON.parse(todoList);
//         todoListArr.forEach((todo, index) => {
//           if (todo.id === action.payload) {
//             if (!todo.status) {
//               // console.log(!todo.status);
//               todo.status = true;
//               alert("Task marked as done");
//             }
//           }
//         });
//         window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
//         state.todoList = todoListArr;
//       }
//     },
//   },
// });

// export const { addTodo, deleteTodo, updateTodo, markComplete } =
//   todoSlice.actions;











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

          console.log(id, is_complete)
          state.todos.forEach((todo, i) => {
              if (todo.id === id) {
                    console.log("ID Matches")
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
