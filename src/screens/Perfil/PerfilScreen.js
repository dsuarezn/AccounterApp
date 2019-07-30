import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Text, View, StyleSheet, ScrollView} from "react-native";
import AccounterButton from '../../components/UI/AccounterButton/AccounterButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CommonScreenComponent from "../../components/UI/CommonScreen/CommonScreen";
import TouchableScale from 'react-native-touchable-scale';
import {pushLoginScreen} from '../../navigation/Navigation';
import AccounterInput from '../../components/UI/AccounterInput/AccounterInput';
import {  setProfileData } from '../../store/actions/actions';
import { connect } from 'react-redux';

class PerfilScreen extends CommonScreenComponent{


    loginHandler = () => {
        
    }

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
       
    constructor(props){
        super(props);        
    }

    componentWillMount(){        
        
        

        let cliente=this.props.selectClient;
        this.setState({uid: cliente.uuid});
        this.setState({currentId: cliente.nit});
        this.setState({currentClientName: cliente.razonSocial});
        this.setState({currentContribType: cliente.granContribuyente});  
        this.setState({currentCity: cliente.ciudad});
        this.setState({currentClientType: cliente.tipoCliente});   
        this.setState({listaBotonesSeleccionados: cliente.vencimientos});              
        

        

                
        if(this.props.edicion!==null){
            if(this.props.edicion==="add" || this.props.edicion==="edit"){
                this.modoEdicion=true;
            }            
        } 
    }

    navigationButtonPressed({ buttonId }) {
        console.log(buttonId+" pressed");
    }

    logoutApp = () => {
        this.props.removeAuthenticationData();
        pushLoginScreen();        
    }

    editarMode = () => {
        var value=true;
        this.setState({modoEdicion:value});
    }

    guardarInfo = () => {
        registroApiCall();
        
    }



    updateRegistroApiCall(){
        console.log("intenta actualziar perfil");    
        var nombre=this.state.nombre;
        var clave=this.state.password;
        var id = this.state.identificacion;
        var city = this.state.ciudad;
        var phone = this.state.telefono;
        var email = this.state.mail;

        var datosPerfil={
            ciudad:city,
            correoElectronico:email,
            noIdentificacion:id,
            nombreUsuario:nombre,
            password:clave,
            telefono:phone
        }
        var value=false;
        // let this.setState({modoEdicion:value});
        let setEstado=this.setState;
        let setProfileFunction=this.props.setDatosPerfil; 
        let secData=this.props.securityData; 
        fetch(environment.apiUrl+'/registrar', {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': secData.taccmobile
          },
          body: JSON.stringify({
            uuid:secData.uuid,          
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
                setProfileFunction(datosPerfil);
                setEstado({modoEdicion:value});
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
           
            <View style={styles.userInfoContainerParent} contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.userCardParentContainer}>
                    <View style={styles.userCardContainer}>
                        <Icon style={styles.iconStyle} name="person" size={45} color="#FFFFFF" />  
                        <View style={styles.userCardTextContainer}>
                            <Text style={styles.titleTextStyle}>Perfil</Text>
                            <Text style={styles.subTextStyle}>Cambiar foto de perfil</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.userInfoContainerData}>
                    <View style={styles.userInfoContainer}>
                        <Text style={styles.userInfoHeaderStyle}>
                            Nombre
                        </Text>
                        <Text style={styles.userInfoDetailStyle}>
                            {this.state.nombreUsuario}
                        </Text>
                        <View style={{marginBottom:5,marginTop:10, height: 1, width: "100%", backgroundColor: "#CED0CE"}} />                    
                        <Text style={styles.userInfoHeaderStyle}>
                            Razón social
                        </Text>

                        {
                            this.state.modoEdicion==true
                            ?
                            <AccounterInput style={styles.accounterInputStyle} placeholder="Ciudad" value={this.state.razonSocial} onChangeText={(value) => this.setState({razonSocial:value})}/>                            
                            :
                            <Text style={styles.userInfoDetailStyle}>
                                {this.state.razonSocial}
                            </Text>
                        } 

                        {
                            this.state.modoEdicion==true
                            ?
                            null
                            :
                            <View style={{marginBottom:5,marginTop:10, height: 1, width: "100%", backgroundColor: "#CED0CE"}} />
                        } 

                        
                        
                        <Text style={styles.userInfoHeaderStyle}>
                            Ciudad
                        </Text>                        
                        {
                            this.state.modoEdicion==true
                            ?
                            <AccounterInput style={styles.accounterInputStyle} placeholder="Ciudad" value={this.state.ciudad} onChangeText={(value) => this.setState({celular:value})}/>                            
                            :
                            <Text style={styles.userInfoDetailStyle}>
                                {this.state.ciudad}
                            </Text>
                        } 
                        
                        {
                            this.state.modoEdicion==true
                            ?
                            null
                            :
                            <View style={{marginBottom:5,marginTop:10, height: 1, width: "100%", backgroundColor: "#CED0CE"}} />
                        } 
                        
                        <Text style={styles.userInfoHeaderStyle}>
                            Celular
                        </Text>
                        

                        {
                            this.state.modoEdicion==true
                            ?
                            <AccounterInput style={styles.accounterInputStyle} placeholder="Correo electrónico" value={this.state.celular} onChangeText={(value) => this.setState({celular:value})}/>                            
                            :
                            <Text style={styles.userInfoDetailStyle}>
                                {this.state.celular}
                            </Text>
                        } 

                        {
                            this.state.modoEdicion==true
                            ?
                            null
                            :
                            <View style={{marginBottom:5,marginTop:10, height: 1, width: "100%", backgroundColor: "#CED0CE"}} />
                        } 

                        <Text style={styles.userInfoHeaderStyle}>
                            Correo electrónico
                        </Text>
                        {/* {
                            this.state.modoEdicion==true
                            ?
                            <AccounterInput style={styles.accounterInputStyle} placeholder="Correo electrónico" value={this.state.correoe} onChangeText={(value) => this.setState({correoe:value})}/>                            
                            :
                            <Text style={styles.userInfoDetailStyle}>
                                {this.state.correoe}
                            </Text>
                        }   */}
                         <Text style={styles.userInfoDetailStyle}>
                                {this.state.correoe}
                        </Text>                       
                        
                        {
                            this.state.modoEdicion==true
                            ?
                            null
                            :
                            <View style={{marginBottom:5,marginTop:10, height: 1, width: "100%", backgroundColor: "#CED0CE"}} />
                        } 

                        <Text style={styles.userInfoHeaderStyle}>
                            Contraseña
                        </Text>

                        {
                            this.state.modoEdicion==true
                            ?
                            <AccounterInput style={styles.accounterInputStyle} value={this.state.password} onChangeText={(value) => this.setState({password:value})} textContentType={'password'} secureTextEntry={true} placeholder="Contraseña"/> 
                            :
                            <Text style={styles.userInfoDetailStyle}>
                                {this.state.password}
                            </Text>
                        }   
                        
                        {
                            this.state.modoEdicion==true
                            ?
                            null
                            :
                            <View style={{marginBottom:5,marginTop:10, height: 1, width: "100%", backgroundColor: "#CED0CE"}} />
                        } 
                        
                        <Text style={styles.userInfoHeaderStyle}>
                            N° de clientes
                        </Text>
                        <Text style={styles.userInfoDetailStyle}>
                            {this.state.noClientes}
                        </Text>
                        <View style={{marginBottom:5,marginTop:10, height: 1, width: "100%", backgroundColor: "#CED0CE"}} />
                    </View>  
                </View>
                <View style={styles.checkContainerData}>   
                    <View style={styles.checkContainer}>  
                        <View style={styles.checkInnerContainer}>
                        {
                            this.state.modoEdicion==true
                            ?
                            <AccounterButton buttonStyle={'lightGreenStyle'} onPress={this.guardarInfo}>Guardar</AccounterButton>
                            :
                            <AccounterButton buttonStyle={'lightGreenStyle'} onPress={this.editarMode}>Editar</AccounterButton>
                        }
                            
                        </View>
                    </View>
                </View>
                <TouchableScale onPress={this.logoutApp} style={styles.exitContainerData}>
                    <View style={styles.exitCardContainer}>
                        <Icon style={styles.exitIconStyle} name="exit-to-app" size={25} color="#E23F3F" />  
                        <Text style={styles.exitTextStyle}>Cerrar sesión</Text>                        
                    </View>
                </TouchableScale>
            </View> 
        );

    }



} 

const styles=StyleSheet.create({
    accounterInputStyle:{              
        width:"100%",
        height:33
        // borderWidth: 1, 
        // borderColor: "red"
      },
    userInfoDetailStyle:{
        fontSize:17
    },
    userInfoHeaderStyle:{
        fontSize:10, 
        fontWeight: "bold"
    },   
    userInfoContainerParent:{     
        backgroundColor:"#FFFFFF", 
        width:"100%",         
        paddingTop:10,        
        paddingBottom:10,
        // borderWidth: 1, 
        // borderColor: "green",
        alignItems:"center"
    },
    userCardParentContainer:{              
        width:"85%",
        paddingTop:10,
        paddingBottom:15,
        backgroundColor:"#FFFFFF"
        // borderWidth: 1, 
        // borderColor: "red"
    },
    userCardTextContainer:{              
        flexDirection:"column", 
        paddingLeft:10      
        // borderWidth: 1, 
        // borderColor: "red"
    },
    exitIconStyle:{
        backgroundColor:"#FFFFFF"  
            
    },
    iconStyle:{
        backgroundColor:"#6F7F89",
        borderRadius: 5
    },
    userCardContainer:{              
        flexDirection:"row"       
        // borderWidth: 1, 
        // borderColor: "red"
    },
    exitCardContainer:{              
        flexDirection:"row",
        width:"85%", 
        alignItems:"baseline"     
        // borderWidth: 1, 
        // borderColor: "red"
    },
    exitTextStyle:{
        fontSize:17,
        paddingLeft:10
    },
    titleTextStyle:{
        fontSize:20
    },
    subTextStyle:{
        fontSize:10,
        color:"#66A743"
    },
    userInfoContainerData:{              
        width:"100%",
        backgroundColor:"#F2F2F2",
        alignItems:"center"
    },
    userInfoContainer:{              
        width:"85%",
        paddingTop:10
        // borderWidth: 1, 
        // borderColor: "red"
    },
    exitContainerData:{
        backgroundColor:"#FFFFFF", 
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        height:"10%"
        // borderWidth: 1, 
        // borderColor: "blue"
    },
    checkContainerData:{
        backgroundColor:"#F2F2F2", 
        alignItems:"center",
        width:"100%",
        paddingTop:7,
        paddingBottom:7
        // borderWidth:1,
        // borderColor:"red"
    },
	checkContainer:{
        width:"85%",
        // borderWidth:1,
        // borderColor:"red", 
        alignItems:"flex-start", 
        padding:0        
      },      
      checkInnerContainer:{
        width:"50%",
        padding:0,
        // borderWidth:1,
        // borderColor:"blue", 
        alignItems:"flex-start",    
      }	 
 });



 const mapStateToProps =(state)=>{
    return {        
        profileData:state.auth.profileData,
        securityData:state.auth.securityData
    }
  }
  
  const mapDispatchToProps =(dispatch)=>{
      return {        
          setDatosPerfil:(profiledata) => dispatch(setProfileData(profiledata))  
             
      }
    }
  
  export default connect(mapStateToProps,mapDispatchToProps)(PerfilScreen);
