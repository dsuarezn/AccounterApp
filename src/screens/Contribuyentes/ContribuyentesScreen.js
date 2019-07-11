import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import ContribuyentesList from '../../components/UI/ContribuyentesList/ContribuyentesList';
import { connect } from 'react-redux';
import CommonScreenComponent from "../../components/UI/CommonScreen/CommonScreen";


import { agregarContribuyente, editarContribuyente } from "../../navigation/Navigation";

class ContribuyentesScreen extends CommonScreenComponent{
    
    constructor(props){
        super(props);                
    }

    addClientesHandler = () => {        
        agregarContribuyente();
    }

    clientesListHandler = () => {
        editarContribuyente();
    }


    render(){
        return(
            <ScrollView>
                 <ContribuyentesList onPressHandler={this.clientesListHandler} onAddClientHandler={this.addClientesHandler}  dataArray={this.props.participantesList}></ContribuyentesList>                              
            </ScrollView>
        );

    }

} 

const mapStateToProps =(state)=>{
  return {
      participantesList : state.contribuyentes.contribuyentes
  }
}

export default connect(mapStateToProps)(ContribuyentesScreen);
