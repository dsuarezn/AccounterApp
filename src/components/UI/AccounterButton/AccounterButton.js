import React, { Component } from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  View,
  StyleSheet,
  Platform
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';


class AccounterButton extends Component{
  
      constructor(props){
          super(props);        
      }      
      render(){
        //Init vars
        
        let currentButtonStyle=buttonStyles.logInGreenStyle;
        let currentColorStyle=gradientColorStyles.green;
        let currentTextStyle=textStyles.bigWhite;

        if(this.props.buttonStyle==='greenStyle'){ 
          currentButtonStyle=buttonStyles.logInGreenStyle;
        }
        else if(this.props.buttonStyle==='grayStyle'){ 
          currentButtonStyle=buttonStyles.registerGrayStyle;
        }

        if(this.props.colorStyle==='green'){ 
          currentColorStyle=gradientColorStyles.green;
        }
        else if(this.props.colorStyle==='gray'){ 
          currentColorStyle=gradientColorStyles.gray;
        }


        if(this.props.textStyle==='bigWhite'){ 
          currentTextStyle=textStyles.bigWhite;
        }
        else if(this.props.textStyle==='darkGray'){ 
          currentTextStyle=textStyles.bigDarkGray;
        }
        

        const content = (
          <LinearGradient colors={[ currentColorStyle.color_A, currentColorStyle.color_B, currentColorStyle.color_C]} style={currentButtonStyle}>
            <View style={styles.view}>
               <Text style={currentTextStyle}>{this.props.children}</Text>
            </View>
          </LinearGradient>
        );
        if (Platform.OS === "android") {
          return (
            <TouchableOpacity onPress={this.props.onPress}>
              {content}
            </TouchableOpacity>
          );
        }
        return <TouchableOpacity onPress={this.props.onPress}>{content}</TouchableOpacity>;        
      }
  
  };
  

const gradientColorStyles = {
  green:{
      color_A: '#28a745',
      color_B: '#269F42',
      color_C: '#00642D'      
  }, 
  gray:{
      color_A: '#F1F3F0',
      color_B: '#b3b4b3',
      color_C: '#757575'  
  }
}



const styles = StyleSheet.create({
  view: {
    width:"100%"
  }
});



const buttonStyles = StyleSheet.create({
  logInGreenStyle: {
    flexDirection: "row",
    padding: 10, 
    margin: 5,   
    borderRadius: 5,
    width:"80%",    
    borderColor:"#226F37",
    borderWidth: 1   
  },
  registerGrayStyle: {
    flexDirection: "row",
    padding: 10, 
    margin: 5,   
    borderRadius: 5,
    width:"80%",    
    borderColor:"#606060",
    borderWidth: 1 
  }
});

const textStyles = StyleSheet.create({  
  bigWhite:{
    textAlign: 'center',
    color: "#ffffff", 
    fontSize:25,
    width: "100%"
  }, 
  bigDarkGray:{
    textAlign: 'center',
    color: "#454545", 
    fontSize:25,
    width: "100%"
  }
});

export default AccounterButton;
