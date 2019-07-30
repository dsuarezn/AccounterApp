import React, { Component } from 'react';
import {ScrollView,StyleSheet} from 'react-native';
import NovedadesList from '../../components/UI/NovedadesList/NovedadesList';
import { connect } from 'react-redux';

import CommonScreenComponent from "../../components/UI/CommonScreen/CommonScreen";

class NovedadesScreen extends CommonScreenComponent{
    
    constructor(props){
        super(props);
        
    }


    render(){
        return(
            <ScrollView>
                <NovedadesList  dataArray={this.props.notificaciones}></NovedadesList>                              
            </ScrollView>
        );
    }
} 


const styles=StyleSheet.create({
    scrollContainer:{
        height:200
    }
});


const mapStateToProps =(state)=>{
    return {
        notificaciones:state.notificaciones.notificaciones               
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NovedadesScreen);
