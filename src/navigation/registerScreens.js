
import React from 'react';
import { Navigation } from 'react-native-navigation';

import {
  LoginScreen, 
  ClientesScreen,   
  ClientesAddScreen, 
  VencimientosScreen, 
  IndicadoresScreen,
  PerfilScreen,
  NovedadesScreen, 
  SplashScreen, 
  LeftMenuScreen, 
  RegistroScreen, 
  ClientesSelectType,
  ClientesEditDetailScreen, 
  CalendarScreen,
  WizardScreen
} from '../screens';

import { PersistGate } from 'redux-persist/lib/integration/react';


import { Provider } from 'react-redux';
// import { configureStore }  from '../../src/store/configureStore';
import { store, persistor }  from '../../src/store/configureStore';


const appStore= store;



import {
  SPLASH_SCREEN,
  LOGIN_SCREEN,
  CLIENTES_TAB_SCREEN,    
  CLIENTES_SELECT_TYPE_SCREEN,  
  VENCIMIENTOS_TAB_SCREEN,
  INDICADORES_TAB_SCREEN,
  PERFIL_TAB_SCREEN, 
  NOTIFICACIONES_TAB_SCREEN, 
  LEFTMENU_SCREEN, 
  //SEARCH_BAR_COMPONENT, 
  REGISTER_SCREEN,
  CALENDAR_TAB_SCREEN,
  CLIENTES_EDIT_DETAIL_SCREEN,
  CLIENTES_ADD_SCREEN, 
  WIZARD_SCREEN
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

    Navigation.registerComponent(CLIENTES_SELECT_TYPE_SCREEN, () => WrappedComponent(ClientesSelectType));    
    
    Navigation.registerComponent(CLIENTES_EDIT_DETAIL_SCREEN, () => WrappedComponent(ClientesEditDetailScreen));        
    
    Navigation.registerComponent(CLIENTES_TAB_SCREEN, () => WrappedComponent(ClientesScreen));    
    Navigation.registerComponent(CLIENTES_ADD_SCREEN, () => WrappedComponent(ClientesAddScreen));
    
    Navigation.registerComponent(VENCIMIENTOS_TAB_SCREEN, () => WrappedComponent(VencimientosScreen));
    Navigation.registerComponent(INDICADORES_TAB_SCREEN, () => WrappedComponent(IndicadoresScreen));
    Navigation.registerComponent(PERFIL_TAB_SCREEN, () => WrappedComponent(PerfilScreen));    
    Navigation.registerComponent(NOTIFICACIONES_TAB_SCREEN, () => WrappedComponent(NovedadesScreen)); 
    Navigation.registerComponent(LEFTMENU_SCREEN, () => WrappedComponent(LeftMenuScreen));  
    
    Navigation.registerComponent(REGISTER_SCREEN, () => WrappedComponent(RegistroScreen));  
    Navigation.registerComponent(CALENDAR_TAB_SCREEN, () => WrappedComponent(CalendarScreen));  
    Navigation.registerComponent(VENCIMIENTOS_TAB_SCREEN, () => WrappedComponent(VencimientosScreen));

    Navigation.registerComponent(WIZARD_SCREEN, () => WrappedComponent(WizardScreen)); 

    
    
    console.info('All screens have been registered...');
  }