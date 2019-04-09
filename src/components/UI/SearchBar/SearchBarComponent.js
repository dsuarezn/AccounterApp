import React, { Component } from "react";
import {
    View,
    TextInput,
    StyleSheet
} from "react-native";

export default class SearchBarComponent extends Component {

    constructor(props){
        super(props);        
    }

    render () {
      return (
        <View style={styles.container}>
          
            <TextInput style={styles.textfield} placeholder={this.props.placeholder}/>
          
        </View>
      );
    }
  
  }
  
  const styles = StyleSheet.create({
    container: {     
      width:"100%",     
      flexDirection: "row",  
      backgroundColor: "white",
      borderRadius: 25      
    },
    textfield: {
      width:"100%",     
      borderRightColor: 'white',
      borderLeftColor: 'transparent', 
      color: "gray",
      fontSize:20
    }
  });