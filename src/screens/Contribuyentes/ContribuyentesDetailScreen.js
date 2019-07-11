import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import {View, ScrollView} from 'react-native';

import {bindComponentNavigation} from '../../navigation/Navigation';

const vencimientos = [
    { key:"01", title: "Enero 2019", data: [{itemDesc:"Seguridad Social", value:"11"}, {itemDesc:"Retención en la fuente", value:"24"}, {itemDesc:"Iva Bimestral", value:"24"}] },
    { key:"02", title: "Febrero 2019",  data: [{itemDesc:"Retención en la fuente", value:"11"}] },
    { key:"03", title: "Marzo 2019", data: [{itemDesc:"Seguridad Social", value:"11"},{itemDesc:"Retención en la fuente", value:"21"},{itemDesc:"Autoretención", value:"21"}] },    
  ];


import CommonScreenComponent from "../../components/UI/CommonScreen/CommonScreen";

class ContribuyentesDetailScreen extends CommonScreenComponent{
    
    constructor(props){
        super(props);                    
    }
    navigationButtonPressed({ buttonId }) {
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
                <ScrollView>
                                                
                </ScrollView>
                
            </View>
        );

    }



} 


export default ContribuyentesDetailScreen;