import React, { Component } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import AccounterLabel from '../../components/UI/AccounterLabel/AccounterLabel';
import ContribuyentesList from '../../components/UI/ContribuyentesList/ContribuyentesList';
import {iconsMap} from '../../components/UI/Icons/AppIcons';
import { Navigation } from 'react-native-navigation';
import { CONTRIBUYENTES_DETAIL_SCREEN, CONTRIBUYENTES_ADD_SCREEN } from '../../navigation/Screens';

const participantesList = [
    {
      key:"001",
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      key:"002",
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
    {
        key:"003",
        name: 'Deivid Suarez',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        key:"004",
        name: 'Jenny Ortiz',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        key:"005",
        name: 'Tobias Suarez',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        key:"006",
        name: 'Cecilia Niño',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        key:"007",
        name: 'Cata Suarez',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        key:"008",
        name: 'Pepito Perez',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    }
  ]

class ContribuyentesScreen extends Component{
    
    constructor(props){
        super(props);
        Navigation.events().bindComponent(this);
    }

    participantesListHandler = () => {
        this.editarContribuyente();
    }


    editarContribuyente(){        
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
                        text: 'Modal'
                      },
                      leftButtons: [
                        {          
                          id: 'leftMenu',
                          icon: iconsMap["arrow-left"],
                          color: 'gray'
                        }
                      ],
                    }
                  }
                }
              }]
            }
          });
    }

    agregarContribuyente(){        
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
                        text: 'Modal'
                      },
                      leftButtons: [
                        {          
                          id: 'leftMenu',
                          icon: iconsMap["arrow-left"],
                          color: 'gray'
                        }
                      ],
                    }
                  }
                }
              }]
            }
          });
    }

    navigationButtonPressed({ buttonId }) {
        console.log(buttonId+" pressed");
        if(buttonId==='leftMenu'){
            Navigation.mergeOptions('leftMenuDrawer', {
                sideMenu: {
                  left: {
                    visible: true
                  }
                }

            });
        }
        if(buttonId==='plusMenu'){
             this.agregarContribuyente();
        }
    }

 

    render(){

        return(
            <ScrollView>
                 <ContribuyentesList onPressHandler={this.participantesListHandler} dataArray={participantesList}></ContribuyentesList>                              
            </ScrollView>
        );

    }


    


} 


export default ContribuyentesScreen;
