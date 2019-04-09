import React, { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AccounterInput from '../../components/UI/AccounterInput/AccounterInput';
import AccounterButton from '../../components/UI/AccounterButton/AccounterButton';
import AccounterLabel from '../../components/UI/AccounterLabel/AccounterLabel'
import {AppImages} from '../../components/UI/Images/AppImages';
import {pushInitalTabbedScreen} from '../../navigation/Nav';

class LoginScreen extends Component{

    loginHandler = () => {
        pushInitalTabbedScreen();
    }

    registerHandler = () => {
        
    }

    constructor(props){
        super(props);        
    }
    
  

    render(){

        return(
            <View style={styles.container}>
                <Image style={styles.image} source={AppImages.logoImage} resizeMode="contain"/>
                <AccounterInput placeholder="Usuario"/>                            
                <AccounterInput textContentType={'password'} secureTextEntry={true} placeholder="Contraseña"/> 
                <AccounterLabel textStyle="underlinelinkText">Olvidaste tu contraseña</AccounterLabel>         
                <AccounterButton onPress={this.loginHandler}>Ingresar</AccounterButton>
                <AccounterLabel>¿ No tienes cuenta ?</AccounterLabel>                        
                <AccounterButton onPress={this.registerHandler} textStyle="darkGray" colorStyle="gray" buttonStyle="grayStyle" >Registrarse</AccounterButton>
            </View>
        );

        
    }

}

const styles=StyleSheet.create({
    container: {
        padding: 26,
        backgroundColor: "#F1F3F0",
        alignItems: "center", 
        width:"100%",
        height:"100%"             
      }, 
      submitbutton:{
          width:"100%"
      }, 
      image: {
        width: "100%",
        height: "40%"
      }
});

export default LoginScreen;