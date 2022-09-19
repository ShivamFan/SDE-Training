import React, { useState } from "react";
import { Text, View, StyleSheet , Image, TouchableOpacity} from "react-native";
import { useDispatch } from "react-redux";
import Modals from "./Modal";
import CardSilder from 'react-native-cards-slider';


function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch({
      type:"DELETE_TODO",
      payload:{
        id: todo.id,
        is_complete: todo.is_complete
      }
    });
  };

  const handleEdit = () => {
    if (todo.is_complete) {
      return;
    }
    setUpdateModalOpen(true);
  };
  
  const markDone = () => {
    dispatch({
      type:"TOGGLE_TODO",
      payload:{
        id: todo.id,
        is_complete: !todo.is_complete,
      }
    });
  };

  return (
    <>
      <CardSilder>
        <View style={[styles.taskItem, todo.is_complete? styles.Completed : styles.Incomplete]}>
          <View style={styles.taskDetails}>
              <Text style={styles.todoTitle}>
                {todo.title}{'\n'}
              </Text>
              <Text style={styles.todoDesc}>
                {todo.description}
              </Text>
          </View>
        
          <View style={styles.actions}>
          
            <View style={styles.icons}>
              <TouchableOpacity onPress={() => {
                    if(!todo.is_complete) {
                      markDone()
                    }
                  }}>
                <Image source={require('../done-icon.png')}
                  style={{ width: 20, height: 20 ,  backgroundColor: todo.is_complete ? "Red" : "" }}/>
              </TouchableOpacity>
            </View>
          
            <View style={styles.icons}>
              <TouchableOpacity onPress={handleEdit}>
                <Image source={require('../edit-icon.png')}
                  style={{ width: 20, height: 20 }}/>
              </TouchableOpacity>
            </View>
          
            <View style={styles.icons}>
              <TouchableOpacity onPress={handleDelete}>
                <Image source={require('../delete-icon.png')}
                  style={{ width: 20, height: 20 }}/>
              </TouchableOpacity> 
            </View>

          </View>
        </View>
        </CardSilder>
        <Modals
          type={"update"}
          todo={todo}
          modalOpen={updateModalOpen}
          setmodalOpen={setUpdateModalOpen}
        />
    </>
  );
}


const styles = StyleSheet.create({
  taskItem:{
    paddingHorizontal:15,
    paddingTop:10,
    borderWidth :1,
    borderRadius:10,
    marginBottom:10,
    marginTop:10,
    flexWrap:'wrap'
  },
  todoTitle:{
    fontSize:16,
    fontWeight:'bold'
  },
  taskDetails:{
    width:'100%',
  },
  actions:{
    width : '100%',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  icons:{
    margin:15
  },
  Completed:{
    backgroundColor:'#BBE7FE',
  },
  Incomplete:{
    backgroundColor:'white',
  },
  todoDesc:{
    fontSize:17
  }
})

export default TodoItem;
