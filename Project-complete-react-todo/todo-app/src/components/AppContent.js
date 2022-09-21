import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";


function AppContent() {
  const todoList = useSelector((state) => state.todo.todos);
  const sortedTodoList = [...todoList];
  // sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));
  sortedTodoList.sort((a, b) => (a.is_complete > b.is_complete) ? 1 : -1)


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: 'FETCH_TODOS'})
  }, [])

  return (
    <div className="content">
      {sortedTodoList && sortedTodoList.length > 0
        ? sortedTodoList.map((todo, i) => <TodoItem key={i} todo={todo} />)
        : <div style={{textAlign:"center"}}><p style={{fontSize:"30px"}}>No Todos</p></div>}
    </div>
  );
}

export default AppContent;
