import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Displaylove = (prop)=>{
    if(prop.data=="Loading"){
        return <Text style={styles.text}>Please Wait</Text>
    }
    if(prop.data.message){
        return  <Text style={styles.error}>Sorry something went wrong. try after some time</Text>
    }
    else{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{prop.data.percentage}</Text>
            <Text style={styles.text}>{prop.data.result}</Text>
        </View>
    )
  }
}
export default Displaylove;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    text: {
        fontSize:30,
        textAlign:"center"
    },
    error:{
        fontSize:10,
        textAlign:"center",
        color:'red'
    }
  });