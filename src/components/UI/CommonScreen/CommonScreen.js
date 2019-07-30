import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import {bindComponentNavigation} from '../../../navigation/Navigation';

export default class CommonScreenComponent extends Component{

    constructor(props){
        super(props);              
        bindComponentNavigation(this);  
    }


    navigationButtonPressed({ buttonId }) {             
        if(buttonId==='leftMenu'){
            Navigation.mergeOptions('leftMenuDrawer', {
                sideMenu: {
                  left: {
                    visible: true
                  }
                }

            });
        }
        if(buttonId==='return'){
            Navigation.dismissAllModals();
        }
        if(buttonId==='plusMenu'){
             this.agregarContribuyente();
        }
    }
}
