import {
    LOAD_INDICADORES
} from '../actions/actionTypes';

const indicadoresInitialState = {
    firstapicall:false, //la primera ves que llama al api para buscar cambios descarga todos los cambios     
    indicadores : []
}


const indicadoresReducer = (state = indicadoresInitialState, action) => {
    switch(action.type){
        case  LOAD_INDICADORES:        
            return {
                ...state,
                tempCliente:{
                    ...state.tempCliente,
                    clientType:action.clientType
                }
            }
       
        default:
            return state;
    }
}


    export default indicadoresReducer;
