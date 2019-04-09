import React, { Component } from 'react';
import AccounterUserCard from '../../components/UI/AccounterUserCard/AccounterUserCard';
import AccounterLabel from '../../components/UI/AccounterLabel/AccounterLabel';
import AccounterInput from '../../components/UI/AccounterInput/AccounterInput';
import VencimientoContribSectionList from '../../components/UI/VencimientoContribSectionList/VencimientoContribSectionList';
import {iconsMap} from '../../components/UI/Icons/AppIcons';
import Icon from "react-native-vector-icons/FontAwesome5";
import { Navigation } from 'react-native-navigation';
import {View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity} from 'react-native';

import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';


const vencimientos = [
    { key:"01", title: "Enero 2019", data: [{itemDesc:"Seguridad Social", value:"11"}, {itemDesc:"Retención en la fuente", value:"24"}, {itemDesc:"Iva Bimestral", value:"24"}] },
    { key:"02", title: "Febrero 2019",  data: [{itemDesc:"Retención en la fuente", value:"11"}] },
    { key:"03", title: "Marzo 2019", data: [{itemDesc:"Seguridad Social", value:"11"},{itemDesc:"Retención en la fuente", value:"21"},{itemDesc:"Autoretención", value:"21"}] },    
  ];

class ContribuyentesAddScreen extends Component{
    
    state = {switchValue:false}

    constructor(props){
        super(props);   
        Navigation.events().bindComponent(this);     
    }
    
    navigationButtonPressed({ buttonId }) {
        if(buttonId==='leftMenu'){
            Navigation.dismissModal(this.props.componentId);
        }
    }

    guardarInformacionHandler = () => {
        Navigation.dismissModal(this.props.componentId);
    }

    toggleSwitch = (value) => {
        this.setState({switchValue: value})
    }

    render(){
        return(
            <View style={styles.container}>
                <AccounterLabel>Información General</AccounterLabel>
                <AccounterInput style={styles.inputTextStyle} placeholder="Nombre o razón social"/> 
                <AccounterInput style={styles.inputTextStyle} placeholder="Cédula o NIT sin digito de verificación"/>
                <AccounterInput style={styles.inputTextStyle} placeholder="Télefono Movil"/>
                <AccounterInput style={styles.inputTextStyle} placeholder="Ciudad"/> 
                <AccounterLabel style={styles.accounterLabelStyle}>Tipo de contribuyente</AccounterLabel>
                <View style={styles.buttonContainer}>
                    <Button icon={<Icon name="user-tie" size={15} color="#4388D6" /> } title="  Persona Natural" type="outline" /> 
                    <Button icon={<Icon name="building" size={15} color="#4388D6" /> } title="  Persona Juridica" type="outline" />
                </View>
                <View style={styles.switchContainer}>
                    <Switch  style={styles.switchStyle} onValueChange = {this.toggleSwitch} value = {this.state.switchValue}/>
                    <Text style={styles.inputTextStyle}>Gran Contribuyente</Text>
                </View>
                    
                <View style={styles.submitContainer}>
                    <Button TouchableComponent={TouchableOpacity} onPress={this.guardarInformacionHandler} title="Guardar" raised={true}/>
                </View>
            </View>
        );
    }
} 

const styles=StyleSheet.create({
    buttonContainer:{       
        flexDirection: "row",
        justifyContent: "space-between",  
        width:"95%",
        marginTop:5,
        padding:5            
    },
    switchContainer:{       
        flexDirection: "row",
        justifyContent: "space-between",  
        width:"70%",      
        marginTop:10
    },
    container: {
        padding: 26,
        backgroundColor: "#F1F3F0",
        alignItems: "center", 
        width:"100%",
        height:"100%"             
    }, 
    inputTextStyle:{       
        fontSize:21   
    }, 
    accounterLabelStyle:{       
        marginTop:20   
    }, 
    switchStyle:{       
        transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]
    }, 
    submitContainer:{       
        marginTop:30,
        width:"90%"     
    }
    

});



export default ContribuyentesAddScreen;