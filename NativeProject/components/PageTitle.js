import React from "react";
import {StyleSheet,Text,View,} from 'react-native';

function PageTitle({ children }) {
  return (
    <>
      <View>
        <Text style={styles.Title}>
          {children}
        </Text> 
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  Title: {
    flexDirection:'row',
    width: '100%',
    fontSize: 20,
    fontWeight:'bold',
    textAlign:'center',
    paddingTop:60,
    marginTop:15,
    marginBottom:15,
  }
});

export default PageTitle;
