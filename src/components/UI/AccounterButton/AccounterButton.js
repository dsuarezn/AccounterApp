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

import Icon from 'react-native-vector-icons/MaterialIcons';




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
        else if(this.props.buttonStyle==='roundGreenStyle'){ 
          currentButtonStyle=buttonStyles.roundIconGreenStyle;
        }
        else if(this.props.buttonStyle==='lightGreenStyle'){ 
          currentButtonStyle=buttonStyles.lightGreenStyle;
        }

        if(this.props.colorStyle==='green'){ 
          currentColorStyle=gradientColorStyles.green;
        }
        else if(this.props.colorStyle==='gray'){ 
          currentColorStyle=gradientColorStyles.gray;
        }
        else if(this.props.colorStyle==='transparent'){ 
          currentColorStyle=gradientColorStyles.transparent;
        }



        if(this.props.textStyle==='bigWhite'){ 
          currentTextStyle=textStyles.bigWhite;
        }
        else if(this.props.textStyle==='darkGray'){ 
          currentTextStyle=textStyles.bigDarkGray;
        }
        else if(this.props.textStyle==='littleWhite'){ 
          currentTextStyle=textStyles.littleWhite;
        }

        const content = (
          <LinearGradient colors={[ currentColorStyle.color_A, currentColorStyle.color_B ]} style={currentButtonStyle}>
            <View style={styles.view}>
              { this.props.icon!==undefined ?
                <Icon name={this.props.icon} size={20} color={currentTextStyle.color} />
               : null
              }
               <Text style={currentTextStyle}>{this.props.children}</Text>
            </View>
          </LinearGradient>
        );

        // const contentRNE=(
        //   <Button icon={
        //       <Icon name="arrow-right" size={15} color="white" />
        //   }
        //   title="Button with icon component"/>
        // );

        

        if (Platform.OS === "android") {
          return (
            <TouchableOpacity onPress={this.props.onPress} >
              {content}
            </TouchableOpacity>
          );
        }
        return <TouchableOpacity onPress={this.props.onPress}>{content}</TouchableOpacity>;        
      }
  
  };
  

const gradientColorStyles = {
  green:{
      color_A: '#329130', 
      color_B: '#4DA72C'     
  }, 
  gray:{
      color_A: '#F1F3F0',      
      color_B: '#757575'  
  }, 
  transparent:{
    color_A: 'rgba(246, 248, 250,0.4)',
    color_B: '#00000000'          
  }
}



const styles = StyleSheet.create({
  view: {
    width:"100%", 
    flex:1, 
    alignItems:"center", 
    justifyContent:"space-between", 
    flexDirection:"row"
    
  }
});



const buttonStyles = StyleSheet.create({
  lightGreenStyle: {
    flexDirection: "row",
    padding: 10, 
    marginBottom: 5, 
    marginTop:5,  
    borderRadius: 5,
    width:"90%", 
    height:30,       
    borderWidth: 1,
    borderColor:"#4DA72C",
  },
  roundIconGreenStyle: {
    flexDirection: "row",
    padding: 10, 
    marginBottom: 5, 
    marginTop:5,  
    borderRadius: 15,
    width:"70%", 
    height:35,       
    borderWidth: 1,
    borderColor:"#4DA72C",
  },
  logInGreenStyle: {
    flexDirection: "row",
    padding: 10, 
    marginBottom: 5, 
    marginTop:5,  
    borderRadius: 5,
    width:"90%", 
    height:40,       
    borderWidth: 1,
    borderColor:"#4DA72C",
  },
 
  registerGrayStyle: {
    flexDirection: "row",
    padding: 10, 
    marginBottom: 5, 
    marginTop:5,     
    borderRadius: 5,
    width:"90%", 
    height:40,         
    borderWidth: 1, 
    borderColor: "#D8D8D8",
  }
});

const textStyles = StyleSheet.create({  
  littleWhite:{
    textAlign: 'center',        
    width: "100%",
    fontSize:13, 
    fontFamily: "Roboto-Bold",
    color:"#FFFFFF",
    letterSpacing:1
  },
  bigWhite:{
    textAlign: 'center',        
    width: "100%",
    fontSize:20, 
    fontFamily: "Roboto-Bold",
    color:"#FFFFFF",
    letterSpacing:2
  }, 
  bigDarkGray:{
    textAlign: 'center',
    color: "#454545", 
    fontSize:25,
    width: "100%",
    letterSpacing:2
  }
  
});

export default AccounterButton;
