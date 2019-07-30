import React, {Component} from 'react';
import {Text, View, Button, Image, StyleSheet, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {AppImages} from '../../../components/UI/Images/AppImages';
// import RadialGradient from 'react-native-radial-gradient';
import NavIndicator from "../../../components/UI/NavIndicator/NavIndicator";



class Step1 extends Component {
    state = {
      showNextButton: false
    };
  
    render() {
      return (
          
        <LinearGradient style={styles.gradientContainer} colors={[ "#4DA72C", "#339130" ]}>
            <View style={styles.innerViewContainerTop}>

            </View>
            <View style={styles.innerViewContainerMedium}>
                <View style={styles.container}>
                    <Image style={styles.image} source={AppImages.logoImageWhite} resizeMode="contain"/>
                    <Text style={styles.textStyle}>
                        Bienvenido a la App de Accounter.   
                    </Text>
                  
                </View>
            </View>
            <View style={styles.innerViewContainerBottom}>
                <NavIndicator page={1}></NavIndicator>
            </View>

              
          </LinearGradient>
      );
    }
  }
  
  const styles=StyleSheet.create({   
    container:{    
        flex  : 1,
        height: '100%',
        flexDirection:'column',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    gradientContainer:{
        flex:1,
        height: '100%',
        width: '100%'
    },
    image: {
        width: "75%",
        height: "35%"
      },
    textStyle:{
        fontFamily: "Roboto-Bold",
        fontSize:15, 
        fontWeight: 'bold', 
        color:"#FFFFFF"
    },
    innerViewContainerTop:{        
        height: '30%',
        width: '100%',
        // borderWidth:1,
        // borderColor:"blue"
    },
    innerViewContainerMedium:{        
        height: '40%',
        width: '100%',
        // borderWidth:1,
        // borderColor:"blue",
        flexDirection:"column",
        justifyContent:"flex-start"
    },
    innerViewContainerBottom:{    
        flexDirection:"column",    
        height: '30%',
        width: '100%',
        // borderWidth:1,
        // borderColor:"blue",
        alignItems:"center",
        justifyContent:"flex-end"
    }
});

  export default Step1;