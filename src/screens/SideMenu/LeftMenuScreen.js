import React, { Component } from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {bindComponentNavigation, pushLoginScreen} from '../../navigation/Navigation';
import { connect } from 'react-redux';

import { removeAuthData } from '../../store/actions/actions';
import TouchableScale from 'react-native-touchable-scale';

class LeftMenuScreen extends Component{
    constructor(props){
        super(props);        
        bindComponentNavigation(this);
    }

    navigationButtonPressed({ buttonId }) {
        console.log(buttonId+" pressed");
    }

    
    
    logoutApp = () => {
        this.props.removeAuthenticationData();
        pushLoginScreen();        
    }

    render(){

        return(     
            <View style={styles.container}>
                <View style={styles.titleItemContainer}>
                    <View style={styles.closeInnerContainer}>
                        <Icon name="close" size={23} color="#6F7F89" /> 
                    </View>
                    <View style={styles.tittleInnerContainer}> 
                        <Text style={styles.tittleLabelStyle}>Menú</Text>
                    </View>    
                </View>                
                <View style={styles.itemContainer}> 
                    <View style={styles.itemInnerContainer}>                   
                        <Icon style={styles.iconStyle} name="person" size={32} color="#FFFFFF" />  
                        <Text style={styles.labelStyle}>Perfil</Text>
                    </View>    
                </View>             
                <View style={{height: 1, width: "95%", backgroundColor: "#CED0CE"}} />

                <View style={styles.itemContainer}>
                    <View style={styles.itemInnerContainer}> 
                        <Icon name="shopping-cart" size={32} color="#6F7F89" />
                        <Text style={styles.labelStyle}>Tienda</Text>   
                    </View> 
                </View>
                <View style={{height: 1, width: "95%", backgroundColor: "#CED0CE"}} />
                <View style={styles.itemContainer}>
                    <View style={styles.itemInnerContainer}> 
                        <Icon name="star-border" size={32} color="#6F7F89" />
                        <Text style={styles.labelStyle}>Califícanos</Text>    
                    </View>
                </View>
                <View style={{height: 1, width: "95%", backgroundColor: "#CED0CE"}} />
                <View style={styles.itemContainer}>
                    <View style={styles.itemInnerContainer}>
                        <Icon name="thumb-up" size={32} color="#6F7F89" />
                        <Text style={styles.labelStyle}>Siguenos en Facebook</Text>    
                    </View>
                </View> 
                <View style={{height: 1, width: "95%", backgroundColor: "#CED0CE"}} />  
                <View style={styles.itemContainer}>
                    <View style={styles.itemInnerContainer}>                   
                        <Image style={styles.image} source={require('../../assets/images/whatsap-icon/whatsap-icon-menu.png')} resizeMode="contain"/>
                        <Text style={styles.labelStyle}>Contáctanos</Text>
                    </View>    
                </View>  
                <View style={{height: 1, width: "95%", backgroundColor: "#CED0CE"}} /> 
                <View style={styles.itemContainer}>  
                    <View style={styles.itemInnerContainer}>                 
                        <Image style={styles.image} source={require('../../assets/images/sobre-accounter-icon/sobre-accounter-icon.png')} resizeMode="contain"/>
                        <Text style={styles.labelStyle}>Sobre Accounter</Text>    
                    </View>
                </View> 
                <View style={{height: 1, width: "95%", backgroundColor: "#CED0CE"}} />
                <View style={styles.itemContainer}>
                    <View style={styles.itemInnerContainer}>
                        <Icon name="verified-user" size={32} color="#6F7F89" />
                        <Text style={styles.labelStyle}>Política de privacidad</Text>    
                    </View>
                </View>  
                {/* <View style={styles.exitContainerData}>
                    <View style={styles.exitCardContainer}>
                        <Icon name="exit-to-app" size={25} color="#E23F3F" />  
                        <Text style={styles.exitTextStyle}>Cerrar sesión</Text>                        
                    </View>
                </View>       */}
                <TouchableScale onPress={this.logoutApp} style={styles.exitContainerData}>
                    <View style={styles.exitCardContainer}>
                        <Icon name="exit-to-app" size={25} color="#E23F3F" />  
                        <Text style={styles.exitTextStyle}>Cerrar sesión</Text>  
                    </View>
                </TouchableScale>       
            </View>
        );

    }

}

const styles=StyleSheet.create({
    exitTextStyle:{
        fontSize:15,
        paddingLeft:10
    },
    exitContainerData:{        
        alignItems:"center",
        justifyContent:"flex-end",
        width:"100%",
        height:"22%"
    },
    exitCardContainer:{              
        flexDirection:"row",
        width:"85%", 
        alignItems:"baseline"     
        // borderWidth: 1, 
        // borderColor: "red"
    },
    iconStyle:{
        backgroundColor:"#6F7F89",
        borderRadius: 3
    },
    tittleLabelStyle:{       
        fontSize:25,
        color:"#424242"
    },
    labelStyle:{       
        fontSize:17,
        color:"#6F81AA", 
        marginLeft:10     
    },
    itemInnerContainer:{
        width:"95%",
        flexDirection:"row", 
        alignItems:"center"
        // borderWidth: 1,
        // borderColor:"blue"   
    },
    closeInnerContainer:{
        width:"100%",
        flexDirection:"column", 
        justifyContent:"flex-end",
        alignItems:"flex-end",
        // borderWidth: 1,
        // borderColor:"red"   
    },
    tittleInnerContainer:{
        width:"85%",
        flexDirection:"column", 
        alignItems:"flex-start",
        // borderWidth: 1,
        // borderColor:"blue"   
    },
    titleItemContainer:{              
        backgroundColor:"#F2F2F2", 
        width:"100%",       
        flexDirection:"column",
        justifyContent:"flex-end",
        alignItems:"flex-end",
        padding:10,       
        paddingTop:12
     //    borderWidth: 1,
     //    borderColor:"red"          
     }, 
    itemContainer:{              
       backgroundColor:"#F2F2F2", 
       width:"100%",       
       flexDirection:"row",
       justifyContent:"flex-end",
       padding:10,       
       paddingTop:12
    //    borderWidth: 1,
    //    borderColor:"red"          
    },   
    container: {
        flex: 1,        
        backgroundColor: "#F2F2F2",
        alignItems:"flex-end"
        // borderWidth: 1,
        // borderColor:"black"
                 
    }, 
    usercard:{
        backgroundColor:"#a8b7b0"
    },
    image: {
        marginLeft:-5,
        width:40,
        height:40,
        padding:0,
        // borderWidth: 1,
        // borderColor:"red" 
    }

});


const mapStateToProps =(state)=>{
    return {                      
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        // setTempContribData:(client) => dispatch({type : 'SET_CLIENT_DATA', clientData: client})
        removeAuthenticationData:() => dispatch(removeAuthData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LeftMenuScreen);
