import {
    SET_INDICADORES_DATA
} from '../actions/actionTypes';

const indicadoresInitialState = {
    firstapicall:false, //la primera ves que llama al api para buscar cambios descarga todos los cambios     
    indicadores : []
}


const indicadoresReducer = (state = indicadoresInitialState, action) => {
    switch(action.type){
        case  SET_INDICADORES_DATA:        
            return {
                ...state,
                indicadores:action.indicadoresData
            }
       
        default:
            return state;
    }
}


    export default indicadoresReducer;
