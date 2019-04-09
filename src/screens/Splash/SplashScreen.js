import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {pushInitalLoginScreen, pushInitalTabbedScreen} from '../../navigation/Nav';



class SplashScreen extends Component {
  async componentDidMount() {
    try {
      const user = false;//await AsyncStorage.getItem(USER_KEY);
      //console.log('user: ', user);
      if (user) {
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
        <Text style={styles.welcome}>SplashScreen</Text>
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
  }
})

export default SplashScreen;