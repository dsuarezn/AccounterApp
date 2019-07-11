import React, { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AccounterInput from '../../components/UI/AccounterInput/AccounterInput';
import AccounterButton from '../../components/UI/AccounterButton/AccounterButton';
import {AppImages} from '../../components/UI/Images/AppImages';

import { CheckBox, Button, Divider } from 'react-native-elements';
import {pushInitalLoginScreen} from '../../navigation/Navigation';

import { environment } from "../../environment/environment";

class RegistroScreen extends Component{

    state = {
        terminosCondiciones:false,
        nombre:null,
        identificacion:null,
        ciudad:null,
        telefono:null,
        mail:null,
        password:null,
        confirmarPassword:null
    };

    crearUsuarioHandler = () => {  
      if(this.state.terminosCondiciones){
        this.registroApiCall();
      }      
    }

    constructor(props){
        super(props);        
    }


    registroApiCall(){
      
      var nombre=this.state.nombre;
      var clave=this.state.password;
      var id = this.state.identificacion;
      var city = this.state.ciudad;
      var phone = this.state.telefono;
      var email = this.state.mail;

      fetch(environment.apiUrl+'/registrar', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({          
          ciudad:city,
          correoElectronico:email,
          noIdentificacion:id,
          nombreUsuario:nombre,
          password:clave,
          telefono:phone
        }),
      })         
      .then(function(response) {        
        if(response.ok) {
          response.json().then((item) =>{                             
            pushInitalLoginScreen();
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


    render(){

        return(
            <View style={styles.container}>

                      
                <Text  style={styles.titleLabel}>
                        Registro de usuarios
                </Text>
                <AccounterInput value={this.state.nombre} onChangeText={(value) => this.setState({nombre:value})} placeholder="Nombre"/>
                <AccounterInput value={this.state.identificacion} onChangeText={(value) => this.setState({identificacion:value})} placeholder="Identificación"/>
                <AccounterInput value={this.state.ciudad} onChangeText={(value) => this.setState({ciudad:value})} placeholder="Ciudad"/>
                <AccounterInput value={this.state.telefono} onChangeText={(value) => this.setState({telefono:value})} placeholder="Teléfono"/>
                <AccounterInput value={this.state.mail} onChangeText={(value) => this.setState({mail:value})} placeholder="nombre@ejemplo.com"/>                                            
                <AccounterInput value={this.state.password} onChangeText={(value) => this.setState({password:value})} textContentType={'password'} secureTextEntry={true} placeholder="Contraseña"/> 
                <AccounterInput value={this.state.confirmarPassword} onChangeText={(value) => this.setState({confirmarPassword:value})} textContentType={'password'} secureTextEntry={true} placeholder="Confirmar contraseña"/>      
              
                <View style={styles.rememberRow}>
                  <View style={styles.documentsRowCheck}>
                        <CheckBox
                            center                            
                            textStyle={styles.rememberText}
                            containerStyle={styles.checkContainerStyle}
                            checked={this.state.terminosCondiciones}                                                        
                            iconType='material'
                            checkedIcon='check-box'
                            uncheckedIcon='check-box-outline-blank'
                            checkedColor='#4DA72C'
                            onPress={() => this.setState({terminosCondiciones: !this.state.terminosCondiciones})}
                            />   
                  </View> 

                  <View style={styles.documentsRowCheck}>
                    <Text style={styles.rememberText}>
                            Acepto 
                    </Text>
                    <Text style={styles.underlinelinkText}>
                            {' términos y condiciones'}
                    </Text>
                </View>                            
                </View> 

                <AccounterButton onPress={this.crearUsuarioHandler}>Crear usuario</AccounterButton>

                <View style={styles.documentsRow}>
                    <Text style={styles.rememberText}>
                            Si ya tienes cuenta haz clic 
                    </Text>
                    <Text style={styles.underlinelinkText}>
                            {' aquí para ingresar'}
                    </Text>
                </View>                                       

               <Image style={styles.image} source={AppImages.logoImage} resizeMode="contain"/>
                 
               
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
        );

        
    }

}

const styles=StyleSheet.create({
    container: {          
        flexDirection: "column",          
        backgroundColor: '#1E1E1E', 
        alignItems: "center", 
        width:"100%",
        height:"100%"             
      }, 
      submitbutton:{
          width:"100%"
      }, 
      image: {
        height: "7%",
      },
      titleLabel: {
        color:"#FFFFFF", 
        fontSize:20, 
        fontFamily: "Roboto", 
        marginBottom:12,
        marginTop:15
      },
      rememberRow: {        
        flexDirection:"row",
        height:40,
        justifyContent: "center", 
        alignItems:"center", 
        padding:0, 
        marginTop:0,        
        width:"100%",
        // borderWidth: 1,
        // borderColor:"red"
      },
      documentsRow: {        
        flexDirection:"row",        
        justifyContent: "center", 
        alignItems:"flex-start", 
        padding:0,         
        width:"100%"
      },
      documentsRowCheck: {        
        flexDirection:"row",        
        justifyContent: "center", 
        alignItems:"flex-start", 
        padding:0  
      },
      underlinelinkText:{
        fontSize:13, 
        fontFamily: "Roboto",
        textDecorationLine: 'underline',
        color:"#FFB900" 
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
      checkContainerStyle:{
        justifyContent:"center",
        backgroundColor: 'transparent', 
        borderWidth: 0,
        borderColor:"transparent",
        height:45, 
        padding:0,
        // borderWidth: 1,
        // borderColor:"blue"
      },
      buttonStyle: {
        flex:1,
        flexDirection:"row"
      },
      iconStyle:{
        backgroundColor: '#FFFFFF', 
        color:"#329130"
      }
});

export default RegistroScreen;