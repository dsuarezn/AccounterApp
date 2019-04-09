import { Navigation } from 'react-native-navigation';
import { iconsMap } from '../components/UI/Icons/AppIcons';

import {
  SPLASH_SCREEN,
  LOGIN_SCREEN, 
  CONTRIBUYENTES_TAB_SCREEN,
  VENCIMIENTOS_TAB_SCREEN,
  INDICADORES_TAB_SCREEN,
  PERFIL_TAB_SCREEN, 
  NOTIFICACIONES_TAB_SCREEN, 
  LEFTMENU_SCREEN, 
  SEARCH_BAR_COMPONENT
} from './Screens';

import registerScreens from './registerScreens';

  registerScreens();

export function pushInitalTabbedScreen() {
  
  generalTabConfigNavigation();
  pruebaNavegacion();
}

export function pushInitalSplashScreen() {
  loginConfigNavigation();
  pushSplashScreen();
}

export function pushInitalLoginScreen() {
  loginConfigNavigation();
  pushLoginScreen();
}

export function loginConfigNavigation() {
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
        color: '#F1F3F0'
      },      
      backButton: {
        title: '', // Remove previous screen name from back button
        color: 'gray'
      },
      leftButtons: [
        {          
          id: 'leftMenu',
          icon: iconsMap["bars"],
          color: 'gray'
        }
      ],
      rightButtons: [
      ],      
    },
    layout: {
      orientation: ['portrait']
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysShow'
    },
    bottomTab: {
      textColor: 'gray',
      selectedTextColor: 'black',
      iconColor: 'gray',
      selectedIconColor: 'black',
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





export function pruebaNavegacion() {
  
  //prepareIcons.then((iconos) => {
      
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
                    name: INDICADORES_TAB_SCREEN,
                    options: {
                      topBar: {
                        title: {
                          text: 'Indicadores'
                        }
                      }
                    }
                  }
                }],
                options: {
                  bottomTab: {
                    icon: iconsMap["chart-line"],
                    testID: 'FIRST_TAB_BAR_BUTTON',
                    text: 'Indicadores',
                  }
                }
              }
            },
            {
              stack: {
                children: [{
                  component: {
                    name: CONTRIBUYENTES_TAB_SCREEN,
                    options: {
                      topBar: {
                        title: {
                          text: 'Participantes'
                        },
                        searchBar: true,
                        searchBarHiddenWhenScrolling: false,
                        searchBarPlaceholder: 'Search',
                        rightButtons: [                         
                          {
                            id: 'plusMenu',
                            icon: iconsMap["plus"],
                            color: 'gray'
                          }                         
                        ]
                      }
                    }
                  }
                }],
                options: {
                  bottomTab: {
                    icon: iconsMap["building"],
                    testID: 'SECOND_TAB_BAR_BUTTON',
                    text: 'Participantes',
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
                          text: 'Expiraciones'
                        }
                      }
                    }
                  }
                }],
                options: {
                  bottomTab: {
                    icon: iconsMap["calendar-alt"],
                    testID: 'THIRD_TAB_BAR_BUTTON',
                    text: 'Expiraciones',
                  }
                }
              }
            }
            ,
            {
              stack: {
                children: [{
                  component: {
                    name: NOTIFICACIONES_TAB_SCREEN,
                    options: {
                      topBar: {
                        title: {
                          text: 'Noticias'
                        }
                      }
                    }
                  }
                }],
                options: {
                  bottomTab: {
                    icon: iconsMap["bullhorn"],
                    testID: 'FOURTH_TAB_BAR_BUTTON',
                    text: 'Noticias',
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

//});
  
}





export function pushToTabbedScreen() {
  Navigation.setRoot({
    root: {      
      bottomTabs: {
        children: [
          {
          stack: {
            children: [{
              component: {
                name: INDICADORES_TAB_SCREEN,
                options: {
                  topBar: {
                    title: {
                      text: 'Indicadores'
                    },
                    leftButtons: [
                      {
                        id: 'nav_user_btn',
                        icon: require('../assets/icons/ic_nav_user.png'),
                        color: 'white'
                      }
                    ],
                    rightButtons: [
                      {
                        id: 'nav_logout_btn',
                        icon: require('../assets/icons/ic_nav_logout.png'),
                        color: 'white'
                      }
                    ]
                  }
                }
              }
            }],
            options: {
              bottomTab: {
                icon: require('../assets/icons/ic_nav_logout.png'),
                testID: 'FIRST_TAB_BAR_BUTTON',
                text: 'Indicadores',
              }
            }
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: CONTRIBUYENTES_TAB_SCREEN,
                options: {
                  topBar: {
                    title: {
                      text: 'Contribuyentes'
                    },
                    leftButtons: [
                      {
                        id: 'nav_user_btn',
                        icon: require('../assets/icons/ic_nav_user.png'),
                        color: 'white'
                      }
                    ],
                    rightButtons: [
                      {
                        id: 'nav_logout_btn',
                        icon: require('../assets/icons/ic_nav_logout.png'),
                        color: 'white'
                      }
                    ]
                  }
                }
              }
            }],
            options: {
              bottomTab: {
                icon: require('../assets/icons/ic_nav_logout.png'),
                testID: 'SECOND_TAB_BAR_BUTTON',
                text: 'Participantes',
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
                      text: 'Expiraciones'
                    },
                    leftButtons: [
                      {
                        id: 'nav_user_btn',
                        icon: require('../assets/icons/ic_nav_user.png'),
                        color: 'white'
                      }
                    ],
                    rightButtons: [
                      {
                        id: 'nav_logout_btn',
                        icon: require('../assets/icons/ic_nav_logout.png'),
                        color: 'white'
                      }
                    ]
                  }
                }
              }
            }],
            options: {
              bottomTab: {
                icon: require('../assets/icons/ic_nav_logout.png'),
                testID: 'THIRD_TAB_BAR_BUTTON',
                text: 'Expiraciones',
              }
            }
          }
        }
        ,
        {
          stack: {
            children: [{
              component: {
                name: NOTIFICACIONES_TAB_SCREEN,
                options: {
                  topBar: {
                    title: {
                      text: 'Noticias'
                    },
                    leftButtons: [
                      {
                        id: 'nav_user_btn',
                        icon: require('../assets/icons/ic_nav_user.png'),
                        color: 'white'
                      }
                    ],
                    rightButtons: [
                      {
                        id: 'nav_logout_btn',
                        icon: require('../assets/icons/ic_nav_logout.png'),
                        color: 'white'
                      }
                    ]
                  }
                }
              }
            }],
            options: {
              bottomTab: {
                icon: require('../assets/icons/ic_nav_logout.png'),
                testID: 'FOURTH_TAB_BAR_BUTTON',
                text: 'Noticias',
              }
            }
          }
        }
      ]
      }
    }
  });
}