import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Appbar, Button } from 'react-native-paper';
import Displaylove from './components/Displaylove'

class App extends React.Component {
  state={
    fname:'',
    sname:'',
    result:'Loading'
  }

  submiting(){
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,{
    "headers": {
      "x-rapidapi-host": "love-calculator.p.rapidapi.com",
      "x-rapidapi-key": "6f3851a82emsh8f3d8728f6b9e1ep1836b7jsn3304fc6c79ab"
    }
  })
    .then(data=>data.json())
    .then(data2=>{
      this.setState({
        result:data2
      })
    })
  }
   render(){
     return (
       <View style={styles.container}>
          <Appbar.Header>      
          <Appbar.Content
            title="Love % Calculator"
            style={{ alignItems:"center" }}
          />
          </Appbar.Header>

         <TextInput
            label='First Lover Name'
            value={this.state.fname}
            onChangeText={text => this.setState({ fname:text })}
         />
         <TextInput
            label='Second Lover Name'
            value={this.state.sname}
            onChangeText={text => this.setState({ sname:text })}
         />

          <Button 
            icon="heart-pulse" 
            mode="contained"
            style={{ margin:10 }} 
            onPress={this.submiting.bind(this)}>
              Calculate
          </Button>
          <Displaylove data={this.state.result} />
       </View>
     );
   }
 }
 
 export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
