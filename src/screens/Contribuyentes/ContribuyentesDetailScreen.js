import React, { Component } from 'react';
import AccounterUserCard from '../../components/UI/AccounterUserCard/AccounterUserCard';
import AccounterLabel from '../../components/UI/AccounterLabel/AccounterLabel';
import VencimientoContribSectionList from '../../components/UI/VencimientoContribSectionList/VencimientoContribSectionList';
import {iconsMap} from '../../components/UI/Icons/AppIcons';
import { Navigation } from 'react-native-navigation';
import {View, Text, StyleSheet, ScrollView} from 'react-native';


const vencimientos = [
    { key:"01", title: "Enero 2019", data: [{itemDesc:"Seguridad Social", value:"11"}, {itemDesc:"Retención en la fuente", value:"24"}, {itemDesc:"Iva Bimestral", value:"24"}] },
    { key:"02", title: "Febrero 2019",  data: [{itemDesc:"Retención en la fuente", value:"11"}] },
    { key:"03", title: "Marzo 2019", data: [{itemDesc:"Seguridad Social", value:"11"},{itemDesc:"Retención en la fuente", value:"21"},{itemDesc:"Autoretención", value:"21"}] },    
  ];


class ContribuyentesDetailScreen extends Component{
    
    constructor(props){
        super(props);   
        Navigation.events().bindComponent(this);     
    }
    navigationButtonPressed({ buttonId }) {
        console.log(buttonId+" pressed");

        if(buttonId==='leftMenu'){
            Navigation.dismissModal(this.props.componentId);
        }
    }

    editButtonHandler = () => {
        console.log("hola");
    }

    render(){
        return(
            <View>
                <AccounterUserCard showCardButton={true} onButtonPressHandler={this.editButtonHandler}></AccounterUserCard>   
                <AccounterLabel>Vencimientos</AccounterLabel>           
                <ScrollView>
                    <VencimientoContribSectionList dataArray={vencimientos}></VencimientoContribSectionList>                              
                </ScrollView>
                
            </View>
        );

    }



} 


export default ContribuyentesDetailScreen;