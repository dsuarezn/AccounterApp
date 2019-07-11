import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, StyleSheet } from 'react-native';

import OctIcon from 'react-native-vector-icons/AntDesign';

import VencimientoSelectableButton from '../../components/UI/VencimientoSelectableButton/VencimientoSelectableButton';
import { ScrollView } from 'react-native-gesture-handler';
import CommonScreenComponent from "../../components/UI/CommonScreen/CommonScreen";

const dataArray=[
    { noVencimientos:"3",venceEn:"2", levelStyle:"red", vencimientos : [{ key:"01", vencimiento: "Impuesto renta y complementarios", owner: "Jenny Ortiz"  },{ key:"02", vencimiento: "Impuesto industria y comercio", owner: "Catalina Suarez"  },{ key:"03", vencimiento: "Declaración de renta", owner: "Tobias Suarez" }]},
    { noVencimientos:"3",venceEn:"10", levelStyle:"orange", vencimientos : [{ key:"01", vencimiento: "Impuesto renta y complementarios", owner: "Jenny Ortiz"  },{ key:"02", vencimiento: "Impuesto industria y comercio", owner: "Catalina Suarez"  },{ key:"03", vencimiento: "Declaración de renta", owner: "Tobias Suarez" }]},
    { noVencimientos:"3",venceEn:"30", levelStyle:"green", vencimientos : [{ key:"01", vencimiento: "Impuesto renta y complementarios", owner: "Jenny Ortiz"  },{ key:"02", vencimiento: "Impuesto industria y comercio", owner: "Catalina Suarez"  },{ key:"03", vencimiento: "Declaración de renta", owner: "Tobias Suarez" }]},
]

const listaBotones=['IG','RF','IC','PE','AJ','SP','ESAL','PN'];

class VencimientosScreen extends CommonScreenComponent{

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

    render(){

        buttonsListArr = listaBotones.map((buttonInfo,i) => <VencimientoSelectableButton  textMode={"onlyCode"} selectable={false} width={24} height={24} key={i} code={buttonInfo}/>);


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
                            {this.state.currentId}
                        </Text>
                        <View style={{marginBottom:5,marginTop:10, height: 1, width: "100%", backgroundColor: "#CED0CE"}} />                    
                        <Text style={styles.userInfoHeaderStyle}>
                            Ciudad
                        </Text>
                        <Text>
                            {this.state.currentCity}
                        </Text>
                        <View style={{marginBottom:5,marginTop:10, height: 1, width: "100%", backgroundColor: "#CED0CE"}} />
                        <Text style={styles.userInfoHeaderStyle}>
                            Tipo de contribuyente
                        </Text>
                        <Text>
                            {this.state.currentContribType}
                        </Text>
                    </View>  
                </View> 
                <ScrollView style={{width:"100%", height:"60%"}}>      
                    <View style={styles.alertaGeneralContainer}>
                        <View style={styles.alertasTitleInfoContainer}>
                            <Text style={styles.monthAlertStyle}>
                                Abril 2019
                            </Text>
                        </View>
                        <View style={styles.alertasInfoContainer}>
                            <View style={styles.alertasFirstColumnInfoContainer}>
                                <Icon name="notifications" size={22} color="#2E8228" />
                                <Text style={styles.numberTextStyle}>27</Text>
                            </View>    
                            <View style={{marginLeft:5, marginTop:0, height: "100%", width: 1, backgroundColor: "#AFAFAF"}}/>
                            <View style={{marginRight:5,marginTop:0, height: "100%", width: 1, backgroundColor: "#FFFFFF"}}/>                    
                            <View style={styles.alertaDetailContainer}>
                                <View style={styles.rowButtonContainer}>
                                    <Text>Vence en 3 días</Text>
                                </View>
                                <View style={styles.rowButtonContainer}>                          
                                    <View  style={styles.vencButtonContainer}>
                                        {buttonsListArr}
                                    </View>
                                    <View style={styles.iconArrowContainer}>
                                        <OctIcon style={{marginBottom:5}} name="caretdown" size={17} color="#4DA72C"></OctIcon>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>


                    <View style={styles.alertaGeneralContainer}>
                        <View style={styles.alertasTitleInfoContainer}>
                            <Text style={styles.monthAlertStyle}>
                                Abril 2019
                            </Text>
                        </View>
                        <View style={styles.alertasInfoContainer}>
                            <View style={styles.alertasFirstColumnInfoContainer}>
                                <Icon name="notifications" size={22} color="#2E8228" />
                                <Text style={styles.numberTextStyle}>27</Text>
                            </View>    
                            <View style={{marginLeft:5, marginTop:0, height: "100%", width: 1, backgroundColor: "#AFAFAF"}}/>
                            <View style={{marginRight:5,marginTop:0, height: "100%", width: 1, backgroundColor: "#FFFFFF"}}/>                    
                            <View style={styles.alertaDetailContainer}>
                                <View style={styles.rowButtonContainer}>
                                    <Text>Vence en 3 días</Text>
                                </View>
                                <View style={styles.rowButtonContainer}>                          
                                    <View  style={styles.vencButtonContainer}>
                                        {buttonsListArr}
                                    </View>
                                    <View style={styles.iconArrowContainer}>
                                        <OctIcon style={{marginBottom:5}} name="caretdown" size={17} color="#4DA72C"></OctIcon>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.alertaGeneralContainer}>
                        <View style={styles.alertasTitleInfoContainer}>
                            <Text style={styles.monthAlertStyle}>
                                Abril 2019
                            </Text>
                        </View>
                        <View style={styles.alertasInfoContainer}>
                            <View style={styles.alertasFirstColumnInfoContainer}>
                                <Icon name="notifications" size={22} color="#2E8228" />
                                <Text style={styles.numberTextStyle}>27</Text>
                            </View>    
                            <View style={{marginLeft:5, marginTop:0, height: "100%", width: 1, backgroundColor: "#AFAFAF"}}/>
                            <View style={{marginRight:5,marginTop:0, height: "100%", width: 1, backgroundColor: "#FFFFFF"}}/>                    
                            <View style={styles.alertaDetailContainer}>
                                <View style={styles.rowButtonContainer}>
                                    <Text>Vence en 3 días</Text>
                                </View>
                                <View style={styles.rowButtonContainer}>                          
                                    <View  style={styles.vencButtonContainer}>
                                        {buttonsListArr}
                                    </View>
                                    <View style={styles.iconArrowContainer}>
                                        <OctIcon style={{marginBottom:5}} name="caretdown" size={17} color="#4DA72C"></OctIcon>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.alertaGeneralContainer}>
                        <View style={styles.alertasTitleInfoContainer}>
                            <Text style={styles.monthAlertStyle}>
                                Abril 2019
                            </Text>
                        </View>
                        <View style={styles.alertasInfoContainer}>
                            <View style={styles.alertasFirstColumnInfoContainer}>
                                <Icon name="notifications" size={22} color="#2E8228" />
                                <Text style={styles.numberTextStyle}>27</Text>
                            </View>    
                            <View style={{marginLeft:5, marginTop:0, height: "100%", width: 1, backgroundColor: "#AFAFAF"}}/>
                            <View style={{marginRight:5,marginTop:0, height: "100%", width: 1, backgroundColor: "#FFFFFF"}}/>                    
                            <View style={styles.alertaDetailContainer}>
                                <View style={styles.rowButtonContainer}>
                                    <Text>Vence en 3 días</Text>
                                </View>
                                <View style={styles.rowButtonContainer}>                          
                                    <View  style={styles.vencButtonContainer}>
                                        {buttonsListArr}
                                    </View>
                                    <View style={styles.iconArrowContainer}>
                                        <OctIcon style={{marginBottom:5}} name="caretdown" size={17} color="#4DA72C"></OctIcon>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );

    }



} 


const styles=StyleSheet.create({
    generalContainer:{     
        flexDirection:"column", 
        alignItems:"flex-start", 
        justifyContent:"flex-start", 
        backgroundColor:"#F2F2F2",
        width:"100%",
        // borderWidth: 1, 
        // borderColor: "blue",
    },
    titleContainer:{     
        flexDirection:"row", 
        alignItems:"baseline", 
        justifyContent:"flex-start", 
        backgroundColor:"#F2F2F2",
        height:"9%", 
        paddingTop:8,        
        // borderWidth: 1, 
        // borderColor: "red",
        width:"100%",
        paddingLeft:15 
    },
    titleStyle:{               
        fontFamily:"Roboto", 
        fontSize:24 , 
        color:"#2E8228"                   
    },

    numberTextStyle:{               
        fontFamily:"Roboto", 
        fontSize:25 , 
        color:"#2E8228",
        fontWeight:"bold"                  
    },
    userInfoContainerParent:{     
        backgroundColor:"#FFFFFF", 
        width:"100%", 
        alignItems:"center",
        
        paddingTop:10,
        paddingBottom:10,
        // borderWidth: 1, 
        // borderColor: "orange"
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
    alertaDetailContainer:{
        flexDirection: 'column',
        // borderWidth:1,
        // borderColor:"black",
        width:"80%",
        padding:5 
    },
    monthAlertStyle:{
        fontSize:15,
        fontWeight:"bold"
    },
    alertaGeneralContainer:{
        flexDirection: 'column',
        alignItems: 'center', 
        width:"100%",        
        justifyContent:"flex-start",
        // borderWidth:1,
        // borderColor:"black"  
    },
    alertasInfoContainer:{        
        flexDirection: 'row',
        alignItems: 'center', 
        width:"100%",        
        justifyContent:"flex-start",
        // borderWidth:1,
        // borderColor:"red", 
        padding:5,
        backgroundColor:"#FFFFFF"    
    },   
    alertasFirstColumnInfoContainer:{        
        flexDirection: 'row',        
        // borderWidth:1,
        // borderColor:"green",
        alignItems:"center",
        padding:5   
    }, 
    alertasTitleInfoContainer:{
        backgroundColor:"#F5F5F5",
        width:"80%",
        padding:5
    },
   
    vencButtonContainer:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start', 
        width:"100%",        
        justifyContent:"flex-start",
        // borderWidth:1,
        // borderColor:"black"       
    },
    rowButtonContainer:{
        flexDirection: 'row',
        paddingBottom:2
        // borderWidth:1,
        // borderColor:"black"       
    }
});


export default VencimientosScreen;