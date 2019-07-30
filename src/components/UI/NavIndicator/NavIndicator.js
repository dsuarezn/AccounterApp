import React, { Component } from "react";
import {
    View,
    TextInput,
    StyleSheet
} from "react-native";


class NavIndicator extends Component{
    
        constructor(props){
            super(props);        
        }
        
        render(){
           
            var navid=this.props.page;

            return(                
                <View style={styles.container}>
                    {navid===1 ? <View style={styles.circleSel} /> : <View style={styles.circle} /> }
                    {navid===2 ? <View style={styles.circleSel} /> : <View style={styles.circle} /> }
                    {navid===3 ? <View style={styles.circleSel} /> : <View style={styles.circle} /> }
                </View>               
            );        
        }
    
};




const styles = StyleSheet.create({
    container: {
        flexDirection:"row",        
        backgroundColor:"transparent",
        justifyContent:"space-between", 
        alignItems:"flex-end", 
        //   borderWidth: 1,
        // borderColor:"orange",   
        height:"20%",
        width:"20%" 
    } ,
    circle: {
        width: 15,
        height: 15,
        borderRadius: 100/2,
        borderColor:"#999999",
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        margin:5,
        marginBottom:10        
    },
    circleSel: {
        width: 15,
        height: 15,
        borderRadius: 100/2,
        borderColor:"#999999",
        borderWidth: 1,
        backgroundColor: '#999999',
        margin:5,
        marginBottom:10        
    }    
});


export default NavIndicator;