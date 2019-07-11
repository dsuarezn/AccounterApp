
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
  LeftMenuScreen, 
  RegistroScreen, 
  ContribuyentesAddType,
  ContribuyentesAddDetailScreen, 
  CalendarScreen
} from '../screens';

import { PersistGate } from 'redux-persist/lib/integration/react';


import { Provider } from 'react-redux';
// import { configureStore }  from '../../src/store/configureStore';
import { store, persistor }  from '../../src/store/configureStore';


const appStore= store;



import {
  SPLASH_SCREEN,
  LOGIN_SCREEN,
  CONTRIBUYENTES_TAB_SCREEN,
  CONTRIBUYENTES_DETAIL_SCREEN,
  CONTRIBUYENTES_ADD_SCREEN,
  CONTRIBUYENTES_ADDTYPE_SCREEN,
  CONTRIBUYENTES_ADD_DETAIL_SCREEN,
  VENCIMIENTOS_TAB_SCREEN,
  INDICADORES_TAB_SCREEN,
  PERFIL_TAB_SCREEN, 
  NOTIFICACIONES_TAB_SCREEN, 
  LEFTMENU_SCREEN, 
  //SEARCH_BAR_COMPONENT, 
  REGISTER_SCREEN,
  CALENDAR_TAB_SCREEN
} from './Screens';


function WrappedComponent(Component) {
    return function inject(props) {
      const EnhancedComponent = () => (
        <Provider store={appStore}>
          <PersistGate loading={null} persistor={persistor}>
              <Component
                {...props}
              />
          </PersistGate>
        </Provider>
      );  
      return <EnhancedComponent />;
    };
  }

  
  export default function () {
    Navigation.registerComponent(SPLASH_SCREEN, () => WrappedComponent(SplashScreen));
    Navigation.registerComponent(LOGIN_SCREEN, () => WrappedComponent(LoginScreen));

    Navigation.registerComponent(CONTRIBUYENTES_ADDTYPE_SCREEN, () => WrappedComponent(ContribuyentesAddType));    
    Navigation.registerComponent(CONTRIBUYENTES_ADD_DETAIL_SCREEN, () => WrappedComponent(ContribuyentesAddDetailScreen));         
    Navigation.registerComponent(CONTRIBUYENTES_TAB_SCREEN, () => WrappedComponent(ContribuyentesScreen));
    Navigation.registerComponent(CONTRIBUYENTES_DETAIL_SCREEN, () => WrappedComponent(ContribuyentesDetailScreen));
    Navigation.registerComponent(CONTRIBUYENTES_ADD_SCREEN, () => WrappedComponent(ContribuyentesAddScreen));
    
    Navigation.registerComponent(VENCIMIENTOS_TAB_SCREEN, () => WrappedComponent(VencimientosScreen));
    Navigation.registerComponent(INDICADORES_TAB_SCREEN, () => WrappedComponent(IndicadoresScreen));
    Navigation.registerComponent(PERFIL_TAB_SCREEN, () => WrappedComponent(PerfilScreen));    
    Navigation.registerComponent(NOTIFICACIONES_TAB_SCREEN, () => WrappedComponent(NotificacionesScreen)); 
    Navigation.registerComponent(LEFTMENU_SCREEN, () => WrappedComponent(LeftMenuScreen));  
    //Navigation.registerComponent(SEARCH_BAR_COMPONENT, () => WrappedComponent(SearchBarComponent));    
    Navigation.registerComponent(REGISTER_SCREEN, () => WrappedComponent(RegistroScreen));  
    
    Navigation.registerComponent(CALENDAR_TAB_SCREEN, () => WrappedComponent(CalendarScreen));  
    
    console.info('All screens have been registered...');
  }