import React, { Component } from "react";
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, TouchableHighlight ,FlatList, Platform, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';




class NovedadesList extends Component{


    onOptionSelect(value) {
             
    }

    constructor(props){
        super(props);        
    }   
    
    
    
    render () {

        

      return (
        <View style={styles.flatListContainer}>
            
            <FlatList             
                keyExtractor={(item, index) => index.toString()}   
                data={this.props.dataArray} renderItem={
                ({item}) =>                
                    
                        <View /*onPress={this.props.onPressHandler}*/ style={styles.parentItemListContainer}>
                            <View style={styles.titleContainer}>
                                <View style={styles.innerContainer}>
                                    <Text style={styles.titleStyle}>{item.tituloNotf}</Text>
                                    <Icon name="share" size={20} color="#4DA72C" />
                                </View>                                                                                                                   
                            </View>
                            {
                                item.tipoRecursoMultimedia==='imagen' && item.recursoMultimedia!==null && item.rutaRecMultimedia!==null
                                ?                                
                                    <View style={styles.mediaContainer}>
                                        <Image style={styles.image} source={{uri: item.recursoMultimedia}} resizeMode="stretch"></Image>                                                                           
                                    </View>
                                :                                 
                                null                               
                            }  
                            {
                                item.tipoRecursoMultimedia==='imagen' && item.recursoMultimedia===null
                                ?
                                <View style={styles.emptyContainer}>
                                    <ActivityIndicator size="large" color="#7C7C7C" />                                                                                                             
                                </View>
                                :
                                null
                            }
                            <View style={styles.textContainer}>
                                <View style={styles.innerContainer}>
                                    <Text style={styles.listItemTextOwner}>
                                        {item.descNotificacion}                
                                    </Text>  
                                </View>                                            
                            </View>
                        </View>                                                           
                }/>                            
        </View>

      )
    }


}


const styles=StyleSheet.create({

    flatListContainer:{          
        width:"100%",
        // borderWidth: 1,
        // borderColor:"green"     
    },
    parentItemListContainer:{  
        flexDirection:'column',          
        width:"100%",
        // borderWidth: 1,
        // borderColor:"blue",
        padding:0

    },
    itemListContainer:{  
        flexDirection:'row',  
        alignItems: "center",              
        justifyContent: "center",        
        width:"100%"

    },
    image: {
        width: Dimensions.get('window').width * 1,
        height: Dimensions.get('window').height * 0.35,                
    },
    listItemTextOwner:{   
        color: "gray",      
        fontSize:15     
    },
    mediaContainer:{
        width: Dimensions.get('window').width * 1,
        height: Dimensions.get('window').height * 0.35, 
        backgroundColor: "#E5E6E7"     
    },
    emptyContainer:{
        width: Dimensions.get('window').width * 1,
        height: Dimensions.get('window').height * 0.35, 
        backgroundColor: "#E5E6E7",
        flexDirection: "row",
        alignContent:"center",
        justifyContent:"center"     
    },
    textContainer:{           
        // borderWidth: 1,
        // borderColor:"red"
        width:"100%",                
        alignItems:"center",
        backgroundColor:"#FFFFFF",
        // borderWidth: 1,
        // borderColor:"yellow",
        paddingLeft:8,
        paddingRight:8,
        paddingBottom:15,
        paddingTop:10
    },
    innerContainer:{           
        width:"92%",
        justifyContent:"space-between", 
        flexDirection:"row",
        // borderWidth: 1,
        // borderColor:"orange",
        alignItems:"center"   
    },
    titleContainer:{           
        width:"100%",                
        alignItems:"center",
        backgroundColor:"#F2F2F2",
        // borderWidth: 1,
        // borderColor:"red",
        padding:8
    },
    titleStyle:{
        fontSize:20,
        color:"#606060"
    }
    
    
});

export default NovedadesList;
