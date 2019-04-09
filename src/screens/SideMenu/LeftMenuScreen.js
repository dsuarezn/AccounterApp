import React, { Component } from 'react';
import AccounterLabel from '../../components/UI/AccounterLabel/AccounterLabel';
import {View, Dimensions, StyleSheet, FlatList, Image, Text} from 'react-native';

import { Navigation } from 'react-native-navigation';
import AccounterUserCard from '../../components/UI/AccounterUserCard/AccounterUserCard';

import {iconsMap} from '../../components/UI/Icons/AppIcons';

import {AppImages} from '../../components/UI/Images/AppImages';
import { ListItem, Divider  } from 'react-native-elements';


const infoMenu = [
    { key:"config", label:"Configuración", leftIcon:"configIcon" },
    { key:"estatuto", label:"Estatuto", leftIcon:"estatutoIcon" }
];

keyExtractor = (item, index) => index.toString();

renderItem = ({ item }) => (
    <View>
    <ListItem 
        key={item.key} 
        title={item.label} 
        leftAvatar={{source: AppImages.userImage}} 
        topDivider={true}
        bottomDivider={true}
        chevron/>    
    </View>
  )

class LeftMenuScreen extends Component{
    constructor(props){
        super(props);
        Navigation.events().bindComponent(this);
    }

    navigationButtonPressed({ buttonId }) {
        console.log(buttonId+" pressed");
    }

    

    render(){

        return(     
            <View style={styles.container}>
                <AccounterUserCard style={styles.usercard}></AccounterUserCard>
                
                <FlatList data={infoMenu} renderItem={renderItem} keyExtractor={keyExtractor}/>             
            </View>
        );

    }

}

const styles=StyleSheet.create({
    label:{       
        fontSize:20      
    },
    itemContainer:{              
        justifyContent: 'flex-start',
        alignItems:'flex-start'             
    },   
    container: {
        flex: 1,        
        backgroundColor: "white" 
                 
    }, 
    usercard:{
        backgroundColor:"#a8b7b0"
    }

});

export default LeftMenuScreen;