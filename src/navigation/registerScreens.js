
import React from 'react';
import { Navigation } from 'react-native-navigation';

import {
  LoginScreen, 
  ContribuyentesScreen, 
  ContribuyentesDetailScreen, 
  ContribuyentesAddScreen, 
  VencimientosScreen, 
  IndicadoresScreen,
  PerfilScreen,
  NotificacionesScreen, 
  SplashScreen, 
  LeftMenuScreen 
} from '../screens';

import SearchBarComponent from '../components/UI/SearchBar/SearchBarComponent';

import { Provider } from 'react-redux';

import {
  SPLASH_SCREEN,
  LOGIN_SCREEN,
  CONTRIBUYENTES_TAB_SCREEN,
  CONTRIBUYENTES_DETAIL_SCREEN,
  CONTRIBUYENTES_ADD_SCREEN,
  VENCIMIENTOS_TAB_SCREEN,
  INDICADORES_TAB_SCREEN,
  PERFIL_TAB_SCREEN, 
  NOTIFICACIONES_TAB_SCREEN, 
  LEFTMENU_SCREEN, 
  SEARCH_BAR_COMPONENT
} from './Screens';


// function WrappedComponent(Component) {
//     return function inject(props) {
//       const EnhancedComponent = () => (
//         <Provider>
//           <Component
//             {...props}
//           />
//         </Provider>
//       );
  
//       return <EnhancedComponent />;
//     };
//   }
  
  export default function () {
    Navigation.registerComponent(SPLASH_SCREEN, () => (SplashScreen));
    Navigation.registerComponent(LOGIN_SCREEN, () => (LoginScreen));
    Navigation.registerComponent(CONTRIBUYENTES_TAB_SCREEN, () => (ContribuyentesScreen));
    Navigation.registerComponent(CONTRIBUYENTES_DETAIL_SCREEN, () => (ContribuyentesDetailScreen));
    Navigation.registerComponent(CONTRIBUYENTES_ADD_SCREEN, () => (ContribuyentesAddScreen));
    Navigation.registerComponent(VENCIMIENTOS_TAB_SCREEN, () => (VencimientosScreen));
    Navigation.registerComponent(INDICADORES_TAB_SCREEN, () => (IndicadoresScreen));
    Navigation.registerComponent(PERFIL_TAB_SCREEN, () => (PerfilScreen));    
    Navigation.registerComponent(NOTIFICACIONES_TAB_SCREEN, () => (NotificacionesScreen)); 
    Navigation.registerComponent(LEFTMENU_SCREEN, () => (LeftMenuScreen));  
    Navigation.registerComponent(SEARCH_BAR_COMPONENT, () => (SearchBarComponent));    
    console.info('All screens have been registered...');
  }