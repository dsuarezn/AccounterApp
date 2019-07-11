import React, { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AccounterInput from '../../components/UI/AccounterInput/AccounterInput';
import AccounterButton from '../../components/UI/AccounterButton/AccounterButton';
import {AppImages} from '../../components/UI/Images/AppImages';
import {pushInitalTabbedScreen, pushToUserRegister} from '../../navigation/Navigation';
import { CheckBox, Button, Divider } from 'react-native-elements';

import { setAuthData } from '../../store/actions/actions';
import Video from 'react-native-video';
import { connect } from 'react-redux';
import { environment } from "../../environment/environment";

// import LoginVideo from '../../assets/media/login_background.mp4';

class LoginScreen extends Component{
   
    state = {        
        checked:false, 
        nombre:null, 
        password:null
    };

    authData =null;

    loginApi(){
      
      var nombre=this.state.nombre;
      var password=this.state.password;
      let authDataFunction = this.props.setAuthenticationData;
      fetch(environment.apiUrl+'/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombreUsuario: nombre,
          password: password,
        }),
      })         
      .then(function(response) {
        if(response.ok) {
          response.json().then((item) =>{ 
            if(this.state.checked){
              authDataFunction(item);
            }                                  
            pushInitalTabbedScreen();
          })
        } else {
          response.json().then((item) =>{            
            console.log(JSON.stringify(item));
          })
        }
      })
      .catch((error) => {
        console.log("print on error");
        console.log(error);    
      });
    }


    loginHandler = () => {
      try {           
        this.loginApi();           
      } catch (error) {
        console.log(error);
      }    
    }

    
    registerHandler = () => {
        pushToUserRegister();
    }

    constructor(props){
        super(props);        
    }
    
  

    render(){

        return(
            <View style={styles.container}>

                <Video
                    repeat 
                    source={require('../../assets/media/login_background.mp4')} 
                    resizeMode="cover"            
                    style={styles.backgroundVideo} />   

                <View style={styles.innerContainer}>

                    <Image style={styles.image} source={AppImages.logoImage} resizeMode="contain"/>
                    
                    <Text  style={styles.titleLabel}>
                            Inicia sesión:
                    </Text>
                    <AccounterInput placeholder="nombre@ejemplo.com" value={this.state.nombre} onChangeText={(value) => this.setState({nombre:value})}/>                            
                    <AccounterInput textContentType={'password'} secureTextEntry={true} placeholder="Contraseña" value={this.state.password} onChangeText={(value) => this.setState({password:value})}/> 
                    <AccounterButton onPress={this.loginHandler}>Ingresar</AccounterButton>

                    {/* <Button raised title="Button with icon component"  
                        icon={{ name: "arrow-right", size: 15, color: "white" }}
                    /> */}

                    <View style={styles.rememberRow}>
                        <CheckBox
                            center
                            title='Recordar contraseña'
                            textStyle={styles.rememberText}
                            containerStyle={styles.checkContainerStyle}
                            checked={this.state.checked}                            
                            iconRight
                            iconType='material'
                            checkedIcon='check-box'
                            uncheckedIcon='check-box-outline-blank'
                            checkedColor='#4DA72C'
                            onPress={() => this.setState({checked: !this.state.checked})}
                            />
                        <Text style={styles.rememberText}>
                            ¿Has olvidado la contraseña?
                        </Text>   
                    </View> 

                    

                    <Text style={styles.rememberText}>
                            ¿Nuevo usuario? Registrese aquí
                        </Text>                       
                    <AccounterButton onPress={this.registerHandler} textStyle="bigWhite" colorStyle="transparent" buttonStyle="grayStyle" >Registrarse</AccounterButton>
                    
                    <View style = {styles.viewStyleForLine}></View>
                
                    <Text style={styles.footerText}>
                    © Todos los derechos reservados Accounter S.A.S
                    </Text>
                    <View style={styles.documentsRow}>
                        <Text style={styles.linkFooterText}>
                        Términos de servicio 
                        </Text>
                        <Text style={styles.footerText}>
                        {' y '}
                        </Text>
                        <Text style={styles.linkFooterText}>
                        Políticas de privacidad 
                        </Text>
                    </View>


                </View>


            </View>
        );

        
    }

}

const styles=StyleSheet.create({
    innerContainer: {          
      flexDirection: "column",          
      backgroundColor: 'transparent', 
      alignItems: "center", 
      width:"98%",
      height:"100%"             
    }, 
    container: {          
        flexDirection: "column",          
        backgroundColor: 'black', 
        alignItems: "center", 
        width:"100%",
        height:"100%"             
      }, 
      divider:{
        backgroundColor:"white",
        height:10
      },
      submitbutton:{
          width:"100%"
      }, 
      image: {
        width: "64%",
        height: "28%"
      },
      backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: .4
      },
      titleLabel: {
        color:"#FFFFFF", 
        fontSize:20, 
        fontFamily: "Roboto", 
        marginBottom:15
      },
      rememberRow: {        
        flexDirection:"row",
        height:45,
        justifyContent: "flex-start", 
        alignItems:"baseline", 
        padding:0, 
        marginBottom:15,        
        width:"100%"
      },
      documentsRow: {        
        flexDirection:"row",
        height:45,
        justifyContent: "center", 
        alignItems:"baseline", 
        padding:0, 
        marginBottom:15,        
        width:"100%"
      },
      linkFooterText:{
        fontSize:10, 
        fontFamily: "Roboto",
        color:"#FFB900" 
      },
      footerText:{
        fontSize:10, 
        fontFamily: "Roboto",
        color:"#FFFFFF", 
        alignItems:"center"
      },
      rememberText:{
        fontSize:13, 
        fontFamily: "Roboto-Bold",
        color:"#FFFFFF"        
      },
      buttonStyle: {
        flex:1,
        flexDirection:"row"
      },
      checkContainerStyle:{
        backgroundColor: 'transparent', 
        borderWidth: 0,
        borderColor:"transparent",
        height:45, 
        padding:0
      }, 
      checkIconContainerStyle:{
        backgroundColor: '#FFFFFF', 
        color:"#329130"
      },
      iconStyle:{
        backgroundColor: '#FFFFFF', 
        color:"#329130"
      },
      viewStyleForLine: {
        borderBottomColor: "rgba(255,255,255,0.7)", 
        borderBottomWidth: StyleSheet.hairlineWidth,         
        width: "60%", 
        alignItems:"center",
        marginBottom:20, 
        marginTop:23
      }
});


const mapStateToProps =(state)=>{
  return {                     
  }
}

const mapDispatchToProps =(dispatch)=>{
  return {      
      setAuthenticationData:(authdata) => dispatch(setAuthData(authdata))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen);