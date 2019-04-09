import React, { Component } from 'react';
import AccounterLabel from '../../components/UI/AccounterLabel/AccounterLabel';

import { Navigation } from 'react-native-navigation';

class VencimientosScreen extends Component{

    
    constructor(props){
        super(props);
        Navigation.events().bindComponent(this);
    }

    navigationButtonPressed({ buttonId }) {
        console.log(buttonId+" pressed");
    }

    render(){

        return(
            <AccounterLabel>
                Hola esta es la pagina de expiraciones  
            </AccounterLabel>

        );

    }



} 


export default VencimientosScreen;