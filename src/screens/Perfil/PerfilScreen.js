import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Text, View, StyleSheet} from "react-native";
import AccounterButton from '../../components/UI/AccounterButton/AccounterButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CommonScreenComponent from "../../components/UI/CommonScreen/CommonScreen";

class PerfilScreen extends CommonScreenComponent{


    loginHandler = () => {
        
    }


    state = {
        nombreUsuario:'Diego Sanchez',          
        razonSocial:'RUT 79884294-9', 
        ciudad:"Bogotá, Colombia",
        celular:"3192730961",
        correoe:"diego.sanchez@accounter.com",
        password:"**********",
        noClientes:"10", 
        mode:'editar'
    };
    
    constructor(props){
        super(props);        
    }

    navigationButtonPressed({ buttonId }) {
        console.log(buttonId+" pressed");
    }

    render(){

        return(
           
            <View style={styles.userInfoContainerParent}>
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
                        <Text style={styles.userInfoDetailStyle}>
                            {this.state.razonSocial}
                        </Text>
                        <View style={{marginBottom:5,marginTop:10, height: 1, width: "100%", backgroundColor: "#CED0CE"}} />
                        <Text style={styles.userInfoHeaderStyle}>
                            Ciudad
                        </Text>
                        <Text style={styles.userInfoDetailStyle}>
                            {this.state.ciudad}
                        </Text>
                        <View style={{marginBottom:5,marginTop:10, height: 1, width: "100%", backgroundColor: "#CED0CE"}} />
                        <Text style={styles.userInfoHeaderStyle}>
                            Celular
                        </Text>
                        <Text style={styles.userInfoDetailStyle}>
                            {this.state.celular}
                        </Text>
                        <View style={{marginBottom:5,marginTop:10, height: 1, width: "100%", backgroundColor: "#CED0CE"}} />
                        <Text style={styles.userInfoHeaderStyle}>
                            Correo electrónico
                        </Text>
                        <Text style={styles.userInfoDetailStyle}>
                            {this.state.correoe}
                        </Text>
                        <View style={{marginBottom:5,marginTop:10, height: 1, width: "100%", backgroundColor: "#CED0CE"}} />
                        <Text style={styles.userInfoHeaderStyle}>
                            Contraseña
                        </Text>
                        <Text style={styles.userInfoDetailStyle}>
                            {this.state.password}
                        </Text>
                        <View style={{marginBottom:5,marginTop:10, height: 1, width: "100%", backgroundColor: "#CED0CE"}} />
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
                            <AccounterButton buttonStyle={'lightGreenStyle'} onPress={this.loginHandler}>Editar</AccounterButton>
                        </View>
                    </View>
                </View>
                <View style={styles.exitContainerData}>
                    <View style={styles.exitCardContainer}>
                        <Icon style={styles.exitIconStyle} name="exit-to-app" size={25} color="#E23F3F" />  
                        <Text style={styles.exitTextStyle}>Cerrar sesión</Text>                        
                    </View>
                </View>
            </View> 
        );

    }



} 

const styles=StyleSheet.create({
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
        alignItems:"center",
        paddingTop:10,
        paddingBottom:10,
        // borderWidth: 1, 
        // borderColor: "yellow",
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
        // borderWidth: 1, 
        // borderColor: "red"
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
        justifyContent:"flex-end",
        width:"100%",
        height:"10%"
    },
    checkContainerData:{
        backgroundColor:"#F2F2F2", 
        alignItems:"center",
        width:"100%",
        paddingTop:7,
        paddingBottom:7
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

export default PerfilScreen;