import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";


function AppContent() {
  const todoList = useSelector((state) => state.todo.todos);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: 'FETCH_TODOS'})
  }, [])

  return (
    <div className="content">
      {sortedTodoList && sortedTodoList.length > 0
        ? sortedTodoList.map((todo, i) => <TodoItem key={i} todo={todo} />)
        : "no todo found"}
    </div>
  );
}

export default AppContent;
