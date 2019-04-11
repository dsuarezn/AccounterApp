import React, { Component } from 'react';
import AccounterLabel from '../../components/UI/AccounterLabel/AccounterLabel';
import ExpirationCardList from '../../components/UI/ExpirationCardList/ExpirationCardList';
import { Navigation } from 'react-native-navigation';

const dataArray=[
    { noVencimientos:"3",venceEn:"2", levelStyle:"red", vencimientos : [{ key:"01", vencimiento: "Impuesto renta y complementarios", owner: "Jenny Ortiz"  },{ key:"02", vencimiento: "Impuesto industria y comercio", owner: "Catalina Suarez"  },{ key:"03", vencimiento: "Declaración de renta", owner: "Tobias Suarez" }]},
    { noVencimientos:"3",venceEn:"10", levelStyle:"orange", vencimientos : [{ key:"01", vencimiento: "Impuesto renta y complementarios", owner: "Jenny Ortiz"  },{ key:"02", vencimiento: "Impuesto industria y comercio", owner: "Catalina Suarez"  },{ key:"03", vencimiento: "Declaración de renta", owner: "Tobias Suarez" }]},
    { noVencimientos:"3",venceEn:"30", levelStyle:"green", vencimientos : [{ key:"01", vencimiento: "Impuesto renta y complementarios", owner: "Jenny Ortiz"  },{ key:"02", vencimiento: "Impuesto industria y comercio", owner: "Catalina Suarez"  },{ key:"03", vencimiento: "Declaración de renta", owner: "Tobias Suarez" }]},
]
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
            <ExpirationCardList dataArray={dataArray}></ExpirationCardList>
        );

    }



} 


export default VencimientosScreen;