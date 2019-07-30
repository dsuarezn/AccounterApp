import React, {Component} from 'react';
import {
  View,  
  StyleSheet,
  Image,
  ActivityIndicator, 
  SafeAreaView, 
  Text,
  Button
} from 'react-native';

import {AppImages} from '../../components/UI/Images/AppImages';
import {pushInitalLoginScreen, pushInitalTabbedScreen} from '../../navigation/Navigation';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';


// Wizard
import Wizard from "react-native-wizard";

import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";

class WizardScreen extends Component {

    
  state = {
    isLastStep  : false,
    isFirstStep : false,
    currentIndex: 0
  };

  render() {
    console.log(this.state.isFirstStep ? "TEST" : "DENEME")
    const steps = [
      {        
        component: Step1,
        props    : {
          title: "Step 1 TEST",
        }
      },
      {
        component: Step2,
        props    : {
          title: "Step 2 TEST",
        }
      }
    ];

    var arrowColor=this.state.isFirstStep ? "#FFFFFF" : "#4DA72C";

    return (
        <SafeAreaView style={{flex: 1}} >
          {/* <View style={{alignItems: 'center', paddingVertical: 25}}>
            <Text style={{fontSize: 18}}>Active Step Index: {this.state.currentIndex}</Text>
            <Text style={{fontSize: 18}}>Is First Step?: {this.state.isFirstStep ? "True" : "False"}</Text>
            <Text style={{fontSize: 18}}>Is Last Step?: {this.state.isLastStep ? "True" : "False"}</Text>
          </View> */}
          <Wizard
              showNextButton={(status) => {
                status ? console.log("SHOW") : console.log("HIDE")
              }}
              showPrevButton={(status) => {
                status ? console.log("SHOW") : console.log("HIDE")
              }}
              ref={(e) => this.wizard = e}
              currentStep={(currentIndex, isFirstStep, isLastStep) => {
                this.setState({
                  isLastStep  : isLastStep,
                  isFirstStep : isFirstStep,
                  currentIndex: currentIndex
                })
              }}
              onNext={() => {console.log("next() Called")}}
              onPrev={() => {console.log("prev() Called")}}
              onFinish={() => {alert("onFinish Called")}}
              steps={steps}/>

          <View style={styles.container}>

            {this.state.isFirstStep===true
            ? 
            <Text>{" "}</Text>              
            :
            <Icon onPress={() => {this.wizard.prev();}} name="keyboard-arrow-left" size={65} color={arrowColor}></Icon>                       
            }

            

            <Icon onPress={() => {this.wizard.next();}} name="keyboard-arrow-right" size={65} color={arrowColor}></Icon>            

                        

            {/* {this.state.isFirstStep ? undefined : <Button onPress={() => {
              this.wizard.prev();
            }} title={"Back"}/>} */}

            {/* {!this.state.isLastStep ? <Button onPress={() => {
              this.wizard.goToStep(2);
            }} title={"Go To Step 3"}/> : undefined} */}

          </View>
        </SafeAreaView>
    )
  }

}



const styles=StyleSheet.create({   
    wizardstyle:{
        borderWidth: 1,
        borderColor:"orange"
    },
    container:{ 
      flexDirection:"row",   
      backgroundColor:"transparent",           
      width:"100%", 
    //   borderWidth:1,
    //   borderColor:"red",    
      position: 'absolute',         
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0,     
      justifyContent: 'space-between', 
      alignItems: 'center'
    }
});

const mapStateToProps =(state)=>{
    return {
    }
  }
  
  const mapDispatchToProps =(dispatch)=>{
    return {
        
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps) (WizardScreen);