import React, { Component } from 'react';
import AccounterInput from '../../components/UI/AccounterInput/AccounterInput';
import {iconsMap} from '../../components/UI/Icons/AppIcons';
import {AppImages} from '../../components/UI/Images/AppImages';
import { Navigation } from 'react-native-navigation';
import {View, Text, StyleSheet, Image, } from 'react-native';
import { CheckBox, Button, Divider } from 'react-native-elements';
import { connect } from 'react-redux';
import AccounterButton from '../../components/UI/AccounterButton/AccounterButton';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { setClientData } from '../../store/actions/actions';

import {agregarContribuyente} from '../../navigation/Navigation';
import CommonScreenComponent from "../../components/UI/CommonScreen/CommonScreen";


class ClientesAddScreen extends CommonScreenComponent{
    state = {        
        razonSocial:null,
        ciudad:null,
        nit:null,
        granContribuyente:null
    };

    constructor(props){
        super(props);           
    }
    
    navigationButtonPressed({ buttonId }) {
        if(buttonId==='leftMenu'){
            Navigation.dismissModal(this.props.componentId);
        }
    }

    guardarInformacionHandler = () => {
        var client={
            razonSocial:this.state.razonSocial,
            ciudad:this.state.ciudad,
            nit:this.state.nit,
            granContribuyente:this.state.granContribuyente,
            clientType:this.props.tipoCliente
        };
        this.props.setTempContribData(client);        
        agregarContribuyente("add");        
    }

    
  

    


    toggleSwitch = (value) => {
        this.setState({switchValue: value})
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <View style={styles.titleContainerStyle}>
                        <Text style={styles.titleStyle}>Agregar Cliente</Text>
                        {
                            this.props.tipoCliente==='Natural'
                            ?
                            <View style={styles.subtitleContainer}>
                                <Icon name="account-circle" size={25} color="#6F7F89" />
                                <Text style={styles.subTitleStyle}>{'  '}Persona Natural</Text>
                            </View>
                            :
                            <View style={styles.subtitleContainer}>
                                <Icon name="work" size={25} color="#6F7F89" />
                                <Text style={styles.subTitleStyle}>{'  '}Persona Jurídica</Text>
                            </View>
                        }
                    </View>
                    <View style={{marginTop:15, height: 1, width: "85%", backgroundColor: "#CED0CE"}} />
                    <View style={styles.componentContainer}>
                        
                        <AccounterInput placeholder="Razón social" value={this.state.razonSocial} onChangeText={(value) => this.setState({razonSocial:value})}/>
                        <AccounterInput placeholder="NIT sin digito de verificación" value={this.state.nit} onChangeText={(value) => this.setState({nit:value})}/>
                        <AccounterInput placeholder="Ciudad" value={this.state.ciudad} onChangeText={(value) => this.setState({ciudad:value})}/> 
                            <View style={styles.checkContainer}>  
                                <View style={styles.checkInnerContainer}>
                                    <CheckBox
                                        left
                                        title='Gran contribuyente'
                                        textStyle={styles.rememberText}
                                        containerStyle={styles.checkContainerStyle}
                                        checked={this.state.granContribuyente}                            
                                        iconRight   
                                        iconType='material'                                     
                                        checkedIcon='check-box'
                                        uncheckedIcon='check-box-outline-blank'
                                        checkedColor='#4DA72C'
                                        onPress={() => this.setState({granContribuyente: !this.state.granContribuyente})}
                                        />  
                                </View>
                            </View>
                            <View style={styles.checkContainer}>  
                                <View style={styles.checkInnerContainer}>
                                    <AccounterButton  onPress={this.guardarInformacionHandler}>Crear</AccounterButton>
                                </View>
                            </View>
                        {/* <View style={{marginLeft:5, marginTop:30, height: "90%", width: 1, backgroundColor: "#AFAFAF"}}/>
                        <View style={{marginRight:5, height: "90%", width: 1, backgroundColor: "#FFFFFF"}}/> */}
                       
                    </View>
                    
                </View>        
                <View style={styles.logoContainer}>
                    <Image style={styles.imageLogo} source={AppImages.logoImageColor} resizeMode="contain"/>
                </View>
            </View>
        );
    }
} 



const styles=StyleSheet.create({
    subtitleContainer:{     
        flexDirection:"row", 
        alignItems:"flex-end", 
        justifyContent:"center"    
    },
    contentContainer:{     
        backgroundColor:"#F2F2F2", 
        // borderWidth:1,
        // borderColor:"orange", 
        width:"100%",
        height:"80%",
        alignItems:"center"         
    },
    logoContainer:{    
        flexDirection: "row", 
        alignItems:"center", 
        justifyContent:"center", 
        backgroundColor:"#FFFFFF", 
        width:"100%",
        height:"20%"
    },
    componentContainer:{    
        flexDirection: "column", 
        alignItems:"center", 
        justifyContent:"flex-start",
        // borderWidth:1,
        // borderColor:"red", 
        height:"65%",
        width:"100%",
        marginTop:5        
    },
    itemsContainer:{    
        flexDirection: "column", 
        alignItems:"center",
        // borderWidth:1,
        // borderColor:"green", 
        padding:15, 
        width:"43%",  
        height:"80%",
        borderRadius: 15  

    },    
    viewContainer:{    
        height:"100%",
        width:"100%",   
        alignItems:"center" 
    },  

    imageStyleContainer:{  
        flex:1,          
        // borderWidth:1,
        // borderColor:"blue", 
        width:"100%",
        height:"50%"
    },

    imageStyle:{    
        // borderWidth:1,
        // borderColor:"red", 
        width: "100%",
        height: "100%"
    },
  
    itemTextStyle:{               
        fontSize:12 , 
        color:"#6F7F89",
        marginLeft: -5           
    },
    subTitleStyle:{     
        fontFamily:"Roboto",           
        fontSize:15, 
        color:"#6F7F89", 
        marginTop:15          
    },    
    titleStyle:{               
        fontFamily:"Roboto", 
        fontSize:20 , 
        color:"#2E8228"                   
    },   
    container: {
        width:"100%",
        height:"100%"             
    },
    imageLogo: {
        width: "60%",
        height: "60%",
        // borderWidth:1,
        // borderColor:"red", 
    },
    titleContainerStyle:{               
        alignItems:"center",
        marginTop:30        
    },
     
    buttonStyle: {
        flex:1,
        flexDirection:"row"
    },
    checkContainerStyle:{
        backgroundColor: 'transparent',         
        borderColor:"transparent",
        height:45, 
        padding:0,
        // borderWidth:1,
        // borderColor:"red"          
      }, 
      rememberText:{
        fontSize:13, 
        fontFamily: "Roboto-Bold",
        color:'#A8A8A8',
        marginLeft:-10           
      },
      checkContainer:{
        width:"90%",
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
        tipoCliente:state.contribuyentes.tempCliente.clientType                
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        // setTempContribData:(client) => dispatch({type : 'SET_CLIENT_DATA', clientData: client})
        setTempContribData:(client) => dispatch(setClientData(client))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ClientesAddScreen);