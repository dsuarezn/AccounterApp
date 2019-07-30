import React, { Component } from 'react';
import VencimientoSelectableButton from '../../components/UI/VencimientoSelectableButton/VencimientoSelectableButton';
import { Navigation } from 'react-native-navigation';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AccounterButton from '../../components/UI/AccounterButton/AccounterButton';
import { connect } from 'react-redux';
import { addCliente, updateCliente } from '../../store/actions/actions';
import CommonScreenComponent from "../../components/UI/CommonScreen/CommonScreen";
import AccounterInput from '../../components/UI/AccounterInput/AccounterInput';
import UUIDGenerator from 'react-native-uuid-generator';
import { CheckBox, Button, Divider } from 'react-native-elements';




const listaBotones=['IG','RF','IC','BM','CT','CO','EG','PE','AJ','SP','ESAL','PN','PJ','GC','AX','PT'];



// const listaBotones=['ESAL'];

class ClientesEditDetailScreen extends CommonScreenComponent{

    state = {
        uid:null,
        currentId:null,
        currentClientName : null,          
        currentContribType:null,
        currentCity:null,        
        currentClientType:null, 
        listaBotonesSeleccionados:[]
    };

    constructor(props){
        super(props);                      
    }

    navigationButtonPressed({ buttonId }) {
        if(buttonId==='leftMenu'){
            Navigation.dismissModal(this.props.componentId);
        }
    }
    

    seleccionarElemento = (buttonInfo) => {   
        if(this.state.listaBotonesSeleccionados.indexOf(buttonInfo) == -1){
            this.state.listaBotonesSeleccionados.push(buttonInfo);
        } else {
            listaModificada = this.state.listaBotonesSeleccionados.filter(item => item !== buttonInfo);
            this.setState({listaBotonesSeleccionados: listaModificada}); 
        }
        
    }

    heightVar = "36%";
    modoEdicion = false;
    componentWillMount(){        
        if(this.props.edicion==="edit"){
            let cliente=this.props.selectClient;
            this.setState({uid: cliente.uuid});
            this.setState({currentId: cliente.nit});
            this.setState({currentClientName: cliente.razonSocial});
            this.setState({currentContribType: cliente.granContribuyente});  
            this.setState({currentCity: cliente.ciudad});
            this.setState({currentClientType: cliente.tipoCliente});   
            this.setState({listaBotonesSeleccionados: cliente.vencimientos});              
        }
        else if(this.props.edicion==="add"){
            this.heightVar = "43%";
            console.log("on add:"+this.props.tipoCliente);
            this.setState({currentClientType: this.props.tipoCliente});               
        }
                
        if(this.props.edicion!==null){
            if(this.props.edicion==="add" || this.props.edicion==="edit"){
                this.modoEdicion=true;
            }            
        } 
    }
    
    estaCodigoSeleccionado(codigo){        
        return this.state.listaBotonesSeleccionados.includes(codigo);
    }
    
    guardarCambiosYCerrarModales = () => {  

        if(this.props.edicion==="edit"){
            cliente = {
                uuid:this.state.uid,
                nit:this.state.currentId,
                razonSocial:this.state.currentClientName,  
                ciudad:this.state.currentCity,
                granContribuyente:this.state.currentContribType,
                tipoCliente:this.state.currentClientType,
                vencimientos:this.state.listaBotonesSeleccionados 
            };
            console.log("cliente al actualizar");
            console.log(cliente);
            this.props.updateVencContribData(cliente);  
            Navigation.dismissAllModals();
        }
        else if(this.props.edicion==="add"){
            UUIDGenerator.getRandomUUID((uid) => {                        
                cliente = {
                    uuid:uid,
                    nit:this.state.currentId,
                    razonSocial:this.state.currentClientName,  
                    ciudad:this.state.currentCity,
                    granContribuyente:this.state.currentContribType,
                    tipoCliente:this.state.currentClientType,
                    vencimientos:this.state.listaBotonesSeleccionados 
                };
                console.log("cliente al guardar");
                console.log(cliente);
                this.props.setVencContribData(cliente);  
                Navigation.dismissAllModals();
            });           
        }

                       
    }

    render(){                      
        
        buttonsListArr = listaBotones.map((buttonInfo,i) => <VencimientoSelectableButton  selected={this.estaCodigoSeleccionado(buttonInfo)}  onPressButtonHandler={this.seleccionarElemento} selectable={this.modoEdicion} width={75} height={75} key={i} code={buttonInfo}/>);

        return(
            <View style={styles.generalContainer}>
                {
                    this.props.edicion==="edit" ? 
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
                    :
                    null
                }

                <View style={styles.userInfoContainerParent}>
                    <View style={styles.userInfoContainer}>
                        <Text style={styles.userInfoHeaderStyle}>
                            Razón Social
                        </Text>
                        {
                            this.modoEdicion==true
                            ?
                            <AccounterInput style={styles.accounterInputStyle} placeholder="Razón social" value={this.state.currentClientName} onChangeText={(value) => this.setState({currentClientName:value})}/>                            
                            :
                            <Text>
                                {this.state.currentClientName}
                            </Text>
                        }   
                        
                        {
                            this.modoEdicion!=true
                            ?
                            <View style={{marginBottom:5,marginTop:10, height: 1, width: "100%", backgroundColor: "#CED0CE"}} />
                            :
                            null
                        }                                         
                                            
                        
                        <Text style={styles.userInfoHeaderStyle}>
                            Nit
                        </Text>
                        {
                            this.modoEdicion==true
                            ?
                            <AccounterInput style={styles.accounterInputStyle} placeholder="NIT sin digito de verificación" value={this.state.currentId} onChangeText={(value) => this.setState({currentId:value})}/>                            
                            :
                            <Text>
                                {this.state.currentId}
                            </Text>
                        }                                            
                        {
                            this.modoEdicion!=true
                            ?
                            <View style={{marginBottom:5,marginTop:10, height: 1, width: "100%", backgroundColor: "#CED0CE"}} />
                            :
                            null
                        }

                        <Text style={styles.userInfoHeaderStyle}>
                            Ciudad
                        </Text>
                        {
                            this.modoEdicion==true
                            ?
                            <AccounterInput style={styles.accounterInputStyle} placeholder="Ciudad" value={this.state.currentCity} onChangeText={(value) => this.setState({currentCity:value})}/>                             
                            :
                            <Text>
                                {this.state.ciudad}
                            </Text>
                        }
                        {
                            this.modoEdicion!=true
                            ?
                            <View style={{marginBottom:5,marginTop:10, height: 1, width: "100%", backgroundColor: "#CED0CE"}} />
                            :
                            null
                        }
                        
                        <Text style={styles.userInfoHeaderStyle}>
                            Tipo de contribuyente
                        </Text>

                        {
                            this.modoEdicion==true
                            ?
                            <View style={styles.checkContainer}>  
                                <View style={styles.checkInnerContainer}>
                                    <CheckBox
                                        left
                                        title='Gran contribuyente'
                                        textStyle={styles.rememberText}
                                        containerStyle={styles.checkContainerStyle}
                                        checked={this.state.currentContribType}                            
                                        iconRight   
                                        iconType='material'                                     
                                        checkedIcon='check-box'
                                        uncheckedIcon='check-box-outline-blank'
                                        checkedColor='#4DA72C'
                                        onPress={() => this.setState({currentContribType: !this.state.currentContribType})}
                                        />  
                                </View>
                            </View>                           
                            :
                            <Text>
                                {this.state.granContribuyente==true?'Gran contribuyente':'Contribuyente normal'}
                            </Text>
                        }

                        
                    </View>  
                </View>       
                <View style={styles.vencButtonContainerParent}>
                    <View style={styles.tittleContainerControl}>
                        <Text style={styles.titleButtonSectionStyle}>Asignar Vencimientos</Text>
                        <Text style={styles.userInfoHeaderStyleForButtons}>Por favor, selecciona los vencimientos que deseas asignar a tu cliente:</Text>
                    </View>
                    <ScrollView style={[styles.scrollButtonContainer,{height:this.heightVar}]}>
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
        paddingBottom:5
        // borderWidth: 1, 
        // borderColor: "black",
    },
    titleContainer:{     
        flexDirection:"row", 
        alignItems:"baseline", 
        justifyContent:"flex-start", 
        backgroundColor:"#F2F2F2",
        height:"7%", 
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
        paddingBottom:6,
        // borderWidth: 1, 
        // borderColor: "yellow"
    },
    userInfoContainer:{              
        width:"85%",
        // borderWidth: 1, 
        // borderColor: "red"
    },
    userInfoHeaderStyle:{
        fontSize:10, 
        fontWeight: "bold" ,
        marginLeft:-10
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
        
    },
    rememberText:{
        fontSize:13, 
        fontFamily: "Roboto-Bold",
        color:'#A8A8A8',
        marginLeft:-10           
      },
      checkContainer:{
        width:"90%",
        height:35,
        // borderWidth:1,
        // borderColor:"red", 
        alignItems:"flex-start", 
        padding:0        
      },      
      checkInnerContainer:{
        width:"50%",
        height:35,
        padding:0,
        // borderWidth:1,
        // borderColor:"blue", 
        alignItems:"flex-start",    
      },
      checkContainerStyle:{
        backgroundColor: 'transparent',         
        borderColor:"transparent",
        height:30, 
        padding:0,
        // borderWidth:1,
        // borderColor:"orange"          
      },
      accounterInputStyle:{              
        width:"100%",
        height:33
        // borderWidth: 1, 
        // borderColor: "red"
      }
});



const mapStateToProps =(state)=>{
    return {
        selectClient:state.contribuyentes.contribuyenteSeleccionado,
        tipoCliente:state.contribuyentes.tempCliente.clientType
        // edicion:state.contribuyentes.editMode
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {        
        setVencContribData:(cliente) => dispatch(addCliente(cliente)),
        updateVencContribData:(cliente) => dispatch(updateCliente(cliente))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (ClientesEditDetailScreen);