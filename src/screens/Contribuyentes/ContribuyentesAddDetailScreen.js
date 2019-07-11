import React, { Component } from 'react';
import VencimientoSelectableButton from '../../components/UI/VencimientoSelectableButton/VencimientoSelectableButton';
import { Navigation } from 'react-native-navigation';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AccounterButton from '../../components/UI/AccounterButton/AccounterButton';
import { connect } from 'react-redux';

import { addContribuyente } from '../../store/actions/actions';

import {bindComponentNavigation} from '../../navigation/Navigation';

import CommonScreenComponent from "../../components/UI/CommonScreen/CommonScreen";


const vencimientos = [
    { key:"01", title: "Enero 2019", data: [{itemDesc:"Seguridad Social", value:"11"}, {itemDesc:"Retención en la fuente", value:"24"}, {itemDesc:"Iva Bimestral", value:"24"}] },
    { key:"02", title: "Febrero 2019",  data: [{itemDesc:"Retención en la fuente", value:"11"}] },
    { key:"03", title: "Marzo 2019", data: [{itemDesc:"Seguridad Social", value:"11"},{itemDesc:"Retención en la fuente", value:"21"},{itemDesc:"Autoretención", value:"21"}] },    
  ];

const listaBotones=['IG','RF','IC','BM','CT','CO','EG','PE','AJ','SP','ESAL','PN','PJ','GC','AX','PT'];



// const listaBotones=['ESAL'];

class ContribuyentesAddDetailScreen extends CommonScreenComponent{
        
    state = {
        currentClientName : 'Accounter S.A.S',          
        currentClientType:'natural', 
        currentId:"80829676",
        currentCity:"Bogotá",
        currentContribType:"Grán contribuyente"
    };

    constructor(props){
        super(props);                      
    }

    navigationButtonPressed({ buttonId }) {
        if(buttonId==='leftMenu'){
            Navigation.dismissModal(this.props.componentId);
        }
    }

    editButtonHandler = () => {
        
    }

    listaBotonesSeleccionados=[];

    seleccionarElemento = (buttonInfo) => {        
        if(this.listaBotonesSeleccionados.indexOf(buttonInfo) == -1){
            this.listaBotonesSeleccionados.push(buttonInfo);
        } else {
            this.listaBotonesSeleccionados.pop(buttonInfo);
        }
    }

    guardarCambiosYCerrarModales = () => {  
        cliente = {
            nit:this.props.nit,
            razonSocial:this.props.razonSocial,  
            ciudad:this.props.ciudad,
            granContribuyente:this.props.granContribuyente,
            tipoCliente:this.props.tipoCliente,
            vencimientos:this.listaBotonesSeleccionados 
        };
        this.props.setVencContribData(cliente);  
        Navigation.dismissAllModals();
    }

    render(){        
        buttonsListArr = listaBotones.map((buttonInfo,i) => <VencimientoSelectableButton onPress={() => this.seleccionarElemento(buttonInfo)} selectable={true} width={75} height={75} key={i} code={buttonInfo}/>);

        return(
            <View style={styles.generalContainer}>
                {
                    this.state.currentClientType==='natural'
                    ?
                    <View style={styles.titleContainer}>
                        <Icon name="account-circle" size={25} color="#2E8228" />
                        <Text style={styles.titleStyle}>{'  '}{this.state.currentClientName}</Text>                        
                    </View>
                    :
                    <View style={styles.titleContainer}>
                        <Icon name="work" size={25} color="#6F7F89" />
                        <Text style={styles.titleStyle}>{'  '}{this.state.currentClientName}</Text>
                    </View>
                }

                <View style={styles.userInfoContainerParent}>
                    <View style={styles.userInfoContainer}>
                        <Text style={styles.userInfoHeaderStyle}>
                            Identificación
                        </Text>
                        <Text>
                            {this.props.nit}
                        </Text>
                        <View style={{marginBottom:5,marginTop:10, height: 1, width: "100%", backgroundColor: "#CED0CE"}} />                    
                        <Text style={styles.userInfoHeaderStyle}>
                            Ciudad
                        </Text>
                        <Text>
                            {this.props.ciudad}
                        </Text>
                        <View style={{marginBottom:5,marginTop:10, height: 1, width: "100%", backgroundColor: "#CED0CE"}} />
                        <Text style={styles.userInfoHeaderStyle}>
                            Tipo de contribuyente
                        </Text>
                        <Text>
                            {this.props.granContribuyente==true?'Gran contribuyente':'Contribuyente normal'}
                        </Text>
                    </View>  
                </View>       
                <View style={styles.vencButtonContainerParent}>
                    <View style={styles.tittleContainerControl}>
                        <Text style={styles.titleButtonSectionStyle}>Asignar Vencimientos</Text>
                        <Text style={styles.userInfoHeaderStyleForButtons}>Por favor, selecciona los vencimientos que deseas asignar a tu cliente:</Text>
                    </View>
                    <ScrollView style={styles.scrollButtonContainer}>
                        <View style={styles.vencButtonContainer}>
                            {buttonsListArr}                                                 
                        </View>  
                    </ScrollView>                    
                </View>
                
                <AccounterButton colorStyle={'green'} textStyle={'littleWhite'} buttonStyle={'roundGreenStyle'} icon={'save'} onPress={this.guardarCambiosYCerrarModales}>Guardar vencimientos asignados</AccounterButton>

            </View>
        );

    }



} 


const styles=StyleSheet.create({
    titleButtonSectionStyle:{               
        fontFamily:"Roboto", 
        fontSize:20 , 
        color:"#2E8228"                   
    },
    titleStyle:{               
        fontFamily:"Roboto", 
        fontSize:24 , 
        color:"#2E8228"                   
    },
    generalContainer:{     
        flexDirection:"column", 
        alignItems:"center", 
        justifyContent:"flex-start", 
        backgroundColor:"#F2F2F2",
        width:"100%",
        // borderWidth: 1, 
        // borderColor: "black",
    },
    titleContainer:{     
        flexDirection:"row", 
        alignItems:"baseline", 
        justifyContent:"flex-start", 
        backgroundColor:"#F2F2F2",
        height:"8%", 
        paddingTop:5,        
        // borderWidth: 1, 
        // borderColor: "red",
        width:"90%" 
    },
    userInfoContainerParent:{     
        backgroundColor:"#FFFFFF", 
        width:"100%", 
        alignItems:"center",
        paddingTop:10,
        paddingBottom:10,
        // borderWidth: 1, 
        // borderColor: "yellow",
    },
    userInfoContainer:{              
        width:"90%",
        // borderWidth: 1, 
        // borderColor: "red"
    },
    userInfoHeaderStyle:{
        fontSize:10, 
        fontWeight: "bold"
    },
    userInfoHeaderStyleForButtons:{
        fontSize:11
    },
    vencButtonContainerParent:{        
        width:"100%", 
        alignItems:"center", 
        paddingTop:10,
        // borderWidth: 1, 
        // borderColor: "green"
    },

    scrollButtonContainer:{               
        flexDirection: 'column',
        width:"90%", 
        height:"48%",
        // borderWidth: 1, 
        // borderColor: "blue",
        marginTop:7,
        marginBottom:5
    },

    vencButtonContainer:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start', 
        width:"100%",        
        justifyContent:"flex-start",
        paddingTop:3,  
        paddingBottom:5,        

        // flex:1,       
        // width:"90%",
        // height:"50%",         
        // flexDirection: 'column',
        // borderWidth: 1, 
        // borderColor: "red"
    },
    tittleContainerControl:{        
        alignItems: 'center', 
        width:"90%"
        
    }
});



const mapStateToProps =(state)=>{
    return {
        nit:state.contribuyentes.tempCliente.nit,
        razonSocial:state.contribuyentes.tempCliente.razonSocial,  
        ciudad:state.contribuyentes.tempCliente.ciudad,
        granContribuyente:state.contribuyentes.tempCliente.granContribuyente,
        tipoCliente:state.contribuyentes.tempCliente.clientType     
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        //setVencContribData:(cliente) => dispatch({type : 'ADD_CONTRIBUYENTE', contribuyente: cliente})
        setVencContribData:(cliente) => dispatch(addContribuyente(cliente))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (ContribuyentesAddDetailScreen);