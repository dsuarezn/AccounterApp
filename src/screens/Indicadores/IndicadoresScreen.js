import React, { Component } from 'react';
import AccounterLabel from '../../components/UI/AccounterLabel/AccounterLabel';

import { Navigation } from 'react-native-navigation';
import IndicadoresSectionList from '../../components/UI/IndicadoresSectionList/IndicadoresSectionList';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import { Container, Header, Content, Accordion } from "native-base";

const dataArray = [
    { key:"01", title: "IVA", desc: "", data: [{itemDesc:"", value:"19%"}] },
    { key:"02", title: "RETEIVA", desc: "", data: [{itemDesc:"", value:"15%"}] },
    { key:"03", title: "Impuesto de Renta Personas Jurídicas", desc: "(Articulo 240 del E.T. modificado por articulo 77, ley de financiamiento)", data: [{itemDesc:"2019", value:"33%"},{itemDesc:"2018", value:"33%"}] },
    { key:"04", title: "Sanción Mínima", desc: "(Articulo 639 del E.T.)", data: [{itemDesc:"2019", value:"$343.000"}] },
    { key:"05", title: "UVT", desc: "(Resolución 000056 del 2018)", data: [{itemDesc:"2019", value:"$34.270"},{itemDesc:"2018", value:"$33.156"},{itemDesc:"2017", value:"$31.859"},{itemDesc:"2016", value:"$29.753"},{itemDesc:"2015", value:"$28.279"}] },
    { key:"06", title: "Impuesto al patrimonio - naturales", desc: "(Articulo 296-2 del E.T.)", data: [{itemDesc:"2019 a 2021", value:"1%"}] }
  ];

class IndicadoresScreen extends Component{

    constructor(props){
        super(props);
        Navigation.events().bindComponent(this);
    }

    navigationButtonPressed({ buttonId }) {
        console.log(buttonId+" pressed");
    }

    render(){

        return(
            <ScrollView>
             <IndicadoresSectionList dataArray={dataArray}/>  
            </ScrollView>
        );

    }



} 

export default IndicadoresScreen;