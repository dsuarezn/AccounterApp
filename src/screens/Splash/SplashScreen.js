import React, {Component} from 'react';
import {
  View,  
  StyleSheet,
  Image,
  ActivityIndicator
} from 'react-native';

import {AppImages} from '../../components/UI/Images/AppImages';
import {pushInitalLoginScreen, pushInitalTabbedScreen} from '../../navigation/Navigation';

import { connect } from 'react-redux';

class SplashScreen extends Component {
  async componentDidMount() {
    try {
      // const user = false;//await AsyncStorage.getItem(USER_KEY);      
      console.log('user: ', this.props.clientId);
      console.log('token: ', this.props.secToken);
      if (this.props.clientId!=null && this.props.secToken!=null) {  
      // if (true) {        
        pushInitalTabbedScreen();
      } else {
        pushInitalLoginScreen();
      }
    } catch (err) {
      console.log('error: ', err)
      pushInitalLoginScreen();
    }
  }

  render() {
    return (
      <View style={styles.container}>        
        <View style={styles.logoContainer}>
            <Image style={styles.imageLogo} source={AppImages.logoImageColor} resizeMode="contain"/>
            <ActivityIndicator size="small" color="#00ff00" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer:{ 
    flex: 1,   
    flexDirection: "row", 
    alignItems:"center", 
    justifyContent:"center", 
    backgroundColor:"#FFFFFF", 
    width:"100%",
    height:"20%"
},
})

const mapStateToProps =(state)=>{
  return {
      clientId:state.auth.securityData.userName,
      secToken:state.auth.securityData.tokenInfo   
  }
}

const mapDispatchToProps =(dispatch)=>{
  return {
      
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (SplashScreen);

// export default SplashScreen;
