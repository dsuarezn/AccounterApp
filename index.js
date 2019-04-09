import { Navigation } from 'react-native-navigation';
import { pushInitalSplashScreen } from './src/navigation/Nav';

Navigation.events().registerAppLaunchedListener(() => pushInitalSplashScreen());


