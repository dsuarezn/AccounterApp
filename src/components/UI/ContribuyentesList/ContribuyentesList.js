import React, { Component } from "react";
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, FlatList} from 'react-native';
import { ListItem } from 'react-native-elements';
import {iconsMap} from '../Icons/AppIcons';


class ContribuyentesList extends Component{

    constructor(props){
        super(props);        
    }    
    
    renderItem = ({ item }) => (
        <TouchableOpacity>
        <ListItem            
            leftAvatar={{ source: { uri: item.avatar_url } }}
            title={item.name}
            subtitle={item.subtitle}
            bottomDivider={true}
            rightIcon={iconsMap["pen"]}
            onPress={this.props.onPressHandler}
        />
        </TouchableOpacity>
    )
    
    render () {
      return (
        <FlatList
          keyExtractor={ (item, index) => index.toString() }
          data={this.props.dataArray}
          renderItem={this.renderItem}
        />
      )
    }


}


export default ContribuyentesList;
