import React, { useState,useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View} from "react-native";
import { useDispatch } from "react-redux";
import { Form, FormItem } from 'react-native-form-component';

const Modals = ({type, modalOpen, setmodalOpen, todo}) => {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [is_complete, setis_complete] = useState(false);
  const dispatch = useDispatch();


  useEffect(() => {
    if (type === "update" && todo) {
      setTitle(todo.title);
      setdescription(todo.description);
      setis_complete(todo.is_complete);
    } else {
      setTitle("");
      setdescription("");
      setis_complete(false);
    }
  }, [type, todo, modalOpen]);

  const handleSubmit = (e) => {
    if (title && description) {
      if (type === "add") {
        dispatch({
          type:"ADD_TODO",
          payload:{
            title: title,
            description: description,
            is_complete: is_complete,
          }
        });
      }
      
      if (type === "update") {
        if (todo.title !== title || todo.description !== description) {
            dispatch({
            type:"EDIT_TODO",
            payload:{
              id: todo.id,
              title: title,
              description: description,
              is_complete: is_complete,
            }
          });
        }
      }
      setmodalOpen(false);
    }
  };
  
  return (
    modalOpen && (

          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalOpen}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setmodalOpen(!modalOpen);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                
                  <Text style={styles.modalText}>{type === "update" ? "UPDATE" : "ADD"} TASK!</Text>

                  <Form onButtonPress={(e) => handleSubmit(e)}>
                    <FormItem
                    style= {styles.Title}
                    label="Title"
                    placeholder="Title"
                    isRequired
                    value={title}
                    onChangeText={(e) => setTitle(e)}
                    asterik
                    />

                    <FormItem
                    style={styles.Title}
                    label="Description"
                    placeholder="Description"
                    textArea
                    isRequired
                    value={description}
                    onChangeText={(e) => setdescription(e)}
                    asterik
                    />
                  
                  </Form>

                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setmodalOpen(!modalOpen)}
                  >
                    <Text style={styles.textStyle}>Cancel</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
        
          </View>

    )
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop:50
  },
  modalView: {
    height:'100%',
    margin: 20,
     backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    width:'100%',
    opacity:1
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width:'100%'
  },
  buttonOpen: {
    backgroundColor: "red",
  },
  buttonClose: {
    backgroundColor: "green",
    height:'7%',
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    paddingTop:6,
    fontSize:16,
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight:'bold',
    fontSize: 18
  },
  Title:{
    width:'100%',
    borderWidth: 1
  }
});

export default Modals;