import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import {AppImages} from '../../UI/Images/AppImages';

import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

class AccounterUserCard extends Component{

    constructor(props){
        super(props);        
    }
    
    render(){

        return(
            <View style={[styles.container, this.props.style]}  >
            <Image style={styles.image} source={AppImages.userImage} resizeMode="contain"/>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Deivid Suarez</Text>
                    <Text style={styles.mail}>d.alexander.suarez@gmail.com</Text>
                    { this.props.showCardButton===true ?  <Button  title="Editar" type="solid" TouchableComponent={TouchableOpacity} onPress={this.props.onButtonPressHandler} /> : null}                                                                                                
                </View>                            
            </View>
        );        
    }

};


const styles=StyleSheet.create({
    title:{       
        fontSize:28,
        fontWeight:"bold"        
    },
    mail:{       
        fontSize:15,                
    },
    textContainer:{               
        padding: 5 
    },
    container:{        
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'center'             
    }, 
    image: {
        width: Dimensions.get('window').width * 0.18,
        height: Dimensions.get('window').height * 0.18,
        marginLeft: 10
    },
    buttonStyle:{
        marginTop:5
    }

});

export default AccounterUserCard;