import React, { Component } from "react";
import {View, Text, StyleSheet, TextInput, Image, Dimensions, TouchableOpacity, FlatList, Platform} from 'react-native';

import TouchableScale from 'react-native-touchable-scale';
import Icon from 'react-native-vector-icons/MaterialIcons';


class ClienteSearchBar extends Component{
    
        state={
            seachFunction:false, 
            
        };


        constructor(props){
            super(props);        
        }

        hideSearchInputHandler = () => {
            this.setState({seachFunction:false});
            this.setFilterWord(null);
        }

        showSearchInputHandler = () => {
            this.setState({seachFunction:true});
        }

        setFilterWord = (value) => {
            console.log("se establece el valor:"+value);
            this.setState({filterWord:value});
            this.props.onChangeFilterText(value);
        }
        
        render(){
           
            return(
                <View style = {styles.wrapper}>
                    {
                        this.state.seachFunction==false
                        ?
                        <TouchableScale  onPress={this.props.onAddClientHandler} activeScale={0.7}>
                            <View>
                                <Icon name="add-circle-outline" size={25} color="#6F7F89" />
                            </View>
                        </TouchableScale>                        
                        :
                        <TouchableScale  onPress={this.hideSearchInputHandler} activeScale={0.7}>
                            <View>
                                <Icon name="arrow-back" size={25} color="#6F7F89" />
                            </View>
                        </TouchableScale>                        
                    }
                     <View style={styles.inputContainer}>
                     {
                         this.state.seachFunction==false
                         ?                        
                            <Text style={styles.labelStyle}>Agregar Cliente Natural o Jurídico</Text>                                            
                        :                        
                            <TextInput onChangeText={(value) => this.setFilterWord(value)} style={styles.input} placeholder="Nombre o identificación"></TextInput>
                     }
                     </View>
                     
                     <TouchableScale  onPress={this.showSearchInputHandler} activeScale={0.7}>
                        <View>
                            <Icon name="search" size={25} color="#6F7F89" />                         
                        </View>
                     </TouchableScale>
                     <TouchableScale  activeScale={0.7}>
                        <View>
                            <Icon name="filter-list" size={25} color="#6F7F89" />
                        </View>
                     </TouchableScale>
                </View>
            );        
        }
    
};





const styles = StyleSheet.create({
    inputContainer: {  
        width:"60%",        
        height:40, 
        alignItems:"flex-start",         
        flexDirection:"column", 
        justifyContent:"center"   
    },
    input: {
        width: "100%",     
        height:36,                              
        backgroundColor: "#FFFFFF",
        color:'#6F7F89',
        fontFamily: 'Roboto',
        borderColor:"#6F7F89", 
        borderWidth:1 
    },
    labelStyle: {
        fontFamily: 'Roboto'
    },
    wrapper: {
        flex:1,
        flexDirection: "row",
        justifyContent: "space-around", 
        alignItems:"center",   
        backgroundColor : "#F2F2F2",
        width: "100%",
        height:50, 
        padding:5                        
    }
});




export default ClienteSearchBar;