import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import {bindComponentNavigation} from '../../../navigation/Navigation';

export default class CommonScreenComponent extends Component{

    constructor(props){
        super(props);              
        bindComponentNavigation(this);  
    }


    navigationButtonPressed({ buttonId }) {  
        console.log("entro por commons");      
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
}
