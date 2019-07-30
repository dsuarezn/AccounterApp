import React, { Component } from "react";
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import AccounterExpirationCard from '../AccounterExpiracionCard/AccounterExpirationCard';


class ExpirationCardList extends Component{

    constructor(props){
        super(props);        
    }         
    
    render () {
      return (
        <ScrollView>
            <FlatList data={this.props.dataArray}
            keyExtractor={(item, index) => index.toString()} 
            renderItem={
                ({item}) =>
                <AccounterExpirationCard dataArray={item.vencimientos} noVencimientos={item.noVencimientos} venceEn={item.venceEn} levelStyle={item.levelStyle}></AccounterExpirationCard>            
            }/>
        </ScrollView>
      )
    }


}


export default ExpirationCardList;