import React from 'react';
import { AppRegistry } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { pushInitalSplashScreen, pushToTestScreen } from './src/navigation/Navigation';

import {
    SPLASH_SCREEN,
    LOGIN_SCREEN, 
    CLIENTES_TAB_SCREEN,     
    CLIENTES_EDIT_DETAIL_SCREEN,   
    VENCIMIENTOS_TAB_SCREEN,
    INDICADORES_TAB_SCREEN,
    PERFIL_TAB_SCREEN, 
    NOTIFICACIONES_TAB_SCREEN, 
    LEFTMENU_SCREEN, 
    //SEARCH_BAR_COMPONENT, 
    REGISTER_SCREEN,
    WIZARD_SCREEN
  } from './src/navigation/Screens';


Navigation.events().registerAppLaunchedListener(() => pushToTestScreen(SPLASH_SCREEN));


