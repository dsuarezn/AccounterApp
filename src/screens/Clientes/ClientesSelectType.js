import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import {AppImages} from '../../components/UI/Images/AppImages';
import { setClientType,setEditionMode, selectClient } from '../../store/actions/actions';

import { connect } from 'react-redux';

import {agregarContribuyente} from '../../navigation/Navigation';


import CommonScreenComponent from "../../components/UI/CommonScreen/CommonScreen";

class ClientesSelectType extends CommonScreenComponent{
    state = {
        selectedClientType : ''
    };

    constructor(props){
        super(props);   
    }
    
    navigationButtonPressed({ buttonId }) {
        if(buttonId==='leftMenu'){
            Navigation.dismissModal(this.props.componentId);
        }
    }

    agregarClienteNaturalHandler = () => {        
        let clientType="Natural";
        this.props.setTempContribType(clientType); 
        this.props.setEditMode("add");  
        this.props.selectClient(null);             
        agregarContribuyente("add");  
    }



    agregarClienteJuridicoHandler = () => {        
        let clientType="Juridico";
        this.props.setTempContribType(clientType);
        this.props.setEditMode("add");    
        this.props.selectClient(null);    
        agregarContribuyente("add");  
    }


   

    
    renderSeparator = () => {
        return (
          <View
            style={{
              height: "100%",
              width: 1,
              backgroundColor: "#CED0CE"
            }}
          />
        );
      };

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <View style={styles.titleContainerStyle}>
                        <Text style={styles.titleStyle}>Agregar Cliente</Text>
                        <Text style={styles.subTitleStyle}>Selecciona el tipo de cliente que deseas crear</Text>
                    </View>
                    <View style={styles.componentContainer}>
                        
                        <TouchableHighlight underlayColor="#ADE1F5" style={styles.itemsContainer}  onPress={this.agregarClienteNaturalHandler}>
                            <View style={styles.viewContainer}>
                                <View style={styles.imageStyleContainer}>
                                    <Image style={styles.imageStyle} source={AppImages.crearClienteNatural} resizeMode="contain"/>                                                            
                                </View>
                                <Text style={styles.itemTextStyle}>Crear cliente</Text>
                                <Text style={styles.itemTextStyle}>Persona Natural</Text>
                            </View>
                        </TouchableHighlight>                           
                        <View style={{marginLeft:5, marginTop:30, height: "90%", width: 1, backgroundColor: "#AFAFAF"}}/>
                        <View style={{marginRight:5,marginTop:30, height: "90%", width: 1, backgroundColor: "#FFFFFF"}}/>
                        <TouchableHighlight underlayColor="#ADE1F5" style={styles.itemsContainer}  onPress={this.agregarClienteJuridicoHandler}> 
                            <View style={styles.viewContainer}>  
                                <View style={styles.imageStyleContainer}>             
                                    <Image style={styles.imageStyle} source={AppImages.crearClienteJuridico} resizeMode="contain"/>                                                                                            
                                </View>
                                <Text style={styles.itemTextStyle}>Crear cliente</Text>
                                <Text style={styles.itemTextStyle}>Persona Jurídica</Text>
                            </View>
                        </TouchableHighlight>
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
    contentContainer:{     
        backgroundColor:"#F2F2F2", 
        // borderWidth:1,
        // borderColor:"orange", 
        width:"100%",
        height:"80%" 
         
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
        flexDirection: "row", 
        alignItems:"center", 
        justifyContent:"center",
        // borderWidth:1,
        // borderColor:"red", 
        height:"65%",
        width:"100%",
        marginTop:10        
    },
    itemsContainer:{    
        flexDirection: "column", 
        alignItems:"center",
        // borderWidth:1,
        // borderColor:"green", 
        padding:15, 
        width:"43%",  
        height:"80%",
        borderRadius: 7  

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
    }
});



const mapDispatchToProps =(dispatch)=>{
    return {
        // setTempContribType:(type) => dispatch({type : 'SET_CLIENT_TYPE', clientType: type})
        setTempContribType:(type) => dispatch(setClientType(type)),
        setEditMode:(mode) => dispatch(setEditionMode(mode)),
        selectClient:(client) => dispatch(selectClient(client))
        
    }
}

const mapStateToProps =(state)=>{
    return {
        
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ClientesSelectType);