import React, { Component } from "react";
import {
    View,
    TextInput,
    StyleSheet
} from "react-native";


class AccounterInput extends Component{
    
        constructor(props){
            super(props);        
        }
        
        render(){
           
            return(                
                     <TextInput 
                        placeholder={this.props.placeholder}
                        underlineColorAndroid={'transparent'} 
                        autoComplete={this.props.autoComplete}
                        secureTextEntry={this.props.secureTextEntry}
                        textContentType={this.props.textContentType}
                        style = {[styles.input, this.props.style]}
                        value={this.props.value} onChangeText={this.props.onChangeText}/>                 
            );        
        }
    
};


// Campo vacio formulario:
// Height: 40px
// Font-size: 16px
// Border radius: 5px
// Padding: 15px
// Margin: 0 0 10px;
// Background-color: #fefefe;
// Fuente: A8A8A8


const styles = StyleSheet.create({
    input: {
        width: "100%",    
        height:38,    
        borderWidth: 1,
        borderColor: "#D8D8D8",
        paddingLeft:10,
        paddingRight:10,
        paddingTop:0,
        paddingBottom:0,
        backgroundColor: "#fefefe",
        color:'#A8A8A8',
        fontFamily: 'Roboto',
        
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 5,
        backgroundColor : "#FFFFFF",
        width: "90%",         
        borderColor:"#D8D8D8",
        borderWidth: 2, 
        marginBottom:5,
        marginTop:5      
    }
    // ,wrapper: {
    //     flexDirection: "row",
    //     justifyContent: "center",
    //     borderRadius: 5,
    //     backgroundColor : "#FFFFFF",
    //     width: "90%",         
    //     borderColor:"#D8D8D8",
    //     borderWidth: 1, 
    //     marginBottom:5,
    //     marginTop:5        
    // }
});


const borderColors={
    defaultUnfoccusColor:"#c0c0c0",
    defaultFoccusedColor:"#3AAA35"
};

export default AccounterInput;