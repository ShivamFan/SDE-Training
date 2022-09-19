import React, { useEffect } from "react";
import { View, StyleSheet ,Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";


function AppContent() {
  const todoList = useSelector((state) => state.todo.todos);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => (a.is_complete > b.is_complete) ? 1 : -1)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: 'FETCH_TODOS'})
  }, [])

  return (
      <View style={styles.content}>
            {sortedTodoList && sortedTodoList.length > 0
              ? sortedTodoList.map((todo, i) => <TodoItem key={i} todo={todo} />)
              : <Text>no todo found</Text>}
      </View>
  );
}



const styles = StyleSheet.create({
  content:{
    flex:1,
    paddingHorizontal:10,
    paddingVertical:15,
  }
})


export default AppContent;
