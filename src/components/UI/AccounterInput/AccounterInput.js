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
                <View style = {[styles.wrapper, this.props.style]}>
                     <TextInput 
                        placeholder={this.props.placeholder}
                        underlineColorAndroid={'transparent'} 
                        autoComplete={this.props.autoComplete}
                        secureTextEntry={this.props.secureTextEntry}
                        textContentType={this.props.textContentType}
                        style = {[styles.input, this.props.style]}/> 
                </View>
            );        
        }
    
};

const styles = StyleSheet.create({
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "transparent",
        padding: 3,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: "transparent",
        color:'#455A64'        
    },
    wrapper: {
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 5,
        backgroundColor : "#FFFFFF",
        width: "80%",         
        borderColor:"#3AAA35",
        borderWidth: 2, 
        margin:5
        
    }
});


const borderColors={
    defaultUnfoccusColor:"#c0c0c0",
    defaultFoccusedColor:"#3AAA35"
};

export default AccounterInput;