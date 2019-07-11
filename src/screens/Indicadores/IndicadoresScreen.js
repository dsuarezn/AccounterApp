import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import IndicadoresSectionTab from '../../components/UI/IndicadoresSectionList/IndicadoresSectionTab';
import {ScrollView} from 'react-native';
import { connect } from 'react-redux';
import CommonScreenComponent from "../../components/UI/CommonScreen/CommonScreen";

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