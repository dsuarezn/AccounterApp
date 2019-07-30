import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import ClientesList from '../../components/UI/ClientesList/ClientesList';
import { connect } from 'react-redux';
import CommonScreenComponent from "../../components/UI/CommonScreen/CommonScreen";

import { selectClient, setIndicadoresData, setNovedadesData, removeClient } from '../../store/actions/actions';

import { showTipoContribuyente } from "../../navigation/Navigation";

import { environment } from "../../environment/environment";
import {agregarContribuyente} from '../../navigation/Navigation';

class ClientesScreen extends CommonScreenComponent{
    
    constructor(props){
        super(props);                
    }

    addClientesHandler = () => {        
      showTipoContribuyente();
    }

    editClientesHandler = (itemselected) => {        
      this.props.selectClient(itemselected);              
      agregarContribuyente("edit");
        
    }

    deleteClientesHandler = (clientid) => { 
      console.log(clientid);      
      this.props.eliminarContribuyente(clientid);
    }

    clientesListHandler = (itemselected) => {
        this.props.selectClient(itemselected);
        //editarContribuyente();
    }

   
    updateIndicadoresData(){   
        console.log("entroupdate indicadores");       
        let token=this.props.securityData;   
        let setIndicadoresFunction=this.props.setIndicadoresData;                           
        console.log(token);
        fetch(environment.apiUrl+'/indicadores', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token.taccmobile
        }})         
        .then(function(response) {
          if(response.ok) {
            response.json().then((item) =>{ 
              console.log("estoy en ok update indicadores");
              setIndicadoresFunction(item);
              console.log(item);
            })
          } else {
            response.json().then((item) =>{            
              console.log(JSON.stringify(item));
            })
          }
        })
        .catch((error) => {
          console.log("print on error");
          console.log(error);    
        });
  
      }
  
  
      updateNovedadesData(fecha, keyid){       
        let token=this.props.securityData;     
        let url=environment.apiUrl+'/noticias/'+fecha+'/'+keyid;            
        let setNovedadesFunction=this.props.setNovedadesData;                           
        console.log("url:"+url);        
        fetch(environment.apiUrl+'/noticias/'+fecha+'/'+keyid, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token.taccmobile,
        }})         
        .then(function(response) {
          if(response.ok) {
            response.json().then((item) =>{               
              setNovedadesFunction(item);              
            })
          } else {
            response.json().then((item) =>{            
              console.log(JSON.stringify(item));
            })
          }
        })
        .catch((error) => {
          console.log("print on error");
          console.log(error);    
        });
  
      }


    cargarIndicadoresSiEstanVacios(){
        if(this.props.indicadores.length===0){

        }
    }

    listaParticipantes=[];
    
    filtroDatos(){
      
    }

    componentDidMount(){
        this.updateIndicadoresData();
        var fecha=this.obtenerCurrentDate();
        var resouceid=this.obtenerMaxNovedadesId();
        this.updateNovedadesData(fecha,resouceid);
        this.listaParticipantes=this.props.participantesList;
    }

  

    obtenerCurrentDate(){
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        return year.toString()+this.leftzeroPadding(month.toString())+this.leftzeroPadding(date.toString());
    }

    leftzeroPadding(str){                
        var pad = "00";
        return pad.substring(0, pad.length - str.length) + str;
    }

    obtenerMaxNovedadesId(){    
        if(this.props.notificaciones!==null && this.props.notificaciones!==undefined){
            if(this.props.notificaciones.length>0){
                try {
                    var maximo=-1;
                    var data=this.props.notificaciones;    
                    maximo=data.reduce((max, numero) => {
                        max = (numero.idNotificacion > max) ? numero.idNotificacion : max;
                        return max;
                    },0);  
                    return maximo;  
                } catch (error) {
                    console.log("ERROR: No se pudo obtener el identificador máximo - "+error);        
                }
            }else{
                return 0;
            }
        }
        else{
            return 0;
        }                
    }

    render(){
      this.listaParticipantes=this.props.participantesList;

        return(
            <ScrollView>
                 <ClientesList  onFilterDataHandler={this.filtroDatos} onPressHandler={this.clientesListHandler} onAddClientHandler={this.addClientesHandler} onEditClientHandler={this.editClientesHandler} onDeleteClientHandler={this.deleteClientesHandler} dataArray={this.listaParticipantes}></ClientesList>                              
            </ScrollView>
        );

    }

} 

const mapStateToProps =(state)=>{
  return {
      participantesList : state.contribuyentes.contribuyentes,
      indicadores: state.indicadores.indicadores, 
      vencimientos: state.vencimientos.vencimientos,
      notificaciones: state.notificaciones.notificaciones,
      securityData:state.auth.securityData
  }
}

const mapDispatchToProps =(dispatch)=>{
    return {      
        setIndicadoresData:(inddata) => dispatch(setIndicadoresData(inddata)),
        setNovedadesData:(inddata) => dispatch(setNovedadesData(inddata)), 
        selectClient:(client)=> dispatch(selectClient(client)),
        eliminarContribuyente:(uuid)=> dispatch(removeClient(uuid)),
           
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(ClientesScreen);
