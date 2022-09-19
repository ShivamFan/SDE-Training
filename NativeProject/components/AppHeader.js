import React, { useState } from "react";
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native';
import Modals from "./Modal";

function AppHeader() {
  const [modalOpen, setmodalOpen] = useState(false);
  return (
    <View>
      <View style={styles.addNew}>
        
        <Text style={styles.addText}>
          Add New Task Here
        </Text>
        
        <TouchableOpacity>
          <View style={styles.add}>
            <TouchableOpacity onPress={() => setmodalOpen(true)}>
              <Text style={styles.icon}>+</Text>
            </TouchableOpacity>

          </View>
        </TouchableOpacity>
      </View>
    <View >
    
   <Modals type={"add"} modalOpen={modalOpen} setmodalOpen={setmodalOpen}/>
    </View>


    </View>
  );
}


const styles = StyleSheet.create({

  addNew :{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderRadius:60,
    paddingVertical:10,
    paddingHorizontal:30,
    backgroundColor:'white',
  },

  addText:{
    fontSize:17,
  },
  
  icon: {
    fontSize:20,
  }
  
});

export default AppHeader;
