import {
    LOAD_NOTIFICACIONES
} from '../actions/actionTypes';




const notificacionesInitialState = {
    firstapicall:false, //la primera ves que llama al api para buscar cambios descarga todos los cambios     
    notificaciones : []
}


const notificacionesReducer = (state = notificacionesInitialState, action) => {
    switch(action.type){
        case  LOAD_NOTIFICACIONES:        
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


    export default notificacionesReducer;
