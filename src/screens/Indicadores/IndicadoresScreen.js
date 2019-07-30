import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import IndicadoresSectionTab from '../../components/UI/IndicadoresSectionList/IndicadoresSectionTab';
import {ScrollView} from 'react-native';
import { connect } from 'react-redux';
import CommonScreenComponent from "../../components/UI/CommonScreen/CommonScreen";

dataArrayComplete = [
    {
       key: "Tributarios",
       nombreGrupo:"Tributarios",
       contenido:[{ key:"01", title: "IVA", desc: "", data: [{itemDesc:"", value:"19%"}] },
       { key:"02", title: "RETEIVA", desc: "", data: [{itemDesc:"", value:"15%"}] },
       { key:"03", title: "Impuesto de Renta Personas Jurídicas", desc: "(Articulo 240 del E.T. modificado por articulo 77, ley de financiamiento)", data: [{itemDesc:"2019", value:"33%"},{itemDesc:"2018", value:"33%"}] },
       { key:"04", title: "Sanción Mínima", desc: "(Articulo 639 del E.T.)", data: [{itemDesc:"2019", value:"$343.000"}] },
       { key:"05", title: "UVT", desc: "(Resolución 000056 del 2018)", data: [{itemDesc:"2019", value:"$34.270"},{itemDesc:"2018", value:"$33.156"},{itemDesc:"2017", value:"$31.859"},{itemDesc:"2016", value:"$29.753"},{itemDesc:"2015", value:"$28.279"}] },
       { key:"06", title: "Impuesto al patrimonio - naturales", desc: "(Articulo 296-2 del E.T.)", data: [{itemDesc:"2019 a 2021", value:"1%"}] }]
   },
   {
       key: "Laborales",
       nombreGrupo:"Laborales",
       contenido:[{ key:"01", title: "IVALABORAL", desc: "", data: [{itemDesc:"", value:"20%"}] },
           { key:"02", title: "RETEIVA", desc: "", data: [{itemDesc:"", value:"15%"}] },
           { key:"03", title: "Impuesto de Renta Personas Naturales", desc: "(Articulo 240 del E.T. modificado por articulo 77, ley de financiamiento)", data: [{itemDesc:"2019", value:"33%"},{itemDesc:"2018", value:"33%"}] },
           { key:"04", title: "Salario Mínimp", desc: "(Articulo 639 del E.T.)", data: [{itemDesc:"2019", value:"$343.000"}] },
           { key:"05", title: "UVT", desc: "(Resolución 000056 del 2018)", data: [{itemDesc:"2019", value:"$34.270"},{itemDesc:"2018", value:"$33.156"},{itemDesc:"2017", value:"$31.859"},{itemDesc:"2016", value:"$29.753"},{itemDesc:"2015", value:"$28.279"}] },
           { key:"06", title: "Impuesto al patrimonio - naturales", desc: "(Articulo 296-2 del E.T.)", data: [{itemDesc:"2019 a 2021", value:"1%"}] }]
   }
   ,
   {
       key: "Otros",
       nombreGrupo:"Otros",
       contenido:[{ key:"01", title: "IVA", desc: "", data: [{itemDesc:"", value:"19%"}] },
           { key:"02", title: "RETEIVA", desc: "", data: [{itemDesc:"", value:"15%"}] },            
           { key:"06", title: "Impuesto al patrimonio - naturales", desc: "(Articulo 296-2 del E.T.)", data: [{itemDesc:"2019 a 2021", value:"1%"}] }]
   }
];

class IndicadoresScreen extends CommonScreenComponent{

    constructor(props){
        super(props);                
    }


    render(){

        return(
            <ScrollView>
             <IndicadoresSectionTab dataSet={this.props.dataArrayComplete}/>  
            </ScrollView>
        );

    }



} 


const mapDispatchToProps =(dispatch)=>{
    return {
        
    }
}

const mapStateToProps =(state)=>{
    return {
        dataArrayComplete:state.indicadores.indicadores  
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps) (IndicadoresScreen);