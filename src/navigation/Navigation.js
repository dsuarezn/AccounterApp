import React from 'react';
import { Navigation } from 'react-native-navigation';
import { iconsMap } from '../components/UI/Icons/AppIcons';

import IconPers from 'react-native-vector-icons/MaterialCommunityIcons';



var whatsApp;


import {
  SPLASH_SCREEN,
  LOGIN_SCREEN, 
  CONTRIBUYENTES_TAB_SCREEN,
  VENCIMIENTOS_TAB_SCREEN,
  INDICADORES_TAB_SCREEN,  
  NOTIFICACIONES_TAB_SCREEN, 
  LEFTMENU_SCREEN, 
  REGISTER_SCREEN,
  CALENDAR_TAB_SCREEN,
  CONTRIBUYENTES_ADDTYPE_SCREEN,
  CONTRIBUYENTES_DETAIL_SCREEN
} from './Screens';

import registerScreens from './registerScreens';

registerScreens();
loadIcons();

function loadIcons() {  
  IconPers.getImageSource("whatsapp", 30).then((source) => { whatsApp = source});
}

export function pushInitalTabbedScreen() {  
  generalTabConfigNavigation();
  navegacionPorTabs();
}


export function pushToUserRegister() {  
  noTopBarConfigNavigation();
  pushRegisterScreen();
}

export function pushInitalSplashScreen() {
  noTopBarConfigNavigation();
  pushSplashScreen();
}


export function pushToTestScreen(Screen) {
  generalDefaultNavbarConfig();
  pushTestScreen(Screen);
}

export function pushInitalLoginScreen() {
  noTopBarConfigNavigation();
  pushLoginScreen();
}

export function noTopBarConfigNavigation() {
  Navigation.setDefaultOptions({
    topBar: {
      visible: false
    }
  });
}





export function generalTabConfigNavigation() {

  Navigation.setDefaultOptions({
    topBar: {
      searchBar: true,
      searchBarHiddenWhenScrolling: false,
      searchBarPlaceholder: 'Search',
      background: {
        color: '#292B30'
      },      
      backButton: {
        title: '', // Remove previous screen name from back button
        color: '#FFFFFF'
      },
      leftButtons: [
        {          
          id: 'leftMenu',
          icon: iconsMap["menu"],
          color: '#FFFFFF'
        }
      ],
      rightButtons: [
        {          
          id: 'rightMenu',
          icon: whatsApp,
          color: '#47A22D'
        }
      ],      
    },
    layout: {
      orientation: ['portrait']
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysShow',
      backgroundColor: '#292B30'
    },
    bottomTab: {
      textColor: '#FFFFFF',
      selectedTextColor: '#FFFFFF',
      iconColor: '#FFFFFF',
      selectedIconColor: '#FFFFFF',
      
    }
  });
}


export function generalDefaultNavbarConfig() {

  Navigation.setDefaultOptions({
    topBar: {
      searchBar: true,
      searchBarHiddenWhenScrolling: false,
      searchBarPlaceholder: 'Search',
      background: {
        color: '#292B30'
      },      
      backButton: {
        title: '', // Remove previous screen name from back button
        color: '#FFFFFF'
      },
      leftButtons: [
        {          
          id: 'leftMenu',
          icon: iconsMap["menu"],
          color: '#FFFFFF'
        }
      ],
      rightButtons: [
        {          
          id: 'rightMenu',
          icon: iconsMap["menu"],
          color: '#FFFFFF'
        }
      ],      
    },
    layout: {
      orientation: ['portrait']
    }
  });
}

export function pushSplashScreen() {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: SPLASH_SCREEN,
            options: {
              topBar: {
                visible: false,
                height: 0
              }
            }
          }
        }]
      }
    }
  });
}

export function pushTestScreen(Screen) {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: Screen            
          }
        }]
      }
    }
  });
}

export function pushLoginScreen() {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: LOGIN_SCREEN,  
            options: {
              topBar: {
                visible: true,
                height: 0
              }
            }          
          }
        }]
      }
    }
  });
}


export function pushRegisterScreen() {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: REGISTER_SCREEN,  
            options: {
              topBar: {
                visible: true,
                height: 0
              }
            }          
          }
        }]
      }
    }
  });
}



export function navegacionPorTabs() {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: LEFTMENU_SCREEN,
            id: 'leftMenuDrawer'          
          }
        },
        center: {
          bottomTabs: {
            children: [              
              {
              stack: {
                children: [{
                  component: {
                    name: CONTRIBUYENTES_TAB_SCREEN,
                    options: {
                      topBar: {
                        title: {
                          text: 'Clientes',
                          color: '#FFFFFF'
                        },
                        searchBar: true,
                        searchBarHiddenWhenScrolling: false,
                        searchBarPlaceholder: 'Search'
                      }
                    }
                  }
                }],
                options: {
                  bottomTab: {
                    icon: iconsMap["work"],
                    testID: 'SECOND_TAB_BAR_BUTTON',
                    text: 'Clientes',
                  }
                }
              }
            },
            {
              stack: {
                children: [{
                  component: {
                    name: VENCIMIENTOS_TAB_SCREEN,
                    options: {
                      topBar: {
                        title: {
                          text: 'Vencimientos',
                          color: '#FFFFFF'
                        }
                      }
                    }
                  }
                }],
                options: {
                  bottomTab: {
                    icon: iconsMap["notifications-active"],
                    testID: 'THIRD_TAB_BAR_BUTTON',
                    text: 'Vencimientos',
                  }
                }
              }
            }
            ,

            {
              stack: {
                children: [{
                  component: {
                    name: CALENDAR_TAB_SCREEN,
                    options: {
                      topBar: {
                        title: {
                          text: 'Calendario',
                          color: '#FFFFFF'
                        }
                      }
                    }
                  }
                }],
                options: {
                  bottomTab: {
                    icon: iconsMap["date-range"],
                    testID: 'FIFTH_TAB_BAR_BUTTON',
                    text: 'Calendario',
                  }
                }
              }
            },

            {
              stack: {
                children: [{
                  component: {
                    name: NOTIFICACIONES_TAB_SCREEN,
                    options: {
                      topBar: {
                        title: {
                          text: 'Novedades',
                          color: '#FFFFFF'
                        }
                      }
                    }
                  }
                }],
                options: {
                  bottomTab: {
                    icon: iconsMap["whatshot"],
                    testID: 'FOURTH_TAB_BAR_BUTTON',
                    text: 'Novedades',
                  }
                }
              }
            },
            {
              stack: {
                children: [{
                  component: {
                    name: INDICADORES_TAB_SCREEN,
                    options: {
                      topBar: {
                        title: {
                          text: 'Indicadores',
                          color: '#FFFFFF'
                        }
                      }
                    }
                  }
                }],
                options: {
                  bottomTab: {
                    icon: iconsMap["trending-up"],
                    testID: 'FIRST_TAB_BAR_BUTTON',
                    text: 'Indicadores',
                  }
                }
              }
            }
          ]
          }
        }
      }
    }
  }); 
}



export function seleccionarVencimientos(){        
  Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: CONTRIBUYENTES_ADD_DETAIL_SCREEN,
            passProps: {
              text: 'stack with one child'
            },
            options: {
              topBar: {
                title: {
                  text: 'Modal'
                },
                leftButtons: [
                  {          
                    id: 'leftMenu',
                    icon: iconsMap["menu"],
                    color: '#FFFFFF'
                  }
                ],
              }
            }
          }
        }]
      }
    });
}


export function irACreacionCliente(){        
  Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: CONTRIBUYENTES_ADD_SCREEN,
            passProps: {
              text: 'stack with one child'
            },
            options: {
              topBar: {
                title: {
                  text: 'Clientes',
                  color: '#FFFFFF'
                },
                leftButtons: [
                  {          
                    id: 'leftMenu',
                    icon: iconsMap["menu"],
                    color: '#FFFFFF'
                  }
                ],
                rightButtons: [
                  {          
                    id: 'rightMenu',
                    icon: iconsMap["work"],
                    color: '#FFFFFF'
                  }
                ],
              }
            }
          }
        }]
      }
    });
}

export function bindComponentNavigation(element){
  Navigation.events().bindComponent(element);
}



export function editarContribuyente(){        
  Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: CONTRIBUYENTES_DETAIL_SCREEN,
            passProps: {
              text: 'stack with one child'
            },
            options: {
              topBar: {
                title: {
                  text: 'Clientes',
                  color: '#FFFFFF'
                },
                leftButtons: [
                  {          
                    id: 'leftMenu',
                    icon: iconsMap["menu"],
                    color: '#FFFFFF'
                  }
                ],
                rightButtons: [
                  {          
                    id: 'rightMenu',
                    icon: iconsMap["work"],
                    color: '#FFFFFF'
                  }
                ],
              }
            }
          }
        }]
      }
    });
}

export function agregarContribuyente(){        
  Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: CONTRIBUYENTES_ADDTYPE_SCREEN,
            passProps: {
              text: 'stack with one child'
            },
            options: {
              topBar: {
                title: {
                  text: 'Clientes',
                  color: '#FFFFFF'
                },
                leftButtons: [
                  {          
                    id: 'leftMenu',
                    icon: iconsMap["menu"],
                    color: '#FFFFFF'
                  }
                ],
                rightButtons: [
                  {          
                    id: 'rightMenu',
                    icon: iconsMap["work"],
                    color: '#FFFFFF'
                  }
                ],
              }
            }
          }
        }]
      }
    });
}

