import React, {Component} from 'react';
import {Button, Text, View, Image, StyleSheet} from 'react-native';
import {AppImages} from '../../../components/UI/Images/AppImages';
import  NavIndicator  from "../../../components/UI/NavIndicator/NavIndicator";



class Step2 extends Component {
  state = {
    showNextButton: false
  };

  render() {
    return (
        <View>       
            <View style={styles.innerViewContainerTop}>
                <Image style={styles.image} source={AppImages.logoImageColor} resizeMode="contain"/>
            </View>
            <View style={styles.innerViewContainerMedium}>
                <View style={styles.container}>
                    <Text style={styles.textStyle}>
                        Aquí podrás estar al tanto de los vencimientos, mantenerte actualizado con las novedades, ver los indicadores tributarios, laborales, etc.
                    </Text>
                
                </View>
            </View>
            <View style={styles.innerViewContainerBottom}>
                <NavIndicator page={2}></NavIndicator>
            </View>
        </View>
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
        justifyContent:'center',
        width:"73%"//,
        // borderWidth: 1,
        // borderColor:"orange"
    },
    textContainer:{            
        width: '75%',
        height: '100%',
        flexDirection:'column',        
        alignItems:'center',
        justifyContent:'flex-end',
         borderWidth: 1,
        borderColor:"red"
    },
    gradientContainer:{
        flex:1,
        height: '100%',
        width: '100%'
    },
    image: {
        width: "70%",
        height: "35%"//,
        // borderWidth: 1,
        // borderColor:"green"
      },
    textStyle:{
        flexDirection:"column",
        fontSize:22,          
        color:"#6F7F89", 
        textAlign:"center"
    },
    navind: {
        marginBottom:0
    },
      innerViewContainerTop:{        
        height: '30%',
        width: '100%',
        // borderWidth:1,
        // borderColor:"blue",
        alignItems:'center',
        justifyContent:'center'
    },
    innerViewContainerMedium:{        
        height: '40%',
        width: '100%',
        // borderWidth:1,
        // borderColor:"blue",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
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

export default Step2