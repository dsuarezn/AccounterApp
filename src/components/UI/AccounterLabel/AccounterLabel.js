import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';



class AccounterLabel extends Component{

    constructor(props){
        super(props);        
    }
    
    render(){
        let controlStyle=styles.defaultText;
        if(this.props.textStyle==='headingText'){ 
            controlStyle=styles.headingText;
        }
        else if(this.props.textStyle==='underlinelinkText'){ 
            controlStyle=styles.underlinelinkText;
        }
        return(
            <Text  style={[controlStyle, this.props.style]}>
                {this.props.children}
            </Text>
        );        
    }

};


const styles=StyleSheet.create({
    headingText:{
        fontSize:28,
        fontWeight:"bold", 
        margin:5
    }, 
    underlinelinkText:{
        textDecorationLine:"underline", 
        fontSize:20, 
        margin:5
    }, 
    defaultText:{         
        fontSize:23, 
        margin:5
    }
});

export default AccounterLabel;